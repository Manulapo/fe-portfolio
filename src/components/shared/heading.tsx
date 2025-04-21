import React from 'react';
import { CardTitle } from '../ui/card';

const Heading = ({ title, icons }: { title: string; icons?: string[] }) => {
  return (
    <CardTitle className="font-semibold pt-8 flex flex-col gap-1">
      <h1 className="text-xl">{title}</h1>
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
