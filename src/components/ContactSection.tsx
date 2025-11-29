import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const ContactSection = () => {
  return (
    <section id="contacts" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl text-muted-foreground">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:info@repetitory.ge" className="text-muted-foreground hover:text-primary transition-colors">
                    info@repetitory.ge
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Телефон</h3>
                  <a href="tel:+995555123456" className="text-muted-foreground hover:text-primary transition-colors">
                    +995 555 12 34 56
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">
                    Тбилиси, проспект Руставели, 25
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <Icon name="Clock" size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Часы работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Пт: 9:00 - 20:00<br />
                    Сб-Вс: 10:00 - 18:00
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-xl hover:bg-primary/20 transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" size={24} className="text-primary" />
              </a>
              <a
                href="#"
                className="bg-secondary/10 p-3 rounded-xl hover:bg-secondary/20 transition-colors"
                aria-label="WhatsApp"
              >
                <Icon name="MessageCircle" size={24} className="text-secondary" />
              </a>
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-xl hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Icon name="Instagram" size={24} className="text-primary" />
              </a>
              <a
                href="#"
                className="bg-secondary/10 p-3 rounded-xl hover:bg-secondary/20 transition-colors"
                aria-label="Facebook"
              >
                <Icon name="Facebook" size={24} className="text-secondary" />
              </a>
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Имя</label>
                  <Input placeholder="Ваше имя" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <Input type="tel" placeholder="+995 555 12 34 56" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите, чем мы можем помочь..."
                    rows={5}
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={18} className="mr-2" />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
