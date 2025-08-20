import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  Award, 
  MapPin, 
  Briefcase, 
  Mail, 
  Phone,
  CheckCircle
} from 'lucide-react';

interface ExpertModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExpertModal = ({ isOpen, onClose }: ExpertModalProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    specialization: '',
    motivation: '',
    portfolio: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Имитация отправки заявки
    setCurrentStep(4);
  };

  const benefits = [
    'Эксклюзивные проверки премиальных отелей',
    'Оплата за каждую проверку до 15,000₽',
    'Гибкий график работы',
    'Обучение и сертификация',
    'Доступ к закрытым акциям отелей'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-xl flex items-center justify-center space-x-2">
            <Star className="h-5 w-5 text-yellow-500" />
            <span>Стать экспертом Секретный островок</span>
          </DialogTitle>
          <DialogDescription className="text-center">
            Присоединяйтесь к команде профессиональных проверяющих
          </DialogDescription>
        </DialogHeader>

        {currentStep === 1 && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Преимущества работы экспертом</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Городов</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                  <div className="text-sm text-muted-foreground">Отелей</div>
                </CardContent>
              </Card>
            </div>

            <Button onClick={handleNext} className="w-full">
              Подать заявку
            </Button>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">Имя</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Иван"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Фамилия</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Иванов"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="ivan@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  className="pl-10"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+7 (999) 123-45-67"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">Город</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="city"
                  className="pl-10"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Москва"
                />
              </div>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" onClick={handlePrev} className="flex-1">
                Назад
              </Button>
              <Button onClick={handleNext} className="flex-1">
                Далее
              </Button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="experience">Опыт в сфере гостеприимства</Label>
              <Select onValueChange={(value) => handleInputChange('experience', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите опыт" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">Менее 1 года</SelectItem>
                  <SelectItem value="1-3">1-3 года</SelectItem>
                  <SelectItem value="3-5">3-5 лет</SelectItem>
                  <SelectItem value="5+">Более 5 лет</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialization">Специализация</Label>
              <Select onValueChange={(value) => handleInputChange('specialization', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Выберите специализацию" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="luxury">Люксовые отели</SelectItem>
                  <SelectItem value="business">Бизнес-отели</SelectItem>
                  <SelectItem value="boutique">Бутик-отели</SelectItem>
                  <SelectItem value="resort">Курортные отели</SelectItem>
                  <SelectItem value="budget">Бюджетные отели</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation">Почему вы хотите стать экспертом?</Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) => handleInputChange('motivation', e.target.value)}
                placeholder="Расскажите о своей мотивации..."
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="portfolio">Ссылка на портфолио (необязательно)</Label>
              <Input
                id="portfolio"
                value={formData.portfolio}
                onChange={(e) => handleInputChange('portfolio', e.target.value)}
                placeholder="https://..."
              />
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" onClick={handlePrev} className="flex-1">
                Назад
              </Button>
              <Button onClick={handleSubmit} className="flex-1">
                Отправить заявку
              </Button>
            </div>
          </div>
        )}

        {currentStep === 4 && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Заявка отправлена!</h3>
              <p className="text-muted-foreground">
                Мы рассмотрим вашу заявку в течение 3-5 рабочих дней и свяжемся с вами.
              </p>
            </div>
            <Badge variant="secondary" className="px-4 py-2">
              Номер заявки: #EXP-{Math.random().toString(36).substr(2, 6).toUpperCase()}
            </Badge>
            <Button onClick={onClose} className="w-full">
              Отлично!
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExpertModal;