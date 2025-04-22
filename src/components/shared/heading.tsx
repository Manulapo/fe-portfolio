import React from 'react';
import { CardTitle } from '../ui/card';
import { cn } from '@/lib/utils';

const Heading = ({
  className,
  title,
  icons,
}: {
  className?: string;
  title: string;
  icons?: string[];
}) => {
  return (
    <CardTitle
      className={cn('font-semibold flex pt-6 flex-col gap-1', className)}
    >
      <p className="text-xl py-0 my-0">{title}</p>
      {icons && (
        <div className="flex gap-2">
          {icons.map((icon, index) =>
            typeof icon === 'string' ? (
              <img
                key={index}
                src={icon}
                alt={`Icon ${index + 1}`}
                className="w-6 h-6 rounded-full"
              />
            ) : (
              React.createElement(icon, {
                key: index,
                className: 'w-6 h-6 rounded-full',
                alt: `Icon ${index + 1}`,
              })
            ),
          )}
        </div>
      )}
    </CardTitle>
  );
};

export default Heading;
