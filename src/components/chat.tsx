import newPost from '@/assets/icons/new_post.svg';
import options from '@/assets/icons/dots.svg';
import chevron from '@/assets/icons/chevronUp.svg';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const chatIcons = [
  { icon: options, alt: 'options' },
  { icon: newPost, alt: 'newPost' },
  { icon: chevron, alt: 'chevron' },
];

const ChatBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChatClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card
      className={cn(
        'w-75 flex flex-col gap-4 p-4 rounded-sm fixed right-5 shadow-md transition-all duration-200',
        isOpen ? 'h-max bottom-0' : 'h-15 bottom-[-5px]',
      )}
    >
      <CardHeader className="p-0 pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <h3>Messaging</h3>
          </div>
          <div className="flex gap-1" onClick={handleChatClick}>
            {chatIcons.map((item, index) => (
              <button
                key={index}
                className="w-8 h-8 text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center"
              >
                <img
                  src={item.icon}
                  className="w-5 h-5"
                  alt={item.alt}
                  width={24}
                  height={24}
                />
              </button>
            ))}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-150">
        <p>Card Content</p>
      </CardContent>
    </Card>
  );
};

export default ChatBar;
