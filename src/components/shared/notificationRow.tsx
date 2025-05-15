import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { NotificationData } from '@/types';
import { Circle } from 'lucide-react';

const NotificationRow = ({
  data,
}: {
  data: NotificationData;
}) => {
  const isMobile = useIsMobile();
  return (
    <div
      className={cn(
        'md:p-4 pl-1 pr-4 py-3 md:py-6 m-0',
        data.toRead ? 'bg-blue-100' : 'bg-card',
      )}
    >
      <div className="flex items-center justify-between gap-2 w-full">
        {data.toRead && !isMobile ? (
          <Circle className="text-blue-600 font-bold" size={10} />
        ) : (
          <div className="text-gray-300 w-[10px]" />
        )}
        <div className="flex items-center gap-2 md:w-[80%] w-full">
          <p className="text-2xl mr-2">{data.icon}</p>
          <div>
            <h3 className="md:text-[1rem] text-sm text-gray-900 font-semibold leading-tight mb-1">
              {data.title}
            </h3>
            <p className="text-muted-foreground text-sm">{data.description}</p>
            <p className="text-muted-foreground text-xs ml-auto md:hidden block text-nowrap md:mr-2 w-max align-top">{data.date}</p>
          </div>
        </div>
        <p className="text-muted-foreground text-xs ml-auto hidden md:block text-nowrap md:mr-2 w-max align-top">{data.date}</p>
      </div>
    </div>
  );
};

export default NotificationRow;
