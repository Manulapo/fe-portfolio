import { userInfo } from '@/app/constants';
import unipisa from '@/assets/images/unipisa_logo.jpg';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTypewriter } from '@/hooks/use-type-writer';
import { cn } from '@/lib/utils';
import { FileUser, Forward, Loader, PlusIcon, Send } from 'lucide-react';
import { memo, Suspense, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import DialogLayout from '../dialog-layout';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import AvatarIcon from './Avatar-icon';
import ContactinfoDialogContent from './contact-info-dialog';

const cv = window.location.origin + '/assets/PDF/Manuel_la_Porta_CV.pdf';
const ProfileCard = ({
  isProfilePage = false,
}: {
  isProfilePage?: boolean;
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const isMobile = useIsMobile();
  const avatarSize = useMemo(
    () => (isProfilePage ? (isMobile ? 70 : 150) : 70),
    [isProfilePage, isMobile],
  );

  const userTitle = useTypewriter(userInfo.title, 100);

  return (
    <Card className="p-0 h-auto">
      <CardHeader
        className={cn(
          'p-0 pb-2 rounded-tl-sm rounded-tr-sm relative',
          isProfilePage && !isMobile ? 'h-45' : 'h-25',
        )}
      >
        <div
          className={cn(
            'p-0 pb-2 rounded-tl-sm rounded-tr-sm relative overflow-hidden',
            isProfilePage && !isMobile ? 'h-45' : 'h-25',
          )}
        >
          <img
            src={userInfo.coverImg}
            alt={userInfo.name}
            className="w-full object-cover h-full"
          />
        </div>
        <div
          className={cn(
            'absolute left-3 border-3 dark:border-secondary border-white rounded-full bg-card',
            isProfilePage ? 'bottom-[-35px]' : 'bottom-[-20px]',
          )}
        >
          <AvatarIcon
            name={userInfo.name}
            link="/profile"
            size={avatarSize}
            
          />
        </div>
      </CardHeader>
      <CardContent className="h-auto pb-5">
        <CardTitle
          className={cn(
            'font-semibold flex flex-col gap-1',
            isProfilePage ? 'pt-8' : 'pt-2',
          )}
        >
          <h1 className="text-xl">{userInfo.name}</h1>
        </CardTitle>

        <div className="flex items-center justify-between gap-2">
          <div>
            <p
              className={cn(
                'text-muted-foreground font-normal',
                isProfilePage && 'text-lg',
              )}
            >
              {userTitle}
            </p>
            <p
              className={cn(
                'text-muted-foreground text-xs font-medium',
                isProfilePage && 'text-sm font-semibold',
              )}
            >
              {userInfo.location}
            </p>
          </div>
          <div>
            {!isMobile && isProfilePage && (
              <p className="text-muted-foreground text-sm font-semibold flex items-center gap-2 mr-3">
                <Suspense
                  fallback={<Loader className="animate-spin text-gray-500" />}
                >
                  <img src={unipisa} alt="University logo" className="w-8" />
                </Suspense>
                {userInfo.university}
              </p>
            )}
          </div>
        </div>
        {isProfilePage && (
          <DialogLayout
            triggerContent={
              <Button
                variant="link"
                className="text-sm m-0 p-0 text-blue-500 font-semibold cursor-pointer"
              >
                Contact Info
              </Button>
            }
            dialogTitle="Contact Info"
            dialogContent={<ContactinfoDialogContent />}
          />
        )}
        {isProfilePage && (
          <div className="mt-1">
            {isMobile && (
              <p className="text-muted-foreground text-sm font-semibold flex items-center gap-2">
                <Suspense
                  fallback={<Loader className="animate-spin text-gray-500" />}
                >
                  <img src={unipisa} alt="University logo" className="w-8" />
                </Suspense>
                {userInfo.university}
              </p>
            )}
            <div className="flex md:items-center md:justify-start justify-end gap-2 mt-6 w-full">
              <Button
                className="rounded-full bg-blue-600 hover:bg-blue-900"
                asChild
              >
                <Link
                  target="_blank"
                  to="https://www.linkedin.com/in/manulaporta/"
                  className="text-white flex items-center gap-2 px-4 py-2"
                >
                  <Send /> Message
                </Link>
              </Button>
              <Popover open={isClicked} onOpenChange={setIsClicked}>
                <PopoverTrigger
                  onClick={() => setIsClicked((prev) => !prev)}
                  asChild
                  className="p-0 bg-transparent hover:bg-transparent w-max h-full cursor-pointer"
                >
                  <Button className="rounded-full bg-card border border-gray-400 hover:bg-gray-100 text-gray-500 px-4 py-2">
                    Other
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Card className="w-full h-max p-0 border-0">
                    <CardContent className="h-auto w-full p-0 py-2 flex flex-col items-start justify-center">
                      <Link
                        to="https://www.linkedin.com/in/manulaporta/"
                        className="w-full flex items-center justify-start gap-2 py-3 px-5 pl-3 group rounded-none"
                      >
                        <span className="text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100 w-full flex items-center gap-2">
                          <PlusIcon className="w-4 h-4" /> Add to contacts
                        </span>
                      </Link>
                      <Button
                        onClick={() => {}}
                        className="w-full flex items-center justify-start gap-2 py-3 px-5 group rounded-none"
                        variant="ghost"
                        asChild
                      >
                        <span className="text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100 w-full">
                          <Forward className="w-4 h-4" /> Share this profile as
                          a link
                        </span>
                      </Button>
                      <a
                        download
                        href={cv}
                        className="w-full flex items-center justify-start gap-2 py-3 px-5 pl-3 group rounded-none"
                      >
                        <span className="text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100 w-full flex items-center gap-2">
                          <FileUser className="w-4 h-4" /> Download CV
                        </span>
                      </a>
                    </CardContent>
                  </Card>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default memo(ProfileCard);
