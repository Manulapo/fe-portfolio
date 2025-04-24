import { ChatMessagesStream } from '@/types';
import AvatarIcon from './Avatar-icon';
import { cn } from '@/lib/utils';
import { memo } from 'react';

const ChatAvatar = memo(
  ({ user, avatar, time }: { user: string; avatar: string; time: string }) => {
    return (
      <p className="text-sm font-semibold flex gap-2 items-center mt-5">
        <AvatarIcon name={user} image={avatar} size={20} />
        {user} <span className="text-gray-400 font-light text-xs">{time}</span>
      </p>
    );
  },
);

const ChatMessage = ({
  chatmessage,
  className,
  user,
  avatar,
  hasHeader = true,
}: {
  chatmessage: ChatMessagesStream;
  className?: string;
  user: string;
  avatar: string;
  hasHeader?: boolean;
}) => {
  const { text, time } = chatmessage;
  return (
    <div className={cn('flex flex-col', className)}>
      {hasHeader && <ChatAvatar user={user} avatar={avatar} time={time} />}
      <p className="text-sm text-gray-500 pl-1 pt-1">{text}</p>
    </div>
  );
};

export default ChatMessage;
