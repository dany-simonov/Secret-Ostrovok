import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Shield,
  Heart
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-secondary/5 to-primary/5 border-t border-border/40">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/22f8537f-9f95-4552-b4c6-da2ec84c9d80.png" 
                alt="Секретный островок" 
                className="w-10 h-10 rounded-lg"
              />
              <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                Секретный островок
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Находите лучшие отели через анализ скрытых проверок и независимых оценок. 
              Ваш надежный спутник в путешествиях.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Быстрые ссылки */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Поиск отелей
                </Link>
              </li>
              <li>
                <Link to="/hotels" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Каталог отелей
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Аналитика
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Отчеты
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Профиль
                </Link>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Как это работает
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Стать экспертом
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Партнерам
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  API
                </a>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Контакты</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">Москва, Россия</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">hello@ostrovok.ru</span>
              </div>
            </div>
          </div>
        </div>

        {/* Разделитель */}
        <div className="border-t border-border/40 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>© {currentYear} Секретный островок. Сделано с</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>для путешественников</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Условия использования
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;