import { useIsMobile } from '@/hooks/use-mobile';
import { cn, formatDate, getRandomNumber } from '@/lib/utils';
import { ChatData } from '@/types';
import {
  ChevronDown,
  ChevronUp,
  Circle,
  Image,
  ImagePlay,
  Paperclip,
  Smile,
  X,
} from 'lucide-react';
import { useCallback, useMemo, useState } from 'react';
import AvatarIcon from './shared/Avatar-icon';
import ChatMessage from './shared/chatMessage';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { userInfo } from '@/app/constants';

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
  onToggle?: () => void;
  chatClosedTrigger: (chat: ChatData) => void;
}) => {
  const { user, userAvatar, messages, date, userClaim } = chatData;
  const isMobile = useIsMobile();
  const [inputValue, setInputValue] = useState('');
  const [messagesStream, setMessagesStream] = useState(messages);

  // Cache online status
  const isOnline = useMemo(() => getRandomNumber(0, 1) === 1, [messagesStream]);
  const onlineStatus = isOnline ? 'Online' : 'Offline';

  const cardStyle = useMemo(
    () => ({
      height: isOpen ? (isMobile ? 'auto' : 'max-content') : '65px',
      bottom: isOpen ? 0 : '-5px',
    }),
    [isOpen, isMobile],
  );

  const chatStyle = useMemo(
    () => ({
      maxHeight: !isMobile ? '300px' : 'max-content',
      height: isMobile ? '38vh' : undefined,
      overflowY: 'auto',
    }),
    [isMobile],
  );

  const handleSendButtonClick = useCallback(() => {
    if (inputValue.trim().length > 0) {
      const newMessage = {
        text: inputValue,
        time: formatDate(new Date()).onlyTime,
        isMine: true,
      };
      setMessagesStream((prev) => [...prev, newMessage]);
      setInputValue('');
    }
  }, [inputValue]);

  return (
    <Card className={className} style={cardStyle}>
      <CardHeader
        className="px-3 pb-2"
        style={{
          position: isMobile ? 'absolute' : 'relative',
          right: isMobile ? '1em' : undefined,
        }}
      >
        <CardTitle
          className="flex items-center justify-between"
          style={{
            position: isMobile ? 'absolute' : 'relative',
            right: isMobile ? '0' : undefined,
          }}
        >
          <div className="flex flex-col gap-1 items-start justify-center">
            {!isMobile && (
              <div>
                <h3 className="m-0 mb-1">{user}</h3>
                <div className="text-muted-foreground text-xs flex items-center gap-1">
                  <Circle
                    className={cn(isOnline ? 'text-green-700' : 'text-red-500')}
                    size={10}
                  />
                  <span>{onlineStatus}</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex gap-1">
            <Button
              onClick={onToggle}
              className="bg-transparent text-black hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center p-2 shadow-none"
            >
              {!isMobile && (isOpen ? <ChevronDown /> : <ChevronUp />)}
            </Button>
            <Button
              onClick={() => chatClosedTrigger(chatData)}
              className="bg-transparent text-gray-500 hover:text-gray-800 hover:bg-gray-200 rounded-full flex items-center justify-center p-2 shadow-none"
            >
              <X />
            </Button>
          </div>
        </CardTitle>
        {!isMobile && <Separator className="p-0 w-full" />}
      </CardHeader>
      <CardContent className="h-max w-full px-1 m-0 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <AvatarIcon name={user} image={userAvatar} size={50} />
          <div>
            <p className="font-semibold text-black">
              {user}{' '}
              {isMobile && (
                <span className="flex items-center gap-1">
                  <Circle
                    className={cn(isOnline ? 'text-green-700' : 'text-red-500')}
                    size={10}
                  />
                  <span>{onlineStatus}</span>
                </span>
              )}
            </p>
            <p className="text-muted-foreground">{userClaim}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="my-2 border border-gray-100 flex-1" />
          <p className="text-muted-foreground text-xs w-max">
            {formatDate(date).onlyDayMonth.toUpperCase()}
          </p>
          <div className="my-2 border border-gray-100 flex-1" />
        </div>
        <div style={chatStyle as React.CSSProperties}>
          {messagesStream.map((m, i) => (
            <ChatMessage
              key={i}
              className="p-0 m-0"
              user={m.isMine ? userInfo.name : user}
              chatmessage={m}
              avatar={m.isMine ? userInfo.avatarImg : userAvatar}
              hasHeader={i === 0 || messagesStream[i - 1]?.isMine !== m.isMine}
            />
          ))}
        </div>
      </CardContent>
      <div className="flex flex-col gap-4">
        <Separator className="p-0 w-full" />
        <CardContent className="flex items-center w-full justify-around gap-4 p-0">
          <Input
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSendButtonClick();
            }}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Write a message"
            className={cn(
              'bg-gray-100 shadow-none border-none focus:outline-none w-full h-10',
            )}
          />
        </CardContent>
        <Separator className="p-0 w-full" />
        <CardContent className="flex items-center justify-between gap-2 p-0">
          <div className="flex items-center gap-4 md:gap-1">
            <Image className="text-gray-800" size={18} />
            <Paperclip className="text-gray-800" size={18} />
            <ImagePlay className="text-gray-800" size={18} />
            <Smile className="text-gray-800" size={18} />
          </div>
          <Button
            disabled={inputValue.trim().length === 0}
            onClick={handleSendButtonClick}
            className="bg-blue-500 text-white hover:bg-blue-900 rounded-full flex items-center justify-center px-4 shadow-none font-semibold md:h-8 h-10"
          >
            Send
          </Button>
        </CardContent>
      </div>
    </Card>
  );
};

export default ChatFull;
