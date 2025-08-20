import React from 'react';
import { useParams } from 'react-router-dom';
import { Star, MapPin, Calendar, Users, Wifi, Car, Waves, Coffee, Shield, TrendingUp, Camera, FileText, ChevronLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

const HotelDetail = () => {
  const { id } = useParams();

  // Мокданные отеля
  const hotel = {
    id: '1',
    name: 'Four Seasons Hotel Moscow',
    location: 'Москва, ул. Охотный Ряд, 2',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop'
    ],
    rating: 4.8,
    secretRating: 4.2,
    price: 25000,
    priceRange: '20,000 - 35,000',
    verifiedReports: 12,
    lastCheck: '2 дня назад',
    description: 'Роскошный отель в самом сердце Москвы с видом на Красную площадь. Предлагает премиальный сервис, изысканную кухню и элегантные номера.',
    categories: {
      service: 4.1,
      cleanliness: 4.5,
      amenities: 4.0,
      value: 3.8,
      location: 4.9,
      food: 4.3
    },
    amenities: [
      { name: 'WiFi', icon: Wifi, available: true },
      { name: 'Парковка', icon: Car, available: true },
      { name: 'Бассейн', icon: Waves, available: true },
      { name: 'Ресторан', icon: Coffee, available: true }
    ],
    recentReports: [
      {
        id: '1',
        date: '15.12.2024',
        inspector: 'Анна К.',
        rating: 4.2,
        summary: 'Отличный сервис, но есть проблемы с завтраком',
        positives: 'Быстрое размещение, вежливый персонал, чистые номера',
        negatives: 'Ограниченный выбор на завтраке, шум от соседних номеров',
        photos: 3
      },
      {
        id: '2',
        date: '08.12.2024',
        inspector: 'Михаил С.',
        rating: 4.0,
        summary: 'Хорошее расположение, средний сервис',
        positives: 'Прекрасный вид из окна, удобная кровать',
        negatives: 'Долгое ожидания в ресторане, проблемы с горячей водой',
        photos: 5
      }
    ],
    competitors: [
      { name: 'Ritz-Carlton Moscow', rating: 4.6, secretRating: 4.6, price: 30000 },
      { name: 'Hotel Baltschug Kempinski', rating: 4.7, secretRating: 4.1, price: 18000 },
      { name: 'Арарат Парк Хаят', rating: 4.6, secretRating: 4.3, price: 22000 }
    ],
    trends: {
      service: { current: 4.1, change: '+0.2', trend: 'up' },
      cleanliness: { current: 4.5, change: '-0.1', trend: 'down' },
      amenities: { current: 4.0, change: '0.0', trend: 'stable' },
      value: { current: 3.8, change: '+0.3', trend: 'up' }
    }
  };

  const getCategoryColor = (score: number) => {
    if (score >= 4.5) return 'text-success';
    if (score >= 4.0) return 'text-warning';
    return 'text-destructive';
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→';
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6 text-sm text-muted-foreground">
          <Button variant="ghost" size="sm" className="pl-0">
            <ChevronLeft className="h-4 w-4 mr-1" />
            Назад к поиску
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hotel Header */}
            <Card className="shadow-card-custom animate-fade-in">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={hotel.images[0]}
                    alt={hotel.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 backdrop-blur">
                      <Shield className="h-3 w-3 mr-1" />
                      Проверено экспертами
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/90 backdrop-blur">
                      <Camera className="h-3 w-3 mr-1" />
                      {hotel.recentReports.reduce((sum, r) => sum + r.photos, 0)} фото
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        {hotel.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">₽{hotel.price.toLocaleString()}</div>
                      <div className="text-sm text-muted-foreground">за ночь</div>
                      <div className="text-xs text-muted-foreground">от ₽{hotel.priceRange}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="h-5 w-5 fill-warning text-warning" />
                      <span className="font-semibold text-lg">{hotel.rating}</span>
                      <span className="text-muted-foreground">общая оценка</span>
                    </div>
                    <div className="flex items-center space-x-2 px-3 py-1 bg-ostrovok-green/10 rounded-md">
                      <Shield className="h-4 w-4 text-ostrovok-green" />
                      <span className="font-bold text-lg text-ostrovok-green">{hotel.secretRating}</span>
                      <span className="text-ostrovok-green">секретная оценка</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">{hotel.description}</p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <FileText className="h-4 w-4" />
                        <span>{hotel.verifiedReports} проверок</span>
                      </div>
                      <div>Последняя проверка: {hotel.lastCheck}</div>
                    </div>
                    <Button className="shadow-button-custom">
                      Забронировать
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Categories Analysis */}
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle>Детальная оценка по категориям</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(hotel.categories).map(([key, value]) => {
                    const categoryNames: Record<string, string> = {
                      service: 'Сервис',
                      cleanliness: 'Чистота',
                      amenities: 'Удобства',
                      value: 'Цена/качество',
                      location: 'Расположение',
                      food: 'Питание'
                    };
                    
                    const trend = hotel.trends[key as keyof typeof hotel.trends];
                    
                    return (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{categoryNames[key]}</span>
                          <div className="flex items-center space-x-2">
                            <span className={`font-bold ${getCategoryColor(value)}`}>
                              {value}
                            </span>
                            {trend && (
                              <Badge variant="outline" className={`text-xs ${getTrendColor(trend.trend)}`}>
                                {getTrendIcon(trend.trend)} {trend.change}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <Progress value={(value / 5) * 100} className="h-2" />
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle>Последние отчеты экспертов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {hotel.recentReports.map((report) => (
                    <div key={report.id} className="p-4 rounded-lg border">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Shield className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Эксперт {report.inspector}</div>
                            <div className="text-sm text-muted-foreground">{report.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant="outline">
                            <Star className="h-3 w-3 mr-1" />
                            {report.rating}
                          </Badge>
                          <Badge variant="secondary">
                            <Camera className="h-3 w-3 mr-1" />
                            {report.photos}
                          </Badge>
                        </div>
                      </div>
                      
                      <h4 className="font-medium mb-2">{report.summary}</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-success font-medium mb-1">Плюсы:</div>
                          <p className="text-muted-foreground">{report.positives}</p>
                        </div>
                        <div>
                          <div className="text-destructive font-medium mb-1">Минусы:</div>
                          <p className="text-muted-foreground">{report.negatives}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Amenities */}
            <Card className="shadow-card-custom animate-slide-up">
              <CardHeader>
                <CardTitle>Удобства</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {hotel.amenities.map((amenity, index) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div key={index} className={`flex items-center space-x-2 p-2 rounded ${amenity.available ? 'text-success' : 'text-muted-foreground opacity-50'}`}>
                        <IconComponent className="h-4 w-4" />
                        <span className="text-sm">{amenity.name}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Comparison */}
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle>Сравнение с конкурентами</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hotel.competitors.map((competitor, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="font-medium text-sm">{competitor.name}</div>
                        <div className="text-sm">₽{competitor.price.toLocaleString()}</div>
                      </div>
                      <div className="flex items-center space-x-4 text-xs">
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-warning text-warning" />
                          <span>{competitor.rating}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Shield className="h-3 w-3 text-ostrovok-green" />
                          <span className="text-ostrovok-green font-medium">{competitor.secretRating}</span>
                        </div>
                      </div>
                      {index < hotel.competitors.length - 1 && <Separator className="mt-3" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card-custom">
              <CardContent className="p-4">
                <div className="space-y-3">
                  <Button className="w-full shadow-button-custom">
                    Забронировать сейчас
                  </Button>
                  <Button variant="outline" className="w-full">
                    Добавить в избранное
                  </Button>
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Создать отчет
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;