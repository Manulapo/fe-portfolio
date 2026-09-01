import { cn, formatDate, reduceText } from '@/lib/utils';
import { ChatData } from '@/types';
import AvatarIcon from './shared/Avatar-icon';
import { Button } from './ui/button';

const ChatRow = ({ chatData }: { chatData: ChatData }) => {
  const { userAvatar, preview, user, userClaim, date, isOnline } = chatData;

  return (
    <Button
      variant="ghost"
      className="group block h-auto w-full cursor-pointer rounded-none px-5 py-3.5 text-left hover:bg-muted/60"
    >
      <div className="flex w-full items-center gap-3">
        <div className="relative shrink-0">
          <AvatarIcon name={user} image={userAvatar} size={48} />
          <span
            aria-hidden="true"
            className={cn(
              'absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-card',
              isOnline ? 'bg-green-700' : 'bg-red-500',
            )}
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="truncate text-sm font-semibold text-foreground">
              {user}
            </h3>
            <span className="shrink-0 text-[11px] font-normal text-muted-foreground">
              {formatDate(date).onlyDayMonth}
            </span>
          </div>
          <p className="truncate text-xs font-medium text-muted-foreground">
            {userClaim}
          </p>
          <p className="mt-1 truncate text-xs font-normal text-muted-foreground group-hover:text-foreground">
            {reduceText(preview, 12)}
          </p>
        </div>
      </div>
    </Button>
  );
};

export default ChatRow;
