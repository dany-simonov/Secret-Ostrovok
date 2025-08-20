import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  BarChart3, 
  FileText, 
  User, 
  MapPin,
  Shield,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import LoginModal from './LoginModal';
import ExpertModal from './ExpertModal';

const Navigation = () => {
  const location = useLocation();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isExpertModalOpen, setIsExpertModalOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Поиск отелей', icon: Search },
    { path: '/analytics', label: 'Аналитика', icon: BarChart3 },
    { path: '/reports', label: 'Отчеты', icon: FileText },
    { path: '/hotels', label: 'Отели', icon: MapPin },
    { path: '/profile', label: 'Профиль', icon: User },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b border-border/40">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/22f8537f-9f95-4552-b4c6-da2ec84c9d80.png" 
              alt="Секретный островок" 
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
              Секретный островок
            </span>
          </Link>
          
          <div className="hidden md:flex gap-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.path) 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsExpertModalOpen(true)}
          >
            <Star className="h-4 w-4 mr-2" />
            Стать экспертом
          </Button>
          <Button 
            size="sm" 
            className="shadow-button-custom"
            onClick={() => setIsLoginModalOpen(true)}
          >
            Войти
          </Button>
        </div>
      </div>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginModalOpen(false);
          // Здесь можно добавить модальное окно регистрации
        }}
      />

      <ExpertModal
        isOpen={isExpertModalOpen}
        onClose={() => setIsExpertModalOpen(false)}
      />
    </nav>
  );
};

export default Navigation;