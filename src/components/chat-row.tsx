import { ChatData } from '@/types';
import { Button } from './ui/button';
import AvatarIcon from './shared/Avatar-icon';
import { reduceText } from '@/lib/utils';
import { Separator } from './ui/separator';

const ChatRow = ({ chatData }: { chatData: ChatData }) => {
  const { userAvatar, preview, user } = chatData;

  return (
    <>
      <Button
        variant={'ghost'}
        className=" block w-full h-max px-1 m-0 rounded-sm hover:bg-gray-100 cursor-pointer"
      >
        <div className="flex gap-4 justify-start items-center w-full pl-2">
          <AvatarIcon name={user} image={userAvatar} size={37} />
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

export default ChatRow;
