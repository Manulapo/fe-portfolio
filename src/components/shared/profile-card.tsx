import { useIsMobile } from '@/hooks/use-mobile';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import AvatarIcon from './Avatar';
import { cn } from '@/lib/utils';
import unipisa from '@/assets/images/unipisa_logo.jpg';
import { Button } from '../ui/button';
import { FileUser, Forward, PlusIcon, Send } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { useState } from 'react';
import DialogLayout from '../dialog-layout';
import ContactinfoDialogContent from './contact-info-dialog';

const ProfileCard = ({
  isProfilePage = false,
}: {
  isProfilePage?: boolean;
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const isMobile = useIsMobile();
  const avatarSize = isProfilePage ? (isMobile ? 70 : 150) : 70; // default to 40px (i.e., 10 * 4)
  return (
    <>
      <Card className="p-0 h-auto">
        <CardHeader
          className={cn(
            'p-0 pb-2 rounded-tl-sm rounded-tr-sm bg-amber-500 relative h-25',
            isProfilePage && !isMobile ? 'h-45' : 'h-25',
          )}
        >
          <div className="absolute left-3 bottom-[-35px] border-2 border-white rounded-full bg-white ">
            <AvatarIcon link="/profile" size={avatarSize} />
          </div>
        </CardHeader>
        <CardContent className="h-auto pb-5">
          <CardTitle className="font-semibold pt-8 flex flex-col gap-1">
            <h1 className="text-xl">Manuel La Porta</h1>
          </CardTitle>
          <p className="text-muted-foreground font-normal">
            Frontend Developer & UX Designer
          </p>
          {isProfilePage && (
            <DialogLayout
              triggerContent={
                <Button
                  variant={'link'}
                  className="text-sm m-0 p-0 text-blue-600 font-semibold cursor-pointer"
                >
                  Contact Info
                </Button>
              }
              dialogTitle="Contact Info"
              dialogContent={<ContactinfoDialogContent />}
            />
          )}
          <p className="text-muted-foreground text-xs font-medium">
            Copenaghen, Regione Capitale della Danimarca
          </p>
          {isProfilePage && (
            <div className="mt-4">
              <p className="text-muted-foreground text-sm font-semibold flex items-center gap-2">
                <img src={unipisa} className="w-8" />
                University of Pisa, Italy
              </p>
              <div className="flex md:items-center md:justify-start justify-end gap-2 mt-6 w-full">
                <Button className="rounded-full bg-blue-600 hover:bg-blue-900">
                  <Send /> Message
                </Button>
                <Popover open={isClicked} onOpenChange={setIsClicked}>
                  <PopoverTrigger
                    onClick={() => setIsClicked(!isClicked)}
                    asChild
                    className="p-0 bg-transparent hover:bg-transparent w-max h-full cursor-pointer"
                  >
                    <Button className="rounded-full bg-white border-1 border-gray-400 hover:bg-gray-100 text-gray-500 px-4 py-2">
                      Other
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0">
                    <Card className="w-full h-max p-0 border-0">
                      <CardContent className="h-auto w-full p-0 py-2 flex flex-col items-start justify-center">
                        <Button
                          onClick={() => {}}
                          className="w-full flex items-center justify-start gap-2 py-3 px-5 flex-1 group rounded-none"
                          variant={'ghost'}
                          asChild
                        >
                          <span className=" text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100 w-full">
                            <PlusIcon className="w-4 h-4" /> Add to contacts
                          </span>
                        </Button>
                        <Button
                          onClick={() => {}}
                          className="w-full flex items-center justify-start gap-2 py-3 px-5 flex-1 group rounded-none"
                          variant={'ghost'}
                          asChild
                        >
                          <span className=" text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100 w-full">
                            <Forward className="w-4 h-4" /> Share this profile
                            as a link
                          </span>
                        </Button>
                        <Button
                          onClick={() => {}}
                          className="w-full flex items-center justify-start gap-2 py-3 px-5 flex-1 group rounded-none"
                          variant={'ghost'}
                          asChild
                        >
                          <span className=" text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100 w-full">
                            <FileUser className="w-4 h-4" /> Download CV
                          </span>
                        </Button>
                      </CardContent>
                    </Card>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default ProfileCard;
