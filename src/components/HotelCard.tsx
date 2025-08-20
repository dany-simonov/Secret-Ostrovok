import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Shield, TrendingUp, Camera } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface HotelCardProps {
  hotel: {
    id: string;
    name: string;
    location: string;
    image: string;
    rating: number;
    secretRating: number;
    price: number;
    verifiedReports: number;
    trend: 'up' | 'down' | 'stable';
    lastCheck: string;
    categories: {
      service: number;
      cleanliness: number;
      amenities: number;
      value: number;
    };
  };
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-success';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? '↗' : trend === 'down' ? '↘' : '→';
  };

  return (
    <Card className="overflow-hidden hover:shadow-card-custom transition-all duration-300 group">
      <div className="relative">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            <Shield className="h-3 w-3 mr-1" />
            Проверено
          </Badge>
        </div>
        <div className="absolute top-3 right-3">
          <Badge 
            variant="outline" 
            className={`bg-background/90 backdrop-blur ${getTrendColor(hotel.trend)}`}
          >
            <TrendingUp className="h-3 w-3 mr-1" />
            {getTrendIcon(hotel.trend)}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg leading-tight">{hotel.name}</h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              {hotel.location}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="text-sm font-medium">{hotel.rating}</span>
              </div>
              <div className="flex items-center space-x-1 px-2 py-1 bg-ostrovok-green/10 rounded-md">
                <Shield className="h-3 w-3 text-ostrovok-green" />
                <span className="text-sm font-bold text-ostrovok-green">
                  {hotel.secretRating}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">₽{hotel.price.toLocaleString()}</div>
              <div className="text-xs text-muted-foreground">за ночь</div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Camera className="h-3 w-3" />
              <span>{hotel.verifiedReports} отчетов</span>
            </div>
            <span>Проверено: {hotel.lastCheck}</span>
          </div>

          <div className="grid grid-cols-4 gap-2 pt-2">
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Сервис</div>
              <div className={`text-sm font-medium ${hotel.categories.service >= 4 ? 'text-success' : hotel.categories.service >= 3 ? 'text-warning' : 'text-destructive'}`}>
                {hotel.categories.service}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Чистота</div>
              <div className={`text-sm font-medium ${hotel.categories.cleanliness >= 4 ? 'text-success' : hotel.categories.cleanliness >= 3 ? 'text-warning' : 'text-destructive'}`}>
                {hotel.categories.cleanliness}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Удобства</div>
              <div className={`text-sm font-medium ${hotel.categories.amenities >= 4 ? 'text-success' : hotel.categories.amenities >= 3 ? 'text-warning' : 'text-destructive'}`}>
                {hotel.categories.amenities}
              </div>
            </div>
            <div className="text-center">
              <div className="text-xs text-muted-foreground">Цена</div>
              <div className={`text-sm font-medium ${hotel.categories.value >= 4 ? 'text-success' : hotel.categories.value >= 3 ? 'text-warning' : 'text-destructive'}`}>
                {hotel.categories.value}
              </div>
            </div>
          </div>

          <Button className="w-full shadow-button-custom" size="sm">
            <Link to={`/hotel/${hotel.id}`} className="flex items-center justify-center w-full">
              Подробнее и бронирование
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;