import React, { useState } from 'react';
import { Plus, FileText, Camera, Star, Upload, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Reports = () => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportData, setReportData] = useState({
    hotelName: '',
    location: '',
    checkInDate: '',
    checkOutDate: '',
    roomType: '',
    overallRating: 0,
    categories: {
      service: 0,
      cleanliness: 0,
      amenities: 0,
      value: 0,
      food: 0
    },
    positives: '',
    negatives: '',
    recommendations: ''
  });

  const recentReports = [
    {
      id: '1',
      hotel: 'Four Seasons Moscow',
      date: '15.12.2024',
      reporter: 'Анна К.',
      status: 'Опубликован',
      rating: 4.2,
      issues: 3
    },
    {
      id: '2',
      hotel: 'Ritz-Carlton Moscow',
      date: '14.12.2024',
      reporter: 'Михаил С.',
      status: 'На проверке',
      rating: 4.6,
      issues: 1
    },
    {
      id: '3',
      hotel: 'Hotel Baltschug',
      date: '12.12.2024',
      reporter: 'Елена В.',
      status: 'Опубликован',
      rating: 3.8,
      issues: 5
    }
  ];

  const StarRating = ({ value, onChange }: { value: number; onChange: (value: number) => void }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="transition-colors"
          >
            <Star 
              className={`h-5 w-5 ${
                star <= value 
                  ? 'fill-warning text-warning' 
                  : 'text-muted-foreground'
              }`} 
            />
          </button>
        ))}
      </div>
    );
  };

  const handleSubmitReport = () => {
    // Здесь будет логика отправки отчета
    console.log('Отчет отправлен:', reportData);
    setIsReportModalOpen(false);
    // Сброс формы
    setReportData({
      hotelName: '',
      location: '',
      checkInDate: '',
      checkOutDate: '',
      roomType: '',
      overallRating: 0,
      categories: {
        service: 0,
        cleanliness: 0,
        amenities: 0,
        value: 0,
        food: 0
      },
      positives: '',
      negatives: '',
      recommendations: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8 animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold mb-2">Система отчетов</h1>
            <p className="text-muted-foreground">
              Создавайте и просматривайте отчеты скрытых проверок
            </p>
          </div>
          
          <Dialog open={isReportModalOpen} onOpenChange={setIsReportModalOpen}>
            <DialogTrigger asChild>
              <Button className="shadow-button-custom">
                <Plus className="h-4 w-4 mr-2" />
                Создать отчет
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Новый отчет скрытой проверки</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6">
                {/* Основная информация */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Название отеля</label>
                    <Input 
                      placeholder="Название отеля"
                      value={reportData.hotelName}
                      onChange={(e) => setReportData({...reportData, hotelName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Местоположение</label>
                    <Input 
                      placeholder="Город, район"
                      value={reportData.location}
                      onChange={(e) => setReportData({...reportData, location: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Дата заезда</label>
                    <Input 
                      type="date"
                      value={reportData.checkInDate}
                      onChange={(e) => setReportData({...reportData, checkInDate: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Дата выезда</label>
                    <Input 
                      type="date"
                      value={reportData.checkOutDate}
                      onChange={(e) => setReportData({...reportData, checkOutDate: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Тип номера</label>
                  <Select value={reportData.roomType} onValueChange={(value) => setReportData({...reportData, roomType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип номера" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="standard">Стандарт</SelectItem>
                      <SelectItem value="superior">Улучшенный</SelectItem>
                      <SelectItem value="deluxe">Делюкс</SelectItem>
                      <SelectItem value="suite">Люкс</SelectItem>
                      <SelectItem value="penthouse">Пентхаус</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Общая оценка */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Общая оценка</label>
                  <StarRating 
                    value={reportData.overallRating} 
                    onChange={(value) => setReportData({...reportData, overallRating: value})}
                  />
                </div>

                {/* Оценки по категориям */}
                <div>
                  <label className="text-sm font-medium mb-4 block">Оценка по категориям</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries({
                      service: 'Сервис',
                      cleanliness: 'Чистота',
                      amenities: 'Удобства',
                      value: 'Соотношение цена/качество',
                      food: 'Питание'
                    }).map(([key, label]) => (
                      <div key={key}>
                        <div className="text-sm text-muted-foreground mb-2">{label}</div>
                        <StarRating
                          value={reportData.categories[key as keyof typeof reportData.categories]}
                          onChange={(value) => setReportData({
                            ...reportData,
                            categories: { ...reportData.categories, [key]: value }
                          })}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Детальные отзывы */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Положительные моменты</label>
                    <Textarea 
                      placeholder="Что понравилось больше всего?"
                      value={reportData.positives}
                      onChange={(e) => setReportData({...reportData, positives: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Проблемы и недостатки</label>
                    <Textarea 
                      placeholder="Какие проблемы были выявлены?"
                      value={reportData.negatives}
                      onChange={(e) => setReportData({...reportData, negatives: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Рекомендации</label>
                    <Textarea 
                      placeholder="Ваши рекомендации для отеля"
                      value={reportData.recommendations}
                      onChange={(e) => setReportData({...reportData, recommendations: e.target.value})}
                    />
                  </div>
                </div>

                {/* Загрузка фото */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Фото и видео</label>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Перетащите файлы сюда или нажмите для выбора
                    </p>
                    <Button variant="outline" size="sm">
                      <Camera className="h-4 w-4 mr-2" />
                      Выбрать файлы
                    </Button>
                  </div>
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setIsReportModalOpen(false)}>
                    Отмена
                  </Button>
                  <Button onClick={handleSubmitReport} className="shadow-button-custom">
                    <Send className="h-4 w-4 mr-2" />
                    Отправить отчет
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Статистика отчетов */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-card-custom animate-slide-up">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary mb-2">47</div>
              <div className="text-sm text-muted-foreground">Ваши отчеты</div>
            </CardContent>
          </Card>
          <Card className="shadow-card-custom animate-slide-up">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-success mb-2">39</div>
              <div className="text-sm text-muted-foreground">Опубликовано</div>
            </CardContent>
          </Card>
          <Card className="shadow-card-custom animate-slide-up">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-warning mb-2">6</div>
              <div className="text-sm text-muted-foreground">На проверке</div>
            </CardContent>
          </Card>
          <Card className="shadow-card-custom animate-slide-up">
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-info mb-2">4.3</div>
              <div className="text-sm text-muted-foreground">Средняя оценка</div>
            </CardContent>
          </Card>
        </div>

        {/* Список отчетов */}
        <Card className="shadow-card-custom">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Последние отчеты</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentReports.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/30 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{report.hotel}</div>
                      <div className="text-sm text-muted-foreground">
                        {report.date} • {report.reporter}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-bold">{report.rating}</div>
                      <div className="text-xs text-muted-foreground">{report.issues} проблем</div>
                    </div>
                    <Badge 
                      variant={report.status === 'Опубликован' ? 'default' : 'secondary'}
                    >
                      {report.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Просмотр
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;