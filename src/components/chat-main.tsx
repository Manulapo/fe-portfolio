import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { ChatData } from '@/types';
import { ChevronDown, ChevronUp, PenLine } from 'lucide-react';
import { useMemo, useState } from 'react';
import ChatRow from './chat-row';
import AvatarIcon from './shared/Avatar-icon';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Separator } from './ui/separator';
import { chatData } from '@/app/constants/chats';

const ChatBar = ({
  className,
  onChatRowSelect,
}: {
  className?: string;
  onChatRowSelect?: (chat: ChatData) => void;
}) => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(true);

  const cardStyle = useMemo(
    () => ({
      height: isOpen ? (isMobile ? 'calc(100vh - 50px)' : '500px') : '67px',
      bottom: isOpen ? 0 : '-5px',
      boxShadow: isMobile ? 'none' : '0 12px 30px rgba(0, 0, 0, 0.12)',
    }),
    [isOpen, isMobile],
  );

  const handleChatRowClick = (chat: ChatData) => {
    onChatRowSelect?.(chat);
  };

  return (
    <Card
      className={cn(
        'overflow-hidden rounded-xl border-border bg-card p-0 shadow-none',
        className,
      )}
      style={cardStyle}
    >
      {!isMobile && (
        <CardHeader className="gap-2 px-5 py-4 pb-0">
          <CardTitle className="flex items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative shrink-0">
                <AvatarIcon name="Manuel La Porta" size={40} />
                <span
                  aria-label="Online"
                  className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card bg-emerald-500"
                />
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-base font-semibold leading-tight">
                  Messaging
                </h3>
                <p className="mt-1 truncate text-xs font-normal text-muted-foreground">
                  Keep in touch with your network
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1">
              <Button
                aria-label="Start a new message"
                className="rounded-full p-2 text-muted-foreground shadow-none hover:bg-muted hover:text-foreground"
                size="icon"
                variant="ghost"
              >
                <PenLine />
              </Button>
              <Button
                aria-label={isOpen ? 'Collapse messaging' : 'Expand messaging'}
                onClick={() => setIsOpen((prev) => !prev)}
                className="rounded-full p-2 text-muted-foreground shadow-none hover:bg-muted hover:text-foreground cursor-pointer"
                size="icon"
                variant="ghost"
              >
                {isOpen ? <ChevronDown /> : <ChevronUp />}
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
      )}
      {isOpen && (
        <>
          {!isMobile && <Separator className="py-0" />}
          <CardContent className="flex min-h-0 w-full flex-1 flex-col p-0">
            <div className="min-h-0 flex-1 overflow-y-auto pb-3">
              {chatData.map((chat, i) => (
                <div onClick={() => handleChatRowClick(chat)} key={chat.user}>
                  <ChatRow chatData={chat} />
                  {i < chatData.length - 1 && (
                    <Separator className="my-1 p-0" />
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default ChatBar;
