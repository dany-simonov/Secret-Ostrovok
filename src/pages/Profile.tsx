import React from 'react';
import { User, Star, FileText, Award, Settings, Bell, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Footer from '@/components/Footer';

const Profile = () => {
  const userStats = {
    totalReports: 47,
    publishedReports: 39,
    avgRating: 4.3,
    expertLevel: 'Золотой эксперт',
    joinDate: 'Март 2023',
    cities: 12,
    hotels: 35
  };

  const recentActivity = [
    {
      type: 'report',
      title: 'Отчет о Four Seasons Moscow',
      date: '2 дня назад',
      status: 'published',
      rating: 4.2
    },
    {
      type: 'achievement',
      title: 'Получена награда "Детальный обзор"',
      date: '5 дней назад',
      status: 'achieved'
    },
    {
      type: 'report',
      title: 'Отчет о Ritz-Carlton Moscow',
      date: '1 неделю назад',
      status: 'published',
      rating: 4.6
    },
    {
      type: 'level',
      title: 'Повышение до уровня "Золотой эксперт"',
      date: '2 недели назад',
      status: 'achieved'
    }
  ];

  const achievements = [
    { name: 'Первый отчет', description: 'Создан первый отчет', earned: true },
    { name: 'Детальный обзор', description: '10+ подробных отчетов', earned: true },
    { name: 'Частый гость', description: '25+ отчетов', earned: true },
    { name: 'Эксперт качества', description: '50+ отчетов', earned: false },
    { name: 'Мастер оценки', description: '100+ отчетов', earned: false },
    { name: 'Легенда', description: '200+ отчетов', earned: false }
  ];

  const favoriteHotels = [
    {
      name: 'Ritz-Carlton Moscow',
      location: 'Москва',
      rating: 4.6,
      visited: '15.11.2024'
    },
    {
      name: 'Four Seasons St. Petersburg',
      location: 'Санкт-Петербург',
      rating: 4.4,
      visited: '03.10.2024'
    },
    {
      name: 'Grand Hotel Europe',
      location: 'Санкт-Петербург',
      rating: 4.2,
      visited: '22.09.2024'
    }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'report': return <FileText className="h-4 w-4" />;
      case 'achievement': return <Award className="h-4 w-4" />;
      case 'level': return <Star className="h-4 w-4" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="space-y-6">
            <Card className="shadow-card-custom animate-fade-in">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
                  <AvatarFallback>АК</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold mb-2">Анна Королева</h2>
                <Badge className="mb-4" variant="default">
                  {userStats.expertLevel}
                </Badge>
                <p className="text-muted-foreground mb-4">
                  Эксперт по качеству отельного сервиса
                </p>
                <div className="flex justify-center space-x-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-primary">{userStats.totalReports}</div>
                    <div className="text-muted-foreground">Отчетов</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{userStats.avgRating}</div>
                    <div className="text-muted-foreground">Ср. оценка</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">{userStats.cities}</div>
                    <div className="text-muted-foreground">Городов</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Progress to next level */}
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle className="text-lg">Прогресс до следующего уровня</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Эксперт качества</span>
                    <span>{userStats.totalReports}/50</span>
                  </div>
                  <Progress value={(userStats.totalReports / 50) * 100} className="h-2" />
                  <p className="text-xs text-muted-foreground">
                    Осталось {50 - userStats.totalReports} отчетов до следующего уровня
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Settings */}
            <Card className="shadow-card-custom">
              <CardContent className="p-4">
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-2" />
                    Настройки профиля
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="h-4 w-4 mr-2" />
                    Уведомления
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up">
              <Card className="shadow-card-custom">
                <CardContent className="p-4 text-center">
                  <FileText className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold mb-1">{userStats.totalReports}</div>
                  <div className="text-sm text-muted-foreground">Всего отчетов</div>
                </CardContent>
              </Card>
              <Card className="shadow-card-custom">
                <CardContent className="p-4 text-center">
                  <Star className="h-6 w-6 mx-auto mb-2 text-warning" />
                  <div className="text-2xl font-bold mb-1">{userStats.avgRating}</div>
                  <div className="text-sm text-muted-foreground">Ср. оценка</div>
                </CardContent>
              </Card>
              <Card className="shadow-card-custom">
                <CardContent className="p-4 text-center">
                  <MapPin className="h-6 w-6 mx-auto mb-2 text-success" />
                  <div className="text-2xl font-bold mb-1">{userStats.hotels}</div>
                  <div className="text-sm text-muted-foreground">Отелей</div>
                </CardContent>
              </Card>
              <Card className="shadow-card-custom">
                <CardContent className="p-4 text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-info" />
                  <div className="text-2xl font-bold mb-1">{userStats.joinDate}</div>
                  <div className="text-sm text-muted-foreground">С нами</div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle>Последняя активность</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-muted/30">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-sm text-muted-foreground">{activity.date}</div>
                      </div>
                      {activity.rating && (
                        <Badge variant="outline">
                          <Star className="h-3 w-3 mr-1" />
                          {activity.rating}
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle>Достижения</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className={`p-4 rounded-lg border ${achievement.earned ? 'bg-success/5 border-success/20' : 'bg-muted/10 border-muted/20'}`}>
                      <div className="flex items-center space-x-3">
                        <Award className={`h-6 w-6 ${achievement.earned ? 'text-success' : 'text-muted-foreground'}`} />
                        <div>
                          <div className={`font-medium ${!achievement.earned && 'text-muted-foreground'}`}>
                            {achievement.name}
                          </div>
                          <div className="text-sm text-muted-foreground">{achievement.description}</div>
        </div>
      </div>
      
      <Footer />
    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Favorite Hotels */}
            <Card className="shadow-card-custom">
              <CardHeader>
                <CardTitle>Избранные отели</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {favoriteHotels.map((hotel, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                      <div>
                        <div className="font-medium">{hotel.name}</div>
                        <div className="text-sm text-muted-foreground flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {hotel.location} • Посещен {hotel.visited}
                        </div>
                      </div>
                      <Badge variant="outline">
                        <Star className="h-3 w-3 mr-1" />
                        {hotel.rating}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;