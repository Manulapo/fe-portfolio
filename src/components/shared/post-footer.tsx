import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { postFooterLinks } from '@/app/constants';

const PostFooter = ({
  likes,
  comments,
  shares,
}: {
  likes?: number;
  comments?: number;
  shares?: number;
}) => {
  const getRandomTwoDigitNumber = () => {
    // from 1 to 99
    return Math.floor(Math.random() * 99) + 1;
  };

  return (
    <>
      <div className="px-4 h-5 flex items-center justify-between text-muted-foreground text-xs">
        <div>{likes ? likes.toString() : getRandomTwoDigitNumber()} likes</div>
        <div className="flex items-center gap-2">
          <p>
            {comments ? comments.toString() : getRandomTwoDigitNumber()}{' '}
            comments
          </p>
          {'-'}
          <p>{shares ? shares.toString() : getRandomTwoDigitNumber()} share</p>
        </div>
      </div>
      <Separator className="w-[95%] mx-auto my-0 py-0 h-min" />
      <div className="flex items-center justify-start w-full md:gap-2 flex-nowrap overflow-auto px-2 pb-2">
        {postFooterLinks.map((link) => (
          <Button
            className="flex items-center justify-center gap-2 py-5 px-2 flex-1 group"
            variant={'ghost'}
            asChild
          >
            <Link to={link.link}>
              {link.icon}
              <span className="text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100">
                {link.name}
              </span>
            </Link>
          </Button>
        ))}
      </div>
    </>
  );
};

export default PostFooter;
