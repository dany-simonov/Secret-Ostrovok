import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, TrendingUp, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import HotelCard from '@/components/HotelCard';

const Hotels = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [filterRegion, setFilterRegion] = useState('all');

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
    },
    {
      id: '5',
      name: 'Метрополь',
      location: 'Москва, Театральная пл.',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop',
      rating: 4.5,
      secretRating: 3.9,
      price: 15000,
      verifiedReports: 7,
      trend: 'stable' as const,
      lastCheck: '4 дня назад',
      categories: {
        service: 3.8,
        cleanliness: 4.1,
        amenities: 3.7,
        value: 4.0
      }
    },
    {
      id: '6',
      name: 'Гранд Отель Европа',
      location: 'Санкт-Петербург, Невский пр.',
      image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop',
      rating: 4.7,
      secretRating: 4.4,
      price: 20000,
      verifiedReports: 11,
      trend: 'up' as const,
      lastCheck: '1 день назад',
      categories: {
        service: 4.5,
        cleanliness: 4.6,
        amenities: 4.2,
        value: 4.1
      }
    }
  ];

  const stats = [
    { label: 'Всего отелей', value: '2,847', icon: MapPin },
    { label: 'Средняя оценка', value: '4.2', icon: Star },
    { label: 'Проверок проведено', value: '15,329', icon: Eye },
    { label: 'Улучшений достигнуто', value: '89%', icon: TrendingUp },
  ];

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = filterRegion === 'all' || 
                         (filterRegion === 'moscow' && hotel.location.includes('Москва')) ||
                         (filterRegion === 'spb' && hotel.location.includes('Санкт-Петербург'));
    return matchesSearch && matchesRegion;
  });

  const sortedHotels = [...filteredHotels].sort((a, b) => {
    switch (sortBy) {
      case 'secretRating':
        return b.secretRating - a.secretRating;
      case 'rating':
        return b.rating - a.rating;
      case 'price':
        return a.price - b.price;
      case 'reports':
        return b.verifiedReports - a.verifiedReports;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">База отелей</h1>
          <p className="text-muted-foreground">
            Полная база проверенных отелей с независимыми оценками
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="shadow-card-custom animate-slide-up">
                <CardContent className="p-4 text-center">
                  <IconComponent className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Filters */}
        <Card className="mb-8 shadow-card-custom">
          <CardHeader>
            <CardTitle>Поиск и фильтры</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск отелей..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={filterRegion} onValueChange={setFilterRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Регион" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все регионы</SelectItem>
                  <SelectItem value="moscow">Москва</SelectItem>
                  <SelectItem value="spb">Санкт-Петербург</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="secretRating">По секретной оценке</SelectItem>
                  <SelectItem value="rating">По общей оценке</SelectItem>
                  <SelectItem value="price">По цене</SelectItem>
                  <SelectItem value="reports">По количеству проверок</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline">
                <Filter className="h-4 w-4 mr-2" />
                Больше фильтров
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold">Результаты поиска</h2>
            <p className="text-muted-foreground">
              Найдено {sortedHotels.length} отелей
            </p>
          </div>
          <Badge variant="outline" className="text-sm">
            Обновлено: 2 минуты назад
          </Badge>
        </div>

        {/* Hotels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {sortedHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

        {sortedHotels.length === 0 && (
          <Card className="shadow-card-custom">
            <CardContent className="p-12 text-center">
              <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-lg font-semibold mb-2">Отели не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить критерии поиска или фильтры
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Hotels;