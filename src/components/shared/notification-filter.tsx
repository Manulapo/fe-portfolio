import { notificationFilter } from '@/app/constants';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const NotificationFilter = ({
  onFilterToggle,
}: {
  onFilterToggle: (filter: string) => void;
}) => {
  const [filter, setFilter] = useState('all');
  const handleFilterClick = (filter: string) => {
    setFilter(filter);
    onFilterToggle(filter);
  };

  return (
    <Card>
      <div className="flex items-center justify-start w-full gap-2 flex-nowrap overflow-auto md:relative md:h-max md:top-0 right-0 pl-2 fixed h-13 top-13 bg-card z-10">
        {notificationFilter.map((f) => (
          <Button
            onClick={() => handleFilterClick(f.value)}
            key={f.name}
            className={cn(
              'flex items-center justify-center gap-2 py-2 cursor-pointer rounded-full font-semibold bg-transparent border-1 text-gray-500 border-gray-300 hover:bg-muted hover:text-gray-800 dark:bg-muted dark:border-gray-600 dark:text-gray-400 dark:hover:bg-muted dark:hover:text-gray-200 transition-all duration-200 ease-in-out',
              filter.toLocaleLowerCase() === f.value.toLocaleLowerCase()
                ? 'bg-green-800 text-white border-green-800 hover:bg-green-900 hover:text-white dark:bg-green-800 dark:border-green-800 dark:hover:bg-green-900 dark:hover:text-white'
                : '',
            )}
          >
            {f.name}
          </Button>
        ))}
      </div>
    </Card>
  );
};

export default NotificationFilter;
