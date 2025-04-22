import chevron from '@/assets/icons/chevronUp.svg';
import options from '@/assets/icons/dots.svg';
import newPost from '@/assets/icons/new_post.svg';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import AvatarIcon from './shared/Avatar';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ChatBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChatClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card
      className={cn(
        'w-75 flex flex-col gap-4 p-4 rounded-sm fixed right-5 shadow-md transition-all duration-200',
      )}
      style={
        isOpen
          ? {
              height: 'max-content',
              bottom: 0,
            }
          : {
              height: '65px',
              bottom: '-5px',
            }
      }
    >
      <CardHeader className="p-0 pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <AvatarIcon size={30} />
            <h3>Messaging</h3>
          </div>
          <div className="flex gap-1" onClick={handleChatClick}>
            <Button className="bg-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center p-2">
              <img src={options} alt="options" className="w-4 h-4" />
            </Button>
            <Button className="bg-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center p-2">
              <img src={newPost} alt="newPost" className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-transparent text-black hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center p-2"
            >
              {isOpen ? <ChevronDown /> : <ChevronUp />}
            </Button>
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
