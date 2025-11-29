-- Таблица репетиторов
CREATE TABLE tutors (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    experience INTEGER DEFAULT 0,
    price DECIMAL(10, 2) DEFAULT 0,
    city VARCHAR(100),
    description TEXT,
    photo_url TEXT,
    rating DECIMAL(3, 2) DEFAULT 0,
    reviews_count INTEGER DEFAULT 0,
    verified BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица языков репетиторов
CREATE TABLE tutor_languages (
    id SERIAL PRIMARY KEY,
    tutor_id INTEGER NOT NULL REFERENCES tutors(id),
    language VARCHAR(50) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица образования
CREATE TABLE tutor_education (
    id SERIAL PRIMARY KEY,
    tutor_id INTEGER NOT NULL REFERENCES tutors(id),
    institution VARCHAR(255) NOT NULL,
    degree VARCHAR(100) NOT NULL,
    field VARCHAR(100),
    start_year INTEGER,
    end_year INTEGER,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица сертификатов
CREATE TABLE tutor_certificates (
    id SERIAL PRIMARY KEY,
    tutor_id INTEGER NOT NULL REFERENCES tutors(id),
    name VARCHAR(255) NOT NULL,
    year INTEGER,
    verified BOOLEAN DEFAULT FALSE,
    document_url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица расписания
CREATE TABLE tutor_schedule (
    id SERIAL PRIMARY KEY,
    tutor_id INTEGER NOT NULL REFERENCES tutors(id),
    day_of_week VARCHAR(20) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    enabled BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Таблица форматов занятий
CREATE TABLE tutor_lesson_formats (
    id SERIAL PRIMARY KEY,
    tutor_id INTEGER NOT NULL REFERENCES tutors(id),
    online BOOLEAN DEFAULT TRUE,
    offline BOOLEAN DEFAULT TRUE,
    duration INTEGER DEFAULT 60,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Создание индексов
CREATE INDEX idx_tutors_email ON tutors(email);
CREATE INDEX idx_tutors_subject ON tutors(subject);
CREATE INDEX idx_tutors_verified ON tutors(verified);
CREATE INDEX idx_tutor_languages_tutor_id ON tutor_languages(tutor_id);
CREATE INDEX idx_tutor_education_tutor_id ON tutor_education(tutor_id);
CREATE INDEX idx_tutor_certificates_tutor_id ON tutor_certificates(tutor_id);
CREATE INDEX idx_tutor_schedule_tutor_id ON tutor_schedule(tutor_id);
