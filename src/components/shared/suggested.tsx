import { randomUsers } from '@/app/constants/randomUser';
import { getRandomNumber } from '@/lib/utils';
import { Separator } from '../ui/separator';
import AvatarIcon from './Avatar-icon';

const Suggested = () => {
  const randomUser = randomUsers[getRandomNumber(0, randomUsers.length - 1)];
  return (
    <>
      <div className="pl-4 h-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AvatarIcon name={randomUser.name} image={randomUser.avatarUrl} size={25} />
          <p className="text-xs text-muted-foreground">
            Suggested by <span className="font-semibold">{randomUser.name}</span>
          </p>
        </div>
      </div>
      <Separator className="w-[95%] mx-auto" />
    </>
  );
};

export default Suggested;
