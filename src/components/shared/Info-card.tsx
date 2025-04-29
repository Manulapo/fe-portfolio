import { contactInfo } from '@/app/constants';
import { Link } from 'react-router-dom';
import { Card } from '../ui/card';
import Heading from './heading';
import { Separator } from '../ui/separator';

const InfoCard = () => {
  return (
    <Card>
        <Heading title="Contact Info" className="pt-0" />
        <Separator />
        <div className='pl-2'>
          {contactInfo.map((item, index) => (
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
          ))}
        </div>
      </Card>
  );
};

export default InfoCard;
