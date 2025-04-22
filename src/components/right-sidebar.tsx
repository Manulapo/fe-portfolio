import { forwardRef } from 'react';
import { Card } from './ui/card';
import { contactInfo } from '@/app/constants';
import { Link } from 'react-router-dom';
import Heading from './shared/heading';
import { Separator } from './ui/separator';

const RightSidebar = forwardRef<HTMLDivElement, {}>((props, ref) => {
  return (
    <div ref={ref}>
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
                    <Link
                      className="text-sm text-muted-foreground"
                      to={item.link}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.value}
                    </Link>
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
    </div>
  );
});

export default RightSidebar;
