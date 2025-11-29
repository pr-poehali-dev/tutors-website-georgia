import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface TutorCardProps {
  name: string;
  subject: string;
  experience: number;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  verified: boolean;
  languages: string[];
  onClick?: () => void;
}

const TutorCard = ({
  name,
  subject,
  experience,
  rating,
  reviews,
  price,
  image,
  verified,
  languages,
  onClick,
}: TutorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={onClick}>
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-cover"
          />
          {verified && (
            <Badge className="absolute top-3 right-3 bg-secondary">
              <Icon name="BadgeCheck" size={14} className="mr-1" />
              Проверен
            </Badge>
          )}
        </div>

        <div className="p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-lg">{name}</h3>
              <p className="text-sm text-muted-foreground">{subject}</p>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{rating}</span>
              <span className="text-xs text-muted-foreground">({reviews})</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {languages.map((lang) => (
              <Badge key={lang} variant="outline" className="text-xs">
                {lang}
              </Badge>
            ))}
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Icon name="Briefcase" size={16} />
              <span>{experience} лет</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="Clock" size={16} />
              <span>60 мин</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div>
              <span className="text-2xl font-bold text-primary">{price} ₾</span>
              <span className="text-sm text-muted-foreground"> / урок</span>
            </div>
            <Button size="sm">
              Записаться
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TutorCard;
