import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { PostTagsTypes } from '@/types';
import { addPostLinks, userInfo } from '../../app/constants/index';
import DialogLayout from '../dialog-layout';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import AvatarIcon from './Avatar-icon';
import ContactinfoDialogContent from './contact-info-dialog';

const AddPost = ({
  onAddPostFilterToggle,
  filter = 'all',
}: {
  onAddPostFilterToggle: (filter: PostTagsTypes) => void;
  filter?: PostTagsTypes;
}) => {
  const isMobile = useIsMobile();
  return (
    <Card className="py-4 px-0 md:px-2 h-max mb-0">
      <CardContent className="flex flex-col justify-center md:items-center gap-2 px-0 md:px-2 overflow-x-hidden md:overflow-auto">
        {!isMobile && (
          <div className="flex items-center justify-between gap-4 px-2 w-full h-full">
            <AvatarIcon
              size={45}
              name={userInfo.name}
              className="md:w-12 md:h-12 w-8 h-8"
            />
            <DialogLayout
              triggerContent={
                <p className="w-[90%] rounded-full h-max p-4 shadow-none border-2 border-gray-300 text-gray-400">
                  Let's stay in touch!
                </p>
              }
              dialogTitle="Contact Info"
              dialogContent={<ContactinfoDialogContent />}
            />
          </div>
        )}
        <div className="flex items-center justify-start w-full md:gap-2 flex-nowrap overflow-auto md:relative md:h-max md:top-0 fixed h-13 top-13 bg-white z-10">
          {addPostLinks.map((link) => {
            return (
              <Button
                onClick={() => {
                  onAddPostFilterToggle(
                    link.value.toLocaleLowerCase() as PostTagsTypes,
                  );
                }}
                key={link.name}
                className={cn(
                  'flex items-center justify-center gap-2 py-5 px-2 flex-1 group  cursor-pointer bg-transparent text-gray-800 hover:text-gray-800 hover:bg-gray-100 shadow-none transition-all duration-200 ease-in-out',
                  filter === link.value.toLocaleLowerCase()
                    ? 'bg-gray-100 text-gray-800 '
                    : '',
                )}
                asChild
              >
                <div>
                  {link.icon}
                  <span className=" text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100">
                    {link.name}
                  </span>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default AddPost;
