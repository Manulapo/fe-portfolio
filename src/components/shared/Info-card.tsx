import { contactInfo } from '@/app/constants';
import { Card } from '../ui/card';
import { Separator } from '../ui/separator';
import Minifig1 from '../minifig1';
import Heading from './heading';
import { useLocation } from 'react-router-dom';

const InfoCard = () => {
  const { pathname } = useLocation();

  return (
    <div className="info-card relative">
      {pathname !== '/network' && (
        <Minifig1 className="minifig-peek-variant absolute -top-20 left-2/6 z-0 hidden w-30 md:block" />
      )}
      <Card className="relative z-10">
        <Heading title="Contact Info" className="pt-0" />
        <Separator />
        <div className="pl-2">
          {contactInfo.map((item, index) => {
            if (item.title === 'Phone') return null
            return (
              <div key={index} className="flex items-center gap-4 mb-4">
                <item.icon className="w-4 h-4" />
                <div className="flex flex-col">
                  {item.value &&
                    (item.link.length > 0 ? (
                      <a
                        className="text-sm text-muted-foreground"
                        href={item.link}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {item.value}
                      </p>
                    ))}
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default InfoCard;
