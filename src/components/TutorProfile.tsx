import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface Certificate {
  name: string;
  year: number;
}

interface Tutor {
  id: number;
  name: string;
  subject: string;
  experience: number;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  verified: boolean;
  languages: string[];
  description: string;
  education: string;
  certificates: Certificate[];
}

interface TutorProfileProps {
  tutor: Tutor;
  onBack: () => void;
}

const TutorProfile = ({ tutor, onBack }: TutorProfileProps) => {
  return (
    <section className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto max-w-5xl">
        <Button variant="ghost" onClick={onBack} className="mb-6">
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад к каталогу
        </Button>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={tutor.image}
                    alt={tutor.name}
                    className="w-full h-80 object-cover rounded-t-xl"
                  />
                  {tutor.verified && (
                    <Badge className="absolute top-4 right-4 bg-secondary">
                      <Icon name="BadgeCheck" size={14} className="mr-1" />
                      Проверен
                    </Badge>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h1 className="text-2xl font-bold mb-1">{tutor.name}</h1>
                    <p className="text-muted-foreground">{tutor.subject}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-lg">{tutor.rating}</span>
                    <span className="text-muted-foreground">({tutor.reviews} отзывов)</span>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Briefcase" size={18} className="text-muted-foreground" />
                      <span>Опыт: {tutor.experience} лет</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Languages" size={18} className="text-muted-foreground" />
                      <span>{tutor.languages.join(', ')}</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Icon name="Clock" size={18} className="text-muted-foreground" />
                      <span>Длительность урока: 60 мин</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="pt-2">
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-primary">{tutor.price} ₾</span>
                      <span className="text-muted-foreground">/ урок</span>
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Calendar" size={18} className="mr-2" />
                      Записаться на урок
                    </Button>
                    <Button variant="outline" className="w-full mt-2">
                      <Icon name="MessageCircle" size={18} className="mr-2" />
                      Написать сообщение
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">О преподавателе</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tutor.description}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Образование</h2>
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" size={24} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium">{tutor.education}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Icon name="Award" size={24} className="text-primary" />
                  Сертификаты и квалификация
                </h2>
                <div className="space-y-4">
                  {tutor.certificates.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon name="Medal" size={24} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">Получен в {cert.year} году</p>
                      </div>
                      <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground">
                        <Icon name="BadgeCheck" size={14} className="mr-1" />
                        Проверено
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Отзывы учеников</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4 py-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="font-semibold">Мария К.</span>
                      <span className="text-sm text-muted-foreground">2 недели назад</span>
                    </div>
                    <p className="text-muted-foreground">
                      Отличный преподаватель! Всё объясняет очень понятно, всегда готов ответить на вопросы. Занятия проходят интересно и продуктивно.
                    </p>
                  </div>

                  <div className="border-l-4 border-primary pl-4 py-2">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Icon key={star} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="font-semibold">Георгий А.</span>
                      <span className="text-sm text-muted-foreground">1 месяц назад</span>
                    </div>
                    <p className="text-muted-foreground">
                      Благодаря занятиям смог значительно улучшить свои знания. Рекомендую всем, кто хочет получить качественное образование!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorProfile;
