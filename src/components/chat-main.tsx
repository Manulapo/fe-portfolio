import { chatData } from '@/app/constants/chats';
import options from '@/assets/icons/dots.svg';
import newPost from '@/assets/icons/new_post.svg';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChatData } from '@/types';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useMemo, useState } from 'react';
import ChatRow from './chat-row';
import AvatarIcon from './shared/Avatar-icon';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';

const ChatBar = ({
  className,
  onChatRowSelect,
}: {
  className?: string;
  onChatRowSelect?: (chat: ChatData) => void;
}) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);

  const cardStyle = useMemo(
    () => ({
      height: isOpen ? (isMobile ? '100%' : 'max-content') : '65px',
      bottom: isOpen ? 0 : '-5px',
      boxShadow: isMobile ? 'none' : '0px 0px 10px rgba(0, 0, 0, 0.1)',
    }),
    [isOpen, isMobile],
  );

  const handleChatRowClick = (chat: ChatData) => {
    onChatRowSelect?.(chat);
  };

  return (
    <Card className={className} style={cardStyle}>
      {!isMobile && (
        <CardHeader className="p-0">
          <CardTitle className="flex items-center justify-between">
            <div className="flex gap-2 items-center justify-center">
              <AvatarIcon size={30} />
              <h3>Messaging</h3>
            </div>
            <div className="flex gap-1">
              <Button className="bg-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center p-2 shadow-none">
                <img src={options} alt="options" className="w-4 h-4" />
              </Button>
              <Button className="bg-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center p-2 shadow-none">
                <img src={newPost} alt="newPost" className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-transparent text-black hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center p-2 shadow-none"
              >
                {isOpen ? <ChevronDown /> : <ChevronUp />}
              </Button>
            </div>
          </CardTitle>
          <Separator className="p-0 w-full" />
        </CardHeader>
      )}
      <CardContent className="h-max max-h-100 w-full px-1 m-0 flex flex-col gap-2">
        {chatData.map((chat, i) => (
          <div onClick={() => handleChatRowClick(chat)} key={chat.user}>
            <ChatRow chatData={chat} />
            {i < chatData.length - 1 && <Separator className="my-1 p-0" />}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ChatBar;
