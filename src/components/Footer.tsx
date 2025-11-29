import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="GraduationCap" size={28} className="text-primary" />
              <span className="text-xl font-bold">Репетиторы.ge</span>
            </div>
            <p className="text-background/70 text-sm">
              Лучшая платформа для поиска квалифицированных репетиторов в Грузии
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Разделы</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/70 hover:text-background transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#catalog" className="text-background/70 hover:text-background transition-colors">
                  Каталог репетиторов
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-background transition-colors">
                  О платформе
                </a>
              </li>
              <li>
                <a href="#faq" className="text-background/70 hover:text-background transition-colors">
                  Вопросы и ответы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Для репетиторов</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Стать репетитором
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Правила платформы
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors">
                  Помощь и поддержка
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-background/70">
                <Icon name="Mail" size={16} />
                <a href="mailto:info@repetitory.ge" className="hover:text-background transition-colors">
                  info@repetitory.ge
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Icon name="Phone" size={16} />
                <a href="tel:+995555123456" className="hover:text-background transition-colors">
                  +995 555 12 34 56
                </a>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Icon name="MapPin" size={16} />
                <span>Тбилиси, пр. Руставели, 25</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            © 2024 Репетиторы.ge. Все права защищены
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Icon name="Send" size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Icon name="MessageCircle" size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Icon name="Instagram" size={20} />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Icon name="Facebook" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
