'''
Business: CRUD operations for tutor profiles
Args: event with httpMethod, queryStringParameters (tutorId), body (profile data)
Returns: HTTP response with tutor data or success message
'''

import json
import os
from typing import Dict, Any
import psycopg2
from psycopg2.extras import RealDictCursor

def get_db_connection():
    return psycopg2.connect(
        os.environ['DATABASE_URL'],
        cursor_factory=RealDictCursor
    )

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    conn = get_db_connection()
    cur = conn.cursor()
    
    try:
        if method == 'GET':
            params = event.get('queryStringParameters') or {}
            tutor_id = params.get('tutorId')
            subject = params.get('subject')
            
            if tutor_id:
                cur.execute('''
                    SELECT t.*, 
                           COALESCE(json_agg(DISTINCT tl.language) FILTER (WHERE tl.language IS NOT NULL), '[]') as languages,
                           COALESCE(json_agg(DISTINCT jsonb_build_object(
                               'id', te.id,
                               'institution', te.institution,
                               'degree', te.degree,
                               'field', te.field,
                               'startYear', te.start_year,
                               'endYear', te.end_year,
                               'description', te.description
                           )) FILTER (WHERE te.id IS NOT NULL), '[]') as education,
                           COALESCE(json_agg(DISTINCT jsonb_build_object(
                               'id', tc.id,
                               'name', tc.name,
                               'year', tc.year,
                               'verified', tc.verified
                           )) FILTER (WHERE tc.id IS NOT NULL), '[]') as certificates
                    FROM tutors t
                    LEFT JOIN tutor_languages tl ON t.id = tl.tutor_id
                    LEFT JOIN tutor_education te ON t.id = te.tutor_id
                    LEFT JOIN tutor_certificates tc ON t.id = tc.tutor_id
                    WHERE t.id = %s
                    GROUP BY t.id
                ''', (tutor_id,))
                
                tutor = cur.fetchone()
                
                if tutor:
                    result = dict(tutor)
                    return {
                        'statusCode': 200,
                        'headers': {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*'
                        },
                        'isBase64Encoded': False,
                        'body': json.dumps(result, default=str)
                    }
                else:
                    return {
                        'statusCode': 404,
                        'headers': {'Access-Control-Allow-Origin': '*'},
                        'body': json.dumps({'error': 'Tutor not found'})
                    }
            
            query = '''
                SELECT t.id, t.first_name, t.last_name, t.subject, t.experience, 
                       t.price, t.city, t.rating, t.reviews_count, t.photo_url, t.verified,
                       COALESCE(json_agg(DISTINCT tl.language) FILTER (WHERE tl.language IS NOT NULL), '[]') as languages
                FROM tutors t
                LEFT JOIN tutor_languages tl ON t.id = tl.tutor_id
            '''
            
            conditions = []
            query_params = []
            
            if subject and subject != 'all':
                conditions.append('t.subject = %s')
                query_params.append(subject)
            
            if conditions:
                query += ' WHERE ' + ' AND '.join(conditions)
            
            query += ' GROUP BY t.id ORDER BY t.verified DESC, t.rating DESC'
            
            cur.execute(query, query_params)
            tutors = cur.fetchall()
            
            result = [dict(tutor) for tutor in tutors]
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps(result, default=str)
            }
        
        if method == 'POST':
            body_data = json.loads(event.get('body', '{}'))
            
            cur.execute('''
                INSERT INTO tutors (email, password_hash, first_name, last_name, subject, 
                                  experience, price, city, description, photo_url)
                VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
                RETURNING id
            ''', (
                body_data.get('email'),
                body_data.get('password_hash', ''),
                body_data.get('firstName'),
                body_data.get('lastName'),
                body_data.get('subject'),
                body_data.get('experience', 0),
                body_data.get('price', 0),
                body_data.get('city', 'Тбилиси'),
                body_data.get('description', ''),
                body_data.get('photoUrl', '')
            ))
            
            tutor_id = cur.fetchone()['id']
            
            if body_data.get('languages'):
                for language in body_data['languages']:
                    cur.execute(
                        'INSERT INTO tutor_languages (tutor_id, language) VALUES (%s, %s)',
                        (tutor_id, language)
                    )
            
            conn.commit()
            
            return {
                'statusCode': 201,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'success': True, 'tutorId': tutor_id})
            }
        
        if method == 'PUT':
            body_data = json.loads(event.get('body', '{}'))
            tutor_id = body_data.get('tutorId')
            
            if not tutor_id:
                return {
                    'statusCode': 400,
                    'headers': {'Access-Control-Allow-Origin': '*'},
                    'body': json.dumps({'error': 'tutorId is required'})
                }
            
            cur.execute('''
                UPDATE tutors 
                SET first_name = %s, last_name = %s, subject = %s, experience = %s,
                    price = %s, city = %s, description = %s, photo_url = %s,
                    updated_at = CURRENT_TIMESTAMP
                WHERE id = %s
            ''', (
                body_data.get('firstName'),
                body_data.get('lastName'),
                body_data.get('subject'),
                body_data.get('experience'),
                body_data.get('price'),
                body_data.get('city'),
                body_data.get('description'),
                body_data.get('photoUrl'),
                tutor_id
            ))
            
            conn.commit()
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'isBase64Encoded': False,
                'body': json.dumps({'success': True})
            }
    
    finally:
        cur.close()
        conn.close()
    
    return {
        'statusCode': 405,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'})
    }
