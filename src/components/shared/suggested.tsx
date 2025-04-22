import { Separator } from '../ui/separator';
import AvatarIcon from './Avatar';

const Suggested = () => {
  return (
    <>
      <div className="pl-4 h-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AvatarIcon size={20} />
          <p className="text-xs text-muted-foreground">
            Suggested by <span className="font-semibold">Manuel La Porta</span>
          </p>
        </div>
      </div>
      <Separator className="w-[95%] mx-auto" />
    </>
  );
};

export default Suggested;
