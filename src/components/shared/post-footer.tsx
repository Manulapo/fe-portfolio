import { postFooterLinks } from '@/app/constants';
import { randomUsers } from '@/app/constants/randomUser';
import { getRandomNumber } from '@/lib/utils';
import { useCallback } from 'react';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

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
    const getRandomIcons = useCallback(() => {
      const randomIcons = new Set<string>();
      while (randomIcons.size < getRandomNumber(3, 4)) {
        const randomIndex = Math.floor(Math.random() * randomUsers.length);
        randomIcons.add(randomUsers[randomIndex].avatarUrl);
      }
      return Array.from(randomIcons);
    }, []);

    return (
      getRandomIcons().length > 0 && (
        <div className="flex items-center mr-2">
          {getRandomIcons().map((icon, index) => (
            <img
              key={index}
              src={icon}
              alt="like-icon"
              className="w-7 h-7 object-fill rounded-full bg-white border-1 border-white"
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
        <div className="flex gap-4 items-center">
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
            key={link.name}
            className="flex items-center justify-center gap-2 py-5 px-2 flex-1 group"
            variant={'ghost'}
          >
            {link.icon}
            <span className="text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100">
              {link.name}
            </span>
          </Button>
        ))}
      </div>
    </>
  );
};

export default PostFooter;
