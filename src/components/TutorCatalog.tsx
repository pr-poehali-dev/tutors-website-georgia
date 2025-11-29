import { useState } from 'react';
import TutorCard from './TutorCard';
import TutorProfile from './TutorProfile';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const mockTutors = [
  {
    id: 1,
    name: 'Анна Георгиева',
    subject: 'Английский язык',
    experience: 8,
    rating: 4.9,
    reviews: 127,
    price: 50,
    image: 'https://cdn.poehali.dev/projects/6f717542-dc59-437d-bef2-89b2dd3c4257/files/4aad52c8-8bc6-4d38-980a-35530a5b79c1.jpg',
    verified: true,
    languages: ['Русский', 'Английский', 'Грузинский'],
    description: 'Сертифицированный преподаватель английского языка с опытом работы более 8 лет. Специализируюсь на подготовке к международным экзаменам IELTS, TOEFL и Cambridge.',
    education: 'Тбилисский государственный университет, филологический факультет',
    certificates: [
      { name: 'CELTA Certificate', year: 2015 },
      { name: 'IELTS Examiner Certification', year: 2018 },
      { name: 'Cambridge TKT', year: 2016 },
    ],
  },
  {
    id: 2,
    name: 'Давид Мчедлидзе',
    subject: 'Математика',
    experience: 12,
    rating: 5.0,
    reviews: 203,
    price: 60,
    image: 'https://cdn.poehali.dev/projects/6f717542-dc59-437d-bef2-89b2dd3c4257/files/44fdd8e0-8150-415a-b54b-36048892ec99.jpg',
    verified: true,
    languages: ['Русский', 'Грузинский'],
    description: 'Кандидат физико-математических наук. Специализируюсь на подготовке к экзаменам и олимпиадам.',
    education: 'МГУ им. Ломоносова, механико-математический факультет',
    certificates: [
      { name: 'Кандидат наук', year: 2010 },
      { name: 'Преподаватель высшей категории', year: 2015 },
    ],
  },
  {
    id: 3,
    name: 'Елена Иванова',
    subject: 'Грузинский язык',
    experience: 5,
    rating: 4.8,
    reviews: 89,
    price: 45,
    image: 'https://cdn.poehali.dev/projects/6f717542-dc59-437d-bef2-89b2dd3c4257/files/849e8ca0-31d0-4b35-b483-0b1bb683077c.jpg',
    verified: true,
    languages: ['Русский', 'Грузинский', 'Английский'],
    description: 'Носитель грузинского языка. Помогу освоить язык с нуля или улучшить разговорные навыки.',
    education: 'Тбилисский государственный университет, филология',
    certificates: [
      { name: 'Сертификат преподавателя грузинского как иностранного', year: 2019 },
    ],
  },
  {
    id: 4,
    name: 'Михаил Петров',
    subject: 'Программирование',
    experience: 10,
    rating: 4.9,
    reviews: 156,
    price: 70,
    image: 'https://cdn.poehali.dev/projects/6f717542-dc59-437d-bef2-89b2dd3c4257/files/44fdd8e0-8150-415a-b54b-36048892ec99.jpg',
    verified: true,
    languages: ['Русский', 'Английский'],
    description: 'Senior разработчик с опытом работы в международных компаниях. Обучаю Python, JavaScript, React.',
    education: 'МФТИ, прикладная математика и информатика',
    certificates: [
      { name: 'AWS Certified Solutions Architect', year: 2020 },
      { name: 'Google Cloud Professional', year: 2021 },
    ],
  },
  {
    id: 5,
    name: 'София Абашидзе',
    subject: 'Физика',
    experience: 7,
    rating: 4.7,
    reviews: 94,
    price: 55,
    image: 'https://cdn.poehali.dev/projects/6f717542-dc59-437d-bef2-89b2dd3c4257/files/4aad52c8-8bc6-4d38-980a-35530a5b79c1.jpg',
    verified: true,
    languages: ['Русский', 'Грузинский', 'Английский'],
    description: 'Опытный преподаватель физики. Готовлю к поступлению в ВУЗы и к олимпиадам.',
    education: 'Тбилисский государственный университет, физический факультет',
    certificates: [
      { name: 'Магистр физических наук', year: 2016 },
    ],
  },
  {
    id: 6,
    name: 'Александр Коваль',
    subject: 'Химия',
    experience: 9,
    rating: 4.8,
    reviews: 112,
    price: 55,
    image: 'https://cdn.poehali.dev/projects/6f717542-dc59-437d-bef2-89b2dd3c4257/files/44fdd8e0-8150-415a-b54b-36048892ec99.jpg',
    verified: true,
    languages: ['Русский', 'Английский'],
    description: 'Кандидат химических наук. Индивидуальный подход к каждому ученику.',
    education: 'МГУ им. Ломоносова, химический факультет',
    certificates: [
      { name: 'Кандидат химических наук', year: 2014 },
    ],
  },
];

const TutorCatalog = () => {
  const [selectedTutor, setSelectedTutor] = useState<typeof mockTutors[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredTutors = mockTutors.filter((tutor) => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tutor.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || tutor.subject === selectedSubject;
    const matchesPrice = priceRange === 'all' ||
                        (priceRange === 'low' && tutor.price < 50) ||
                        (priceRange === 'medium' && tutor.price >= 50 && tutor.price < 65) ||
                        (priceRange === 'high' && tutor.price >= 65);
    
    return matchesSearch && matchesSubject && matchesPrice;
  });

  if (selectedTutor) {
    return <TutorProfile tutor={selectedTutor} onBack={() => setSelectedTutor(null)} />;
  }

  return (
    <section id="catalog" className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Каталог репетиторов</h2>
          <p className="text-xl text-muted-foreground">
            Найдите идеального преподавателя для достижения ваших целей
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по имени или предмету"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedSubject} onValueChange={setSelectedSubject}>
              <SelectTrigger>
                <SelectValue placeholder="Все предметы" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Все предметы</SelectItem>
                <SelectItem value="Английский язык">Английский язык</SelectItem>
                <SelectItem value="Математика">Математика</SelectItem>
                <SelectItem value="Грузинский язык">Грузинский язык</SelectItem>
                <SelectItem value="Программирование">Программирование</SelectItem>
                <SelectItem value="Физика">Физика</SelectItem>
                <SelectItem value="Химия">Химия</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger>
                <SelectValue placeholder="Цена" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Любая цена</SelectItem>
                <SelectItem value="low">До 50 ₾</SelectItem>
                <SelectItem value="medium">50-65 ₾</SelectItem>
                <SelectItem value="high">От 65 ₾</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" onClick={() => {
              setSearchQuery('');
              setSelectedSubject('all');
              setPriceRange('all');
            }}>
              <Icon name="RotateCcw" size={18} className="mr-2" />
              Сбросить
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor) => (
            <div key={tutor.id} className="animate-fade-in">
              <TutorCard {...tutor} onClick={() => setSelectedTutor(tutor)} />
            </div>
          ))}
        </div>

        {filteredTutors.length === 0 && (
          <div className="text-center py-12">
            <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Репетиторы не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить фильтры поиска</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TutorCatalog;
