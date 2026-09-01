import { userInfo } from '@/app/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn, escapeHtml, formatDate } from '@/lib/utils';
import { ChatData } from '@/types';
import {
  ChevronDown,
  ChevronUp,
  Image,
  ImagePlay,
  Paperclip,
  Smile,
  X,
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import AvatarIcon from './shared/Avatar-icon';
import ChatMessage from './shared/chatMessage';
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
  onToggle?: () => void;
  chatClosedTrigger: (chat: ChatData) => void;
}) => {
  const { user, userAvatar, messages, date, userClaim, isOnline } = chatData;
  const isMobile = useIsMobile();
  const [inputValue, setInputValue] = useState('');
  const [messagesStream, setMessagesStream] = useState(messages);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const cardStyle = useMemo(
    () => ({
      height: isOpen ? (isMobile ? 'calc(100vh - 50px)' : '600px') : '67px',
      position: isMobile ? ('absolute' as const) : ('relative' as const),
      top: isMobile ? '50px' : undefined,
      zIndex: isMobile ? 1000 : undefined,
      bottom: isOpen ? 0 : '-5px',
      boxShadow: isMobile ? 'none' : '0 12px 30px rgba(0, 0, 0, 0.12)',
    }),
    [isOpen, isMobile],
  );

  const handleSendButtonClick = useCallback(() => {
    if (inputValue.trim().length > 0) {
      const newMessage = {
        text: escapeHtml(inputValue),
        time: formatDate(new Date()).onlyTime,
        isMine: true,
      };
      setMessagesStream((prev) => [...prev, newMessage]);
      setInputValue('');
    }
  }, [inputValue]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
    });
  }, [messagesStream]);

  return (
    <Card
      className={cn(
        'overflow-hidden rounded-xl border-border bg-card p-0 shadow-none',
        className,
      )}
      style={cardStyle}
    >
      <CardHeader className="gap-2 px-5 py-4 pb-0">
        <CardTitle className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative shrink-0">
              <AvatarIcon name={user} image={userAvatar} size={40} />
              <span
                aria-label={isOnline ? 'Online' : 'Offline'}
                className={cn(
                  'absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card',
                  isOnline ? 'bg-emerald-500' : 'bg-muted-foreground',
                )}
              />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold leading-tight">
                {user}
              </h3>
              <p className="mt-1 truncate text-xs font-normal text-muted-foreground">
                {userClaim} · {isOnline ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {onToggle && !isMobile && (
              <Button
                aria-label={
                  isOpen ? 'Collapse conversation' : 'Expand conversation'
                }
                className="cursor-pointer rounded-full p-2 text-muted-foreground shadow-none hover:bg-muted hover:text-foreground"
                onClick={onToggle}
                size="icon"
                variant="ghost"
              >
                {isOpen ? <ChevronDown /> : <ChevronUp />}
              </Button>
            )}
            <Button
              aria-label={`Close conversation with ${user}`}
              className="cursor-pointer rounded-full p-2 text-muted-foreground shadow-none hover:bg-muted hover:text-foreground"
              onClick={() => chatClosedTrigger(chatData)}
              size="icon"
              variant="ghost"
            >
              <X />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>

      {isOpen && (
        <>
          <Separator className="py-0" />
          <CardContent className="flex min-h-0 flex-1 flex-col p-0">
            <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-4">
              <div className="flex items-center gap-3 pb-2">
                <AvatarIcon name={user} image={userAvatar} size={48} />
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {user}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {userClaim}
                  </p>
                </div>
              </div>

              <div className="my-3 flex items-center gap-3">
                <Separator className="flex-1" />
                <p className="shrink-0 text-[11px] font-medium text-muted-foreground">
                  {formatDate(date).onlyDayMonth.toUpperCase()}
                </p>
                <Separator className="flex-1" />
              </div>

              <div className="min-h-0 flex-1">
                {messagesStream.map((message, index) => (
                  <ChatMessage
                    avatar={message.isMine ? userInfo.avatarImg : userAvatar}
                    chatmessage={message}
                    className="m-0 p-0"
                    hasHeader={
                      index === 0 ||
                      messagesStream[index - 1]?.isMine !== message.isMine
                    }
                    key={`${message.time}-${index}`}
                    user={message.isMine ? userInfo.name : user}
                  />
                ))}
                <div ref={chatEndRef} />
              </div>
            </div>

            <div className="border-t border-border bg-card px-4 py-3">
              <div className="flex items-center gap-2">
                <Input
                  aria-label="Message"
                  className="h-10 rounded-lg border-0 bg-muted px-3 shadow-none focus-visible:ring-1"
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') handleSendButtonClick();
                  }}
                  placeholder="Write a message"
                  value={inputValue}
                />
                <Button
                  className="rounded-full px-4 font-semibold shadow-none"
                  disabled={inputValue.trim().length === 0}
                  onClick={handleSendButtonClick}
                >
                  Send
                </Button>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {[
                  { icon: Image, label: 'Add image' },
                  { icon: Paperclip, label: 'Attach file' },
                  { icon: ImagePlay, label: 'Add GIF' },
                  { icon: Smile, label: 'Add emoji' },
                ].map(({ icon: Icon, label }) => (
                  <Button
                    aria-label={label}
                    className="rounded-full text-muted-foreground shadow-none hover:bg-muted hover:text-foreground"
                    key={label}
                    size="icon"
                    type="button"
                    variant="ghost"
                  >
                    <Icon size={18} />
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default ChatFull;
