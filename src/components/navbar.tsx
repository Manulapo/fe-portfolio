import chat from '@/assets/icons/chat.svg';
import home from '@/assets/icons/home.svg';
import job from '@/assets/icons/job.svg';
import linkedinIcon from '@/assets/icons/LinkedIn_icon.svg';
import notification from '@/assets/icons/notification.svg';
import people from '@/assets/icons/people.svg';
import publish from '@/assets/icons/publish.svg';
import sort from '@/assets/icons/sort.svg';
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

const icons = [
  { icon: home, path: '/', name: 'Home' },
  { icon: people, path: '/people', name: 'People' },
  { icon: chat, path: '/chat', name: 'Chat' },
  { icon: publish, path: '/publish', name: 'Publish' },
  { icon: job, path: '/job', name: 'Jobs' },
  { icon: notification, path: '/notification', name: 'Notification' },
];

const ProfileIcon = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Popover open={isClicked} onOpenChange={setIsClicked}>
      <PopoverTrigger
        onClick={() => setIsClicked(!isClicked)}
        asChild
        className="p-0 bg-transparent hover:bg-transparent w-max h-full cursor-pointer"
      >
        <Button
          className={cn(
            'h-full flex items-center justify-center group-hover:opacity-100',
          )}
        >
          <div
            className={cn(
              navigationMenuTriggerStyle(),
              'h-full flex flex-col items-center justify-center w-15 md:w-20 bg-white',
            )}
          >
            <div className="rounded-full bg-white ">
              <Avatar className="w-7 h-7">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </div>

            <span className="text-muted-foreground text-xs flex items-center justify-around opacity-70 hover:opacity-100">
              {isClicked ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
              Profile
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-90 p-0">
        <Card className="w-full h-max p-0 border-0">
          <CardContent className="h-auto py-4 flex flex-col items-center justify-center gap-4">
            <div className="border-white rounded-full bg-white flex items-center justify-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              <CardTitle className="font-semibold flex flex-col gap-1">
                <h2 className="">Manuel La Porta</h2>
                <p className="text-muted-foreground text-sm">
                  Frontend Developer & UX Designer
                </p>
              </CardTitle>
            </div>
            <Button
              variant={'outline'}
              className="w-full rounded-full py-3 bg-transparent border-1 border-blue-500 hover:bg-transparent group hover:border-blue-800"
              asChild
            >
              <Link to="/profile">
                <span className="font-semibold text-blue-500 group-hover:text-blue-800">
                  View Profile
                </span>
              </Link>
            </Button>
          </CardContent>
        </Card>
      </PopoverContent>
      <NavigationMenuItem className="h-full flex items-center justify-center group"></NavigationMenuItem>
    </Popover>
  );
};

const ForTheCompaniesIcon = () => (
  <NavigationMenuItem className="h-full flex items-center justify-center group">
    <Link
      to="/"
      className={cn(
        'h-full flex items-center justify-center group-hover:opacity-100',
      )}
    >
      <NavigationMenuLink
        className={cn(
          navigationMenuTriggerStyle(),
          'h-full flex flex-col items-center justify-center w-15 md:w-20 bg-white',
        )}
      >
        <div className="]rounded-full bg-white ">
          <Avatar className="w-7 h-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>

        <span className="text-muted-foreground text-xs flex items-center justify-around opacity-70 hover:opacity-100">
          <ChevronDown className="w-4 h-4" />
          Profile
        </span>
      </NavigationMenuLink>
    </Link>
  </NavigationMenuItem>
);

const MobileTopBar = () => (
  <NavigationMenu className="flex justify-between mx-auto md:h-14 md:border-b md:border-gray-200 max-w-full bg-white fixed top-0 md:top-0 z-50">
    <div className="w-full h-full md:m-auto flex justify-between items-center">
      <div className="w-full flex justify-around items-center p-2 list-none border-b-1 border-gray-200">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <NavigationMenuItem className="">
          <div className="relative w-[250px] h-9 flex items-center justify-center">
            <Input
              type="text"
              placeholder="Search"
              className={cn(
                'bg-gray-100 shadow-none border-none active:outline-none focus:outline-none w-full h-full pl-10', // Add padding for the icon
              )}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/chat"
            className={cn(
              'h-full p-0 flex items-center justify-center opacity-70',
            )}
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                'h-full w-max p-0 bg-white',
              )}
            >
              <img src={sort} alt="Icon" width={24} height={24} />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/chat"
            className={cn(
              'h-full p-0 flex items-center justify-center opacity-70',
            )}
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                'h-full w-max p-0 bg-white',
              )}
            >
              <img src={chat} alt="Icon" width={24} height={24} />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </div>
    </div>
  </NavigationMenu>
);

export default function Navbar() {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  const navIcons = isMobile
    ? icons.filter((item) => item.name !== 'Chat')
    : icons.filter((item) => item.name !== 'Publish');

  return (
    <>
      {isMobile && <MobileTopBar />}
      <NavigationMenu className="flex justify-between mx-auto h-14 border-t md:border-b border-b-0 md:border-gray-200 max-w-full bg-white fixed bottom-0 md:top-0 z-50">
        <div className="lg:w-[67%] md:w-[90%] w-full h-full md:m-auto flex justify-between items-center">
          <div className="items-center h-full hidden md:flex">
            <NavigationMenuItem className="flex items-center gap-3">
              <Link to="/">
                <img src={linkedinIcon} alt="Logo" className="h-8 w-8" />
              </Link>
              <div className="relative w-[250px] h-9">
                <Input
                  type="text"
                  placeholder="Search"
                  className={cn(
                    'bg-gray-100 shadow-none border-none active:outline-none focus:outline-none w-full h-full pl-10', // Add padding for the icon
                  )}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </div>
            </NavigationMenuItem>
          </div>
          <div className="flex items-center md:justify-center justify-evenly md:w-auto w-full h-full">
            {navIcons.map((item, index) => {
              return (
                <NavigationMenuItem
                  key={index}
                  className="h-full flex items-center justify-center group"
                >
                  <Link
                    to={item.path}
                    className={cn(
                      'h-full flex items-center justify-center opacity-70 group-hover:opacity-100',
                      pathname === item.path
                        ? 'border-gray-900 opacity-100 md:border-b-2 md:border-t-0 border-t-2'
                        : '',
                    )}
                  >
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'h-full flex flex-col items-center justify-center w-15 md:w-20 bg-white',
                      )}
                    >
                      <img src={item.icon} alt="Icon" width={24} height={24} />

                      <span className="text-muted-foreground text-xs">
                        {item.name}
                      </span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
            <ProfileIcon />
          </div>
        </div>
      </NavigationMenu>
    </>
  );
}
