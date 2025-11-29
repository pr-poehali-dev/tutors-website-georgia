import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Репетиторы.ge</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Главная
            </a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors">
              Каталог
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              О платформе
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              Вопросы и ответы
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">
              Контакты
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline">Войти</Button>
            <Button>Стать репетитором</Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-fade-in">
            <a href="#home" className="text-foreground hover:text-primary transition-colors py-2">
              Главная
            </a>
            <a href="#catalog" className="text-foreground hover:text-primary transition-colors py-2">
              Каталог
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">
              О платформе
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors py-2">
              Вопросы и ответы
            </a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors py-2">
              Контакты
            </a>
            <div className="flex flex-col gap-2 mt-2">
              <Button variant="outline" className="w-full">Войти</Button>
              <Button className="w-full">Стать репетитором</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
