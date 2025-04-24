import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { postFooterLinks } from '@/app/constants';
import funny from '@/assets/images/funny.png';
import celebrate from '@/assets/images/celebrate.png';
import love from '@/assets/images/love.png';
import like from '@/assets/images/like.png';
import { useCallback } from 'react';
import { getRandomNumber } from '@/lib/utils';

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

  const LikesIcons = () => {
    const icons = [like, love, celebrate, funny];
    const getRandomIcons = useCallback(() => {
      const randomIcons = new Set<string>();
      while (randomIcons.size < getRandomNumber(1, 4)) {
        const randomIndex = Math.floor(Math.random() * icons.length);
        randomIcons.add(icons[randomIndex]);
      }
      return Array.from(randomIcons);
    }, []);

    return (
      getRandomIcons().length > 0 && (
        <div className="flex items-center">
          {getRandomIcons().map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="like-icon"
              className="w-6 h-6 object-fill p-0.5 rounded-full bg-white border-1 border-white"
              style={{
                transform: `translateX(${index * 5}px)`,
                transition: 'transform 0.3s ease-in-out',
                marginLeft: index > 0 ? '-10px' : '0',
              }}
            />
          ))}
        </div>
      )
    );
  };

  return (
    <>
      <div className="px-4 h-5 flex items-center justify-between text-muted-foreground text-xs">
        <div className="flex gap-3 items-center">
          <LikesIcons />
          {likes ? likes.toString() : getRandomTwoDigitNumber()} likes
        </div>
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
