import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Textarea } from '@/components/ui/textarea';

interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  description: string;
}

const EducationEditor = () => {
  const [educations, setEducations] = useState<Education[]>([
    {
      id: '1',
      institution: 'Тбилисский государственный университет',
      degree: 'Магистр',
      field: 'Филология',
      startYear: '2012',
      endYear: '2016',
      description: 'Специализация: английская филология',
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newEducation, setNewEducation] = useState<Education>({
    id: '',
    institution: '',
    degree: '',
    field: '',
    startYear: '',
    endYear: '',
    description: '',
  });

  const handleAddEducation = () => {
    if (newEducation.institution && newEducation.degree) {
      setEducations([
        ...educations,
        { ...newEducation, id: Date.now().toString() },
      ]);
      setNewEducation({
        id: '',
        institution: '',
        degree: '',
        field: '',
        startYear: '',
        endYear: '',
        description: '',
      });
      setIsAdding(false);
    }
  };

  const handleRemoveEducation = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Образование</h3>
          <p className="text-sm text-muted-foreground">
            Добавьте информацию о вашем образовании
          </p>
        </div>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)}>
            <Icon name="Plus" size={18} className="mr-2" />
            Добавить
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {educations.map((education) => (
          <Card key={education.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon name="GraduationCap" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{education.degree}</h4>
                    <p className="text-muted-foreground">{education.institution}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {education.field} • {education.startYear} - {education.endYear}
                    </p>
                    {education.description && (
                      <p className="text-sm mt-2">{education.description}</p>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveEducation(education.id)}
                >
                  <Icon name="Trash2" size={18} className="text-destructive" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {isAdding && (
        <Card className="border-2 border-dashed">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-4">Добавить образование</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="institution">Учебное заведение</Label>
                <Input
                  id="institution"
                  placeholder="Тбилисский государственный университет"
                  value={newEducation.institution}
                  onChange={(e) =>
                    setNewEducation({ ...newEducation, institution: e.target.value })
                  }
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="degree">Степень</Label>
                  <Input
                    id="degree"
                    placeholder="Бакалавр, Магистр, Кандидат наук"
                    value={newEducation.degree}
                    onChange={(e) =>
                      setNewEducation({ ...newEducation, degree: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="field">Специальность</Label>
                  <Input
                    id="field"
                    placeholder="Филология, Математика"
                    value={newEducation.field}
                    onChange={(e) =>
                      setNewEducation({ ...newEducation, field: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startYear">Год начала</Label>
                  <Input
                    id="startYear"
                    type="number"
                    placeholder="2012"
                    value={newEducation.startYear}
                    onChange={(e) =>
                      setNewEducation({ ...newEducation, startYear: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endYear">Год окончания</Label>
                  <Input
                    id="endYear"
                    type="number"
                    placeholder="2016"
                    value={newEducation.endYear}
                    onChange={(e) =>
                      setNewEducation({ ...newEducation, endYear: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="eduDescription">Дополнительная информация</Label>
                <Textarea
                  id="eduDescription"
                  placeholder="Специализация, достижения, дипломные работы..."
                  value={newEducation.description}
                  onChange={(e) =>
                    setNewEducation({ ...newEducation, description: e.target.value })
                  }
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <Button onClick={handleAddEducation}>
                  <Icon name="Check" size={18} className="mr-2" />
                  Добавить
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsAdding(false);
                    setNewEducation({
                      id: '',
                      institution: '',
                      degree: '',
                      field: '',
                      startYear: '',
                      endYear: '',
                      description: '',
                    });
                  }}
                >
                  Отмена
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {educations.length === 0 && !isAdding && (
        <Card className="border-dashed">
          <CardContent className="p-12 text-center">
            <Icon name="GraduationCap" size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Образование не добавлено</h3>
            <p className="text-muted-foreground mb-4">
              Добавьте информацию о вашем образовании, чтобы повысить доверие учеников
            </p>
            <Button onClick={() => setIsAdding(true)}>
              <Icon name="Plus" size={18} className="mr-2" />
              Добавить образование
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default EducationEditor;
