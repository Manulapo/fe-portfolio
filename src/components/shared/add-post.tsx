import { useIsMobile } from '@/hooks/use-mobile';
import { addPostLinks } from '../../app/constants/index';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import AvatarIcon from './Avatar';
import { PostTagsTypes } from '@/types';

const AddPost = ({
  onAddPostFilterToggle,
}: {
  onAddPostFilterToggle: (filter: PostTagsTypes) => void;
}) => {
  const isMobile = useIsMobile();
  return (
    <Card className="py-4 px-0 md:px-2 h-max mb-0">
      <CardContent className="flex flex-col justify-center md:items-center gap-2 px-0 md:px-2 overflow-x-hidden md:overflow-auto">
        {!isMobile && (
          <div className="flex items-center justify-between gap-4 px-2 w-full h-full">
            <AvatarIcon className="md:w-12 md:h-12 w-8 h-8" />
            <Input
              className="w-[90%] rounded-full h-max p-4 shadow-none border-2 border-gray-300"
              placeholder="Let's stay in touch!"
            />
          </div>
        )}
        <div className="flex items-center justify-start w-full md:gap-2 flex-nowrap overflow-auto md:relative md:h-max md:top-0 fixed h-13 top-13 bg-white z-10">
          {addPostLinks.map((link) => (
            <Button
              onClick={() => {
                onAddPostFilterToggle(
                  link.name.toLocaleLowerCase() as PostTagsTypes,
                );
              }}
              key={link.name}
              className="flex items-center justify-start gap-2 py-5 px-2 flex-1 group  cursor-pointer"
              variant={'ghost'}
              asChild
            >
              <div>
                {link.icon}
                <span className=" text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100">
                  {link.name}
                </span>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AddPost;
