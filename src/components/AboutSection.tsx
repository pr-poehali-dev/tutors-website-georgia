import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const AboutSection = () => {
  const features = [
    {
      icon: 'UserCheck',
      title: 'Проверенные репетиторы',
      description: 'Все преподаватели проходят тщательную проверку документов и квалификации',
    },
    {
      icon: 'Award',
      title: 'Сертифицированные специалисты',
      description: 'Репетиторы с подтверждёнными дипломами и международными сертификатами',
    },
    {
      icon: 'Calendar',
      title: 'Гибкий график',
      description: 'Выбирайте удобное время занятий, которое подходит именно вам',
    },
    {
      icon: 'Video',
      title: 'Онлайн и офлайн',
      description: 'Занятия как в онлайн формате, так и при личной встрече',
    },
    {
      icon: 'TrendingUp',
      title: 'Отслеживание прогресса',
      description: 'Регулярная обратная связь о достижениях и планы развития',
    },
    {
      icon: 'Shield',
      title: 'Безопасные платежи',
      description: 'Все транзакции защищены, оплата только через платформу',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">О платформе</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы создали удобную платформу для поиска квалифицированных репетиторов в Грузии
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-muted/20 rounded-3xl p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Почему выбирают нас?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">Более 500 профессиональных репетиторов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">Средний рейтинг преподавателей 4.8 из 5</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">Более 10,000 успешных уроков проведено</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-lg">Поддержка 24/7 на русском языке</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-2">92%</div>
                  <p className="text-muted-foreground">учеников улучшили свои результаты за первые 3 месяца</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-secondary mb-2">4.9</div>
                  <p className="text-muted-foreground">средняя оценка платформы от пользователей</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
