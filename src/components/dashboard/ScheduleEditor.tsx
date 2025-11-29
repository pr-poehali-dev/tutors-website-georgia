import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface TimeSlot {
  start: string;
  end: string;
}

interface DaySchedule {
  enabled: boolean;
  slots: TimeSlot[];
}

const ScheduleEditor = () => {
  const [schedule, setSchedule] = useState<Record<string, DaySchedule>>({
    monday: { enabled: true, slots: [{ start: '09:00', end: '18:00' }] },
    tuesday: { enabled: true, slots: [{ start: '09:00', end: '18:00' }] },
    wednesday: { enabled: true, slots: [{ start: '09:00', end: '18:00' }] },
    thursday: { enabled: true, slots: [{ start: '09:00', end: '18:00' }] },
    friday: { enabled: true, slots: [{ start: '09:00', end: '18:00' }] },
    saturday: { enabled: false, slots: [] },
    sunday: { enabled: false, slots: [] },
  });

  const [lessonFormat, setLessonFormat] = useState({
    online: true,
    offline: true,
    duration: '60',
  });

  const days = [
    { key: 'monday', label: 'Понедельник' },
    { key: 'tuesday', label: 'Вторник' },
    { key: 'wednesday', label: 'Среда' },
    { key: 'thursday', label: 'Четверг' },
    { key: 'friday', label: 'Пятница' },
    { key: 'saturday', label: 'Суббота' },
    { key: 'sunday', label: 'Воскресенье' },
  ];

  const toggleDay = (day: string) => {
    setSchedule({
      ...schedule,
      [day]: {
        ...schedule[day],
        enabled: !schedule[day].enabled,
      },
    });
  };

  const handleSave = () => {
    alert('Расписание сохранено!');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Формат занятий</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Icon name="Video" size={20} className="text-primary" />
                </div>
                <div>
                  <Label htmlFor="online" className="font-medium">Онлайн занятия</Label>
                  <p className="text-sm text-muted-foreground">Уроки через видеосвязь</p>
                </div>
              </div>
              <Switch
                id="online"
                checked={lessonFormat.online}
                onCheckedChange={(checked) =>
                  setLessonFormat({ ...lessonFormat, online: checked })
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Icon name="Users" size={20} className="text-secondary" />
                </div>
                <div>
                  <Label htmlFor="offline" className="font-medium">Офлайн занятия</Label>
                  <p className="text-sm text-muted-foreground">Личные встречи</p>
                </div>
              </div>
              <Switch
                id="offline"
                checked={lessonFormat.offline}
                onCheckedChange={(checked) =>
                  setLessonFormat({ ...lessonFormat, offline: checked })
                }
              />
            </div>

            <div className="pt-4 border-t">
              <Label htmlFor="duration" className="mb-2 block">Длительность урока</Label>
              <Select
                value={lessonFormat.duration}
                onValueChange={(value) =>
                  setLessonFormat({ ...lessonFormat, duration: value })
                }
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="30">30 минут</SelectItem>
                  <SelectItem value="45">45 минут</SelectItem>
                  <SelectItem value="60">60 минут</SelectItem>
                  <SelectItem value="90">90 минут</SelectItem>
                  <SelectItem value="120">120 минут</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Рабочие дни и время</h3>
          <div className="space-y-3">
            {days.map((day) => (
              <div
                key={day.key}
                className={`p-4 rounded-xl border-2 transition-all ${
                  schedule[day.key].enabled
                    ? 'border-primary/30 bg-primary/5'
                    : 'border-border bg-muted/30'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <Label htmlFor={day.key} className="font-medium text-base cursor-pointer">
                    {day.label}
                  </Label>
                  <Switch
                    id={day.key}
                    checked={schedule[day.key].enabled}
                    onCheckedChange={() => toggleDay(day.key)}
                  />
                </div>

                {schedule[day.key].enabled && (
                  <div className="grid grid-cols-2 gap-3 pl-4">
                    <div>
                      <Label className="text-sm text-muted-foreground">С</Label>
                      <Select defaultValue="09:00">
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, i) => (
                            <SelectItem key={i} value={`${String(i).padStart(2, '0')}:00`}>
                              {String(i).padStart(2, '0')}:00
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm text-muted-foreground">До</Label>
                      <Select defaultValue="18:00">
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 24 }, (_, i) => (
                            <SelectItem key={i} value={`${String(i).padStart(2, '0')}:00`}>
                              {String(i).padStart(2, '0')}:00
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-secondary/5 border-secondary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Icon name="Calendar" size={24} className="text-secondary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Гибкое расписание</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Установите общее расписание, а затем сможете корректировать конкретные даты
                в календаре бронирований.
              </p>
              <Button variant="outline" size="sm">
                <Icon name="Settings" size={16} className="mr-2" />
                Настроить исключения
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button onClick={handleSave} size="lg">
          <Icon name="Save" size={18} className="mr-2" />
          Сохранить расписание
        </Button>
        <Button variant="outline" size="lg">
          <Icon name="Calendar" size={18} className="mr-2" />
          Посмотреть календарь
        </Button>
      </div>
    </div>
  );
};

export default ScheduleEditor;
