import React from 'react';
import { TrendingUp, TrendingDown, Target, Award, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Analytics = () => {
  const analyticsData = {
    overview: [
      { title: 'Средняя оценка качества', value: '4.2', change: '+0.3', trend: 'up' },
      { title: 'Отелей проверено', value: '2,847', change: '+15%', trend: 'up' },
      { title: 'Скрытых проверок', value: '15,329', change: '+8%', trend: 'up' },
      { title: 'Проблем выявлено', value: '1,247', change: '-5%', trend: 'down' }
    ],
    topRegions: [
      { name: 'Москва', hotels: 1247, avgRating: 4.3, trend: 'up' },
      { name: 'Санкт-Петербург', hotels: 892, avgRating: 4.1, trend: 'stable' },
      { name: 'Сочи', hotels: 634, avgRating: 4.0, trend: 'up' },
      { name: 'Екатеринburg', hotels: 423, avgRating: 3.9, trend: 'down' },
      { name: 'Казань', hotels: 387, avgRating: 4.2, trend: 'up' }
    ],
    categories: [
      { name: 'Сервис', score: 4.1, issues: 23 },
      { name: 'Чистота', score: 4.4, issues: 12 },
      { name: 'Удобства', score: 3.9, issues: 34 },
      { name: 'Соотношение цена/качество', score: 3.8, issues: 28 }
    ],
    recentFindings: [
      { hotel: 'Гранд Отель Европа', issue: 'Несоответствие описанию завтрака', severity: 'medium', date: '2 дня назад' },
      { hotel: 'Метрополь', issue: 'Проблемы с уборкой номеров', severity: 'high', date: '3 дня назад' },
      { hotel: 'Ритц-Карлтон', issue: 'Задержка в обслуживании ресторана', severity: 'low', date: '5 дней назад' },
      { hotel: 'Арарат Парк Хайатт', issue: 'Шум от соседних номеров', severity: 'medium', date: '1 неделя назад' }
    ]
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-destructive/10 text-destructive';
      case 'medium': return 'bg-warning/10 text-warning';
      case 'low': return 'bg-success/10 text-success';
      default: return 'bg-muted/10 text-muted-foreground';
    }
  };

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? <TrendingUp className="h-4 w-4 text-success" /> : 
           trend === 'down' ? <TrendingDown className="h-4 w-4 text-destructive" /> : 
           <Target className="h-4 w-4 text-muted-foreground" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/5">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl font-bold mb-2">Аналитика качества</h1>
          <p className="text-muted-foreground">
            Детальный анализ качества отелей на основе скрытых проверок
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {analyticsData.overview.map((stat, index) => (
            <Card key={index} className="shadow-card-custom animate-slide-up">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <div className="flex items-center space-x-2">
                      <p className="text-2xl font-bold">{stat.value}</p>
                      {getTrendIcon(stat.trend)}
                    </div>
                  </div>
                  <Badge variant={stat.trend === 'up' ? 'default' : stat.trend === 'down' ? 'destructive' : 'secondary'}>
                    {stat.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Regions */}
          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Топ регионы по качеству</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.topRegions.map((region, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <div className="font-medium">{region.name}</div>
                        <div className="text-sm text-muted-foreground">{region.hotels} отелей</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right">
                        <div className="font-bold">{region.avgRating}</div>
                        <div className="text-xs text-muted-foreground">средняя оценка</div>
                      </div>
                      {getTrendIcon(region.trend)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Categories Analysis */}
          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Анализ по категориям</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {analyticsData.categories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{category.name}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-bold">{category.score}</span>
                        <Badge variant="outline" className="text-xs">
                          {category.issues} проблем
                        </Badge>
                      </div>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${(category.score / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Findings */}
        <Card className="shadow-card-custom">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Последние находки</span>
              </CardTitle>
              <Button variant="outline" size="sm">
                Все отчеты
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.recentFindings.map((finding, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                  <div className="flex-1">
                    <div className="font-medium mb-1">{finding.hotel}</div>
                    <div className="text-sm text-muted-foreground mb-2">{finding.issue}</div>
                    <Badge className={getSeverityColor(finding.severity)} variant="secondary">
                      {finding.severity === 'high' ? 'Критично' : 
                       finding.severity === 'medium' ? 'Важно' : 'Незначительно'}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground text-right">
                    {finding.date}
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

export default Analytics;