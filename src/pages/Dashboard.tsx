import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import ProfileEditor from '@/components/dashboard/ProfileEditor';
import EducationEditor from '@/components/dashboard/EducationEditor';
import CertificatesEditor from '@/components/dashboard/CertificatesEditor';
import ScheduleEditor from '@/components/dashboard/ScheduleEditor';

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="GraduationCap" className="text-primary" size={32} />
              <div>
                <h1 className="text-xl font-bold">Личный кабинет</h1>
                <p className="text-sm text-muted-foreground">Репетитор</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={() => navigate('/')}>
                <Icon name="Home" size={18} className="mr-2" />
                На главную
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                <Icon name="LogOut" size={18} className="mr-2" />
                Выйти
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Icon name="Eye" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-sm text-muted-foreground">Просмотров</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <Icon name="Users" size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">48</div>
                  <div className="text-sm text-muted-foreground">Учеников</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Icon name="Calendar" size={24} className="text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-muted-foreground">Уроков</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <Icon name="Star" size={24} className="text-secondary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">4.9</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Настройка профиля</CardTitle>
            <CardDescription>
              Заполните информацию о себе, чтобы ваш профиль отображался в каталоге
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-4 mb-6">
                <TabsTrigger value="profile">
                  <Icon name="User" size={16} className="mr-2" />
                  Профиль
                </TabsTrigger>
                <TabsTrigger value="education">
                  <Icon name="GraduationCap" size={16} className="mr-2" />
                  Образование
                </TabsTrigger>
                <TabsTrigger value="certificates">
                  <Icon name="Award" size={16} className="mr-2" />
                  Сертификаты
                </TabsTrigger>
                <TabsTrigger value="schedule">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Расписание
                </TabsTrigger>
              </TabsList>

              <TabsContent value="profile">
                <ProfileEditor />
              </TabsContent>

              <TabsContent value="education">
                <EducationEditor />
              </TabsContent>

              <TabsContent value="certificates">
                <CertificatesEditor />
              </TabsContent>

              <TabsContent value="schedule">
                <ScheduleEditor />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
