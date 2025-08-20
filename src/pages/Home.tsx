import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Filter, Map, Grid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import HotelCard from '@/components/HotelCard';
import Footer from '@/components/Footer';

const Home = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Мокданные отелей
  const hotels = [
    {
      id: '1',
      name: 'Four Seasons Hotel Moscow',
      location: 'Москва, Центр',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop',
      rating: 4.8,
      secretRating: 4.2,
      price: 25000,
      verifiedReports: 12,
      trend: 'up' as const,
      lastCheck: '2 дня назад',
      categories: {
        service: 4.1,
        cleanliness: 4.5,
        amenities: 4.0,
        value: 3.8
      }
    },
    {
      id: '2',
      name: 'Ritz-Carlton Moscow',
      location: 'Москва, Тверская',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop',
      rating: 4.9,
      secretRating: 4.6,
      price: 30000,
      verifiedReports: 18,
      trend: 'stable' as const,
      lastCheck: '1 день назад',
      categories: {
        service: 4.7,
        cleanliness: 4.8,
        amenities: 4.5,
        value: 4.2
      }
    },
    {
      id: '3',
      name: 'Hotel Baltschug Kempinski',
      location: 'Москва, Замоскворечье',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop',
      rating: 4.7,
      secretRating: 4.1,
      price: 18000,
      verifiedReports: 9,
      trend: 'down' as const,
      lastCheck: '3 дня назад',
      categories: {
        service: 4.0,
        cleanliness: 4.3,
        amenities: 3.9,
        value: 4.2
      }
    },
    {
      id: '4',
      name: 'Арарат Парк Хаят Москва',
      location: 'Москва, Неглинная',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
      rating: 4.6,
      secretRating: 4.3,
      price: 22000,
      verifiedReports: 15,
      trend: 'up' as const,
      lastCheck: '1 день назад',
      categories: {
        service: 4.4,
        cleanliness: 4.2,
        amenities: 4.3,
        value: 4.1
      }
    }
  ];

  const topStats = [
    { label: 'Проверенных отелей', value: '2,847', trend: '+12%' },
    { label: 'Скрытых проверок', value: '15,329', trend: '+8%' },
    { label: 'Экспертов', value: '234', trend: '+5%' },
    { label: 'Средняя оценка', value: '4.2', trend: '+0.3' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Секретный островок
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Находите лучшие отели через анализ скрытых проверок и независимых оценок
          </p>
        </div>

        {/* Search Section */}
        <Card className="mb-8 shadow-card-custom">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Куда едем?" 
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Заезд - выезд" className="pl-10" />
              </div>
              <div className="relative">
                <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="2 взрослых" className="pl-10" />
              </div>
              <Button className="w-full shadow-button-custom">
                <Search className="h-4 w-4 mr-2" />
                Найти отели
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {topStats.map((stat, index) => (
            <Card key={index} className="text-center animate-slide-up shadow-card-custom">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-1">{stat.label}</div>
                <Badge variant="secondary" className="text-xs">
                  {stat.trend}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View Toggle */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-semibold">Рекомендуемые отели</h2>
            <Badge variant="outline">
              Москва • {hotels.length} отелей
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'map' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setViewMode('map')}
            >
              <Map className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Фильтры
            </Button>
          </div>
        </div>

        {/* Hotels Grid */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
            {hotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <Card className="h-96 shadow-card-custom">
            <CardHeader>
              <CardTitle>Карта отелей</CardTitle>
            </CardHeader>
            <CardContent className="h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Map className="h-12 w-12 mx-auto mb-4" />
                <p>Интерактивная карта отелей</p>
                <p className="text-sm">Интеграция с картами будет добавлена</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;