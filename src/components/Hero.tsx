import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

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

const Hero = () => {
  const [selectedSubject, setSelectedSubject] = useState('');

  return (
    <section
      id="home"
      className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-muted/30"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Найдите лучшего репетитора в Грузии
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональные преподаватели с подтверждёнными сертификатами для
              индивидуального обучения
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-lg space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Предмет</label>
                <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Выберите предмет" />
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
                <label className="text-sm font-medium">Город</label>
                <Input placeholder="Тбилиси" />
              </div>

              <Button className="w-full" size="lg">
                <Icon name="Search" className="mr-2" size={20} />
                Найти репетитора
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Репетиторов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">30+</div>
                <div className="text-sm text-muted-foreground">Предметов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Рейтинг</div>
              </div>
            </div>
          </div>

          <div className="hidden md:block animate-scale-in">
            <img
              src="https://cdn.poehali.dev/projects/6f717542-dc59-437d-bef2-89b2dd3c4257/files/849e8ca0-31d0-4b35-b483-0b1bb683077c.jpg"
              alt="Репетитор с учеником"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
