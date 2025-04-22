import { chatData } from '@/app/constants';
import options from '@/assets/icons/dots.svg';
import newPost from '@/assets/icons/new_post.svg';
import { reduceText } from '@/lib/utils';
import { ChatData } from '@/types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import AvatarIcon from './shared/Avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

const ChatBar = ({
  className,
  onChatRowSelect,
}: {
  className?: string;
  onChatRowSelect: (chat: ChatData) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChatRowClick = (chat: ChatData) => {
    onChatRowSelect(chat);
  };

  const ChatRowContent = ({ chatData }: { chatData: ChatData }) => {
    const { userAvatar, preview, user } = chatData;

    return (
      <>
        <Button
          variant={'ghost'}
          className=" block w-full h-max px-1 m-0 rounded-sm hover:bg-gray-100 cursor-pointer"
        >
          <div className="flex gap-4 justify-start items-center w-full pl-2">
            <AvatarIcon image={userAvatar} size={37} />
            <div className="flex flex-col items-start justify-start">
              <h3 className="text-sm font-semibold">{user}</h3>
              <p className="text-xs font-normal text-gray-500">
                {reduceText(preview)}
              </p>
            </div>
          </div>
        </Button>
        <Separator className="m-0 p-0" />
      </>
    );
  };

  return (
    <Card
      className={className}
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
          <div className="flex gap-2 items-center justify-center">
            <AvatarIcon size={30} />
            <h3>Messaging</h3>
          </div>
          <div className="flex gap-1">
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
        <Separator className="p-0 w-full" />
      </CardHeader>
      <CardContent className="h-max max-h-100 w-full px-1 m-0 flex flex-col gap-2">
        {chatData.map((chat, index) => (
          <div onClick={() => handleChatRowClick(chat)} key={index}>
            <ChatRowContent chatData={chat} />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ChatBar;
