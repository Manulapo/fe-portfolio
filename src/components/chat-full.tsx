import { formatDate, getRandomNumber } from '@/lib/utils';
import { ChatData } from '@/types';
import { ChevronDown, ChevronUp, Circle, Send, X } from 'lucide-react';
import AvatarIcon from './shared/Avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Separator } from './ui/separator';

const ChatFull = ({
  chatData,
  className,
  isOpen,
  onToggle,
  chatClosedTrigger,
}: {
  chatData: ChatData;
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
  chatClosedTrigger: (chat: ChatData) => void;
}) => {
  const { user, userAvatar, messages, date, userClaim } = chatData;
  const isOnline = getRandomNumber(0, 1) === 1;

  return (
    <Card
      className={className}
      style={
        isOpen
          ? { height: 'max-content', bottom: 0 }
          : { height: '65px', bottom: '-5px' }
      }
    >
      <CardHeader className="p-0 pb-2">
        <CardTitle className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5 items-start justify-center">
            <h3 className="m-0">{user}</h3>
            <p className="text-muted-foreground text-xs w-max p-0 m-0">
              {isOnline ? (
                <div className="flex items-center gap-1">
                  <Circle className="text-green-500" size={10} /> Online
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <Circle className="text-red-500" size={10} /> Offline
                </div>
              )}
            </p>
          </div>
          <div className="flex gap-1">
            <Button
              onClick={() => onToggle()}
              className="bg-transparent text-black hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center p-2 shadow-none"
            >
              {isOpen ? <ChevronDown /> : <ChevronUp />}
            </Button>
            <Button
              className="bg-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center p-2 shadow-none"
              onClick={() => chatClosedTrigger(chatData)}
            >
              <X />
            </Button>
          </div>
        </CardTitle>
        <Separator className="p-0 w-full" />
      </CardHeader>
      <CardContent className="h-max w-full px-1 m-0 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <AvatarIcon image={userAvatar} size={50} />
          <div>
            <p className="font-semibold text-black">{user}</p>
            <p className="text-muted-foreground">{userClaim}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="my-5 border-1 border-gray-100 flex-1"></div>
          <p className="text-muted-foreground text-xs w-max">
            {formatDate(date).onlyDayMonth.toUpperCase()}
          </p>
          <div className="my-5 border-1 border-gray-100 flex-1"></div>
        </div>
        {messages.map((message, index) => (
          <div key={index} className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-sm font-semibold">
                {user}{' '}
                <span className="text-gray-400 font-light text-xs">
                  {message.time}
                </span>
              </p>
              <p className="text-sm text-gray-500">{message.text}</p>
            </div>
          </div>
        ))}
      </CardContent>
      <Separator className="p-0 w-full" />
      <CardContent className="flex items-center w-full justify-around gap-4 p-0">
        <Input className="w-full" />
        <Send />
      </CardContent>
    </Card>
  );
};

export default ChatFull;
