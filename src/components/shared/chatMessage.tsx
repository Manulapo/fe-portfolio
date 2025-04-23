import { ChatMessagesStream } from '@/types';
import AvatarIcon from './Avatar';

const ChatMessage = ({
  chatmessage,
  user,
  avatar,
  hasHeader = true,
}: {
  chatmessage: ChatMessagesStream;
  user: string;
  avatar: string;
  hasHeader?: boolean;
}) => {
  const { text, time } = chatmessage;
  return (
    <div className="flex flex-col">
      {hasHeader && (
        <p className="text-sm font-semibold flex gap-2 items-center mt-3">
          <AvatarIcon image={avatar} size={20} />
          {user}{' '}
          <span className="text-gray-400 font-light text-xs">{time}</span>
        </p>
      )}
      <p className="text-sm text-gray-500 pl-1 pt-1">{text}</p>
    </div>
  );
};

export default ChatMessage;
