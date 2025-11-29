import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Certificate {
  id: string;
  name: string;
  year: string;
  verified: boolean;
  documentUrl?: string;
}

const CertificatesEditor = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([
    {
      id: '1',
      name: 'CELTA Certificate',
      year: '2015',
      verified: true,
    },
    {
      id: '2',
      name: 'IELTS Examiner Certification',
      year: '2018',
      verified: true,
    },
  ]);

  const [isAdding, setIsAdding] = useState(false);
  const [newCertificate, setNewCertificate] = useState<Certificate>({
    id: '',
    name: '',
    year: '',
    verified: false,
  });

  const handleAddCertificate = () => {
    if (newCertificate.name && newCertificate.year) {
      setCertificates([
        ...certificates,
        { ...newCertificate, id: Date.now().toString() },
      ]);
      setNewCertificate({
        id: '',
        name: '',
        year: '',
        verified: false,
      });
      setIsAdding(false);
    }
  };

  const handleRemoveCertificate = (id: string) => {
    setCertificates(certificates.filter((cert) => cert.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Сертификаты и квалификация</h3>
          <p className="text-sm text-muted-foreground">
            Добавьте ваши профессиональные сертификаты и лицензии
          </p>
        </div>
        {!isAdding && (
          <Button onClick={() => setIsAdding(true)}>
            <Icon name="Plus" size={18} className="mr-2" />
            Добавить
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {certificates.map((certificate) => (
          <Card key={certificate.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Icon name="Medal" size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-lg">{certificate.name}</h4>
                      {certificate.verified && (
                        <Badge variant="secondary" className="bg-secondary/20">
                          <Icon name="BadgeCheck" size={14} className="mr-1" />
                          Проверено
                        </Badge>
                      )}
                      {!certificate.verified && (
                        <Badge variant="outline" className="text-muted-foreground">
                          <Icon name="Clock" size={14} className="mr-1" />
                          На проверке
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Получен в {certificate.year} году
                    </p>
                    {certificate.documentUrl && (
                      <Button variant="link" className="p-0 h-auto mt-2" size="sm">
                        <Icon name="FileText" size={14} className="mr-1" />
                        Просмотреть документ
                      </Button>
                    )}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveCertificate(certificate.id)}
                >
                  <Icon name="Trash2" size={18} className="text-destructive" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {isAdding && (
        <Card className="border-2 border-dashed">
          <CardContent className="p-6">
            <h4 className="font-semibold mb-4">Добавить сертификат</h4>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="certName">Название сертификата</Label>
                <Input
                  id="certName"
                  placeholder="CELTA, IELTS, TOEFL и т.д."
                  value={newCertificate.name}
                  onChange={(e) =>
                    setNewCertificate({ ...newCertificate, name: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="certYear">Год получения</Label>
                <Input
                  id="certYear"
                  type="number"
                  placeholder="2024"
                  value={newCertificate.year}
                  onChange={(e) =>
                    setNewCertificate({ ...newCertificate, year: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="certDocument">Загрузить документ</Label>
                <div className="border-2 border-dashed rounded-xl p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <Icon name="Upload" size={32} className="mx-auto text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">
                    Нажмите для загрузки или перетащите файл
                  </p>
                  <p className="text-xs text-muted-foreground">
                    PDF, JPG или PNG (макс. 5 МБ)
                  </p>
                </div>
                <p className="text-xs text-muted-foreground">
                  Документ будет проверен администрацией в течение 24 часов
                </p>
              </div>

              <div className="flex gap-3">
                <Button onClick={handleAddCertificate}>
                  <Icon name="Check" size={18} className="mr-2" />
                  Добавить
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsAdding(false);
                    setNewCertificate({
                      id: '',
                      name: '',
                      year: '',
                      verified: false,
                    });
                  }}
                >
                  Отмена
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {certificates.length === 0 && !isAdding && (
        <Card className="border-dashed">
          <CardContent className="p-12 text-center">
            <Icon name="Award" size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">Сертификаты не добавлены</h3>
            <p className="text-muted-foreground mb-4">
              Подтвердите свою квалификацию, добавив профессиональные сертификаты
            </p>
            <Button onClick={() => setIsAdding(true)}>
              <Icon name="Plus" size={18} className="mr-2" />
              Добавить сертификат
            </Button>
          </CardContent>
        </Card>
      )}

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold mb-2">Почему важно добавить сертификаты?</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Повышает доверие потенциальных учеников</li>
                <li>• Профили с сертификатами получают в 3 раза больше просмотров</li>
                <li>• Проверенные преподаватели отображаются выше в каталоге</li>
                <li>• Возможность установить более высокую стоимость уроков</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CertificatesEditor;
