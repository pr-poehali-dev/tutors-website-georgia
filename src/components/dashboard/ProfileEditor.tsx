import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const ProfileEditor = () => {
  const [profile, setProfile] = useState({
    firstName: 'Анна',
    lastName: 'Георгиева',
    subject: 'Английский язык',
    experience: '8',
    price: '50',
    city: 'Тбилиси',
    description: '',
    languages: ['Русский', 'Английский', 'Грузинский'],
    photoUrl: 'https://cdn.poehali.dev/projects/6f717542-dc59-437d-bef2-89b2dd3c4257/files/4aad52c8-8bc6-4d38-980a-35530a5b79c1.jpg',
  });

  const [newLanguage, setNewLanguage] = useState('');

  const subjects = [
    'Английский язык',
    'Грузинский язык',
    'Русский язык',
    'Математика',
    'Физика',
    'Химия',
    'Программирование',
    'Музыка',
    'Рисование',
  ];

  const handleAddLanguage = () => {
    if (newLanguage && !profile.languages.includes(newLanguage)) {
      setProfile({
        ...profile,
        languages: [...profile.languages, newLanguage],
      });
      setNewLanguage('');
    }
  };

  const handleRemoveLanguage = (language: string) => {
    setProfile({
      ...profile,
      languages: profile.languages.filter((l) => l !== language),
    });
  };

  const handleSave = () => {
    alert('Профиль сохранён!');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <img
                src={profile.photoUrl}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20"
              />
              <Button
                size="sm"
                className="absolute bottom-0 right-0 rounded-full w-10 h-10 p-0"
              >
                <Icon name="Camera" size={18} />
              </Button>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Фотография профиля</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Загрузите профессиональное фото. Рекомендуемый размер: 400x400px
              </p>
              <Button variant="outline" size="sm">
                <Icon name="Upload" size={16} className="mr-2" />
                Загрузить фото
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">Имя</Label>
          <Input
            id="firstName"
            value={profile.firstName}
            onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Фамилия</Label>
          <Input
            id="lastName"
            value={profile.lastName}
            onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="subject">Основной предмет</Label>
          <Select
            value={profile.subject}
            onValueChange={(value) => setProfile({ ...profile, subject: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {subjects.map((subject) => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="city">Город</Label>
          <Input
            id="city"
            value={profile.city}
            onChange={(e) => setProfile({ ...profile, city: e.target.value })}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="experience">Опыт работы (лет)</Label>
          <Input
            id="experience"
            type="number"
            value={profile.experience}
            onChange={(e) => setProfile({ ...profile, experience: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="price">Стоимость урока (₾)</Label>
          <Input
            id="price"
            type="number"
            value={profile.price}
            onChange={(e) => setProfile({ ...profile, price: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Языки преподавания</Label>
        <div className="flex flex-wrap gap-2 mb-3">
          {profile.languages.map((language) => (
            <Badge key={language} variant="secondary" className="gap-2">
              {language}
              <button onClick={() => handleRemoveLanguage(language)}>
                <Icon name="X" size={14} />
              </button>
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Input
            placeholder="Добавить язык"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddLanguage()}
          />
          <Button type="button" onClick={handleAddLanguage}>
            <Icon name="Plus" size={18} />
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">О себе</Label>
        <Textarea
          id="description"
          placeholder="Расскажите о своём опыте, методике преподавания и достижениях..."
          value={profile.description}
          onChange={(e) => setProfile({ ...profile, description: e.target.value })}
          rows={6}
        />
        <p className="text-xs text-muted-foreground">
          Это описание будет видно в вашем профиле в каталоге
        </p>
      </div>

      <div className="flex gap-3 pt-4">
        <Button onClick={handleSave} size="lg">
          <Icon name="Save" size={18} className="mr-2" />
          Сохранить изменения
        </Button>
        <Button variant="outline" size="lg">
          <Icon name="Eye" size={18} className="mr-2" />
          Предпросмотр профиля
        </Button>
      </div>
    </div>
  );
};

export default ProfileEditor;
