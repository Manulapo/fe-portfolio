import chat from '@/assets/icons/chat.svg';
import job from '@/assets/icons/job.svg';
import linkedinIcon from '@/assets/icons/LinkedIn_icon.svg';
import notification from '@/assets/icons/notification.svg';
import people from '@/assets/icons/people.svg';
import publish from '@/assets/icons/publish.svg';
import home from '@/assets/icons/home.svg';
import sort from '@/assets/icons/sort.svg';
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import { Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Input } from './ui/input';

const icons = [
  { icon: home, path: '/', name: 'Home' },
  { icon: people, path: '/people', name: 'People' },
  { icon: chat, path: '/chat', name: 'Chat' },
  { icon: publish, path: '/publish', name: 'Publish' },
  { icon: job, path: '/job', name: 'Jobs' },
  { icon: notification, path: '/notification', name: 'Notification' },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  const navIcons = isMobile
    ? icons.filter((item) => item.name !== 'Chat')
    : icons.filter((item) => item.name !== 'Publish');

  return (
    <>
      {isMobile && (
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
      )}
      <NavigationMenu className="flex justify-between mx-auto h-14 border-t md:border-b border-b-0 md:border-gray-200 max-w-full bg-white fixed bottom-0 md:top-0 z-50">
        <div className="lg:w-[67%] md:w-[90%] w-full h-full md:m-auto flex justify-between items-center">
          <div className="items-center h-full hidden md:flex">
            <NavigationMenuItem className="flex items-center gap-3">
              <Link to="/">
                <img src={linkedinIcon} alt="Logo" className="h-8 w-8" />
              </Link>
              <div className="relative w-[200px] h-9">
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
          </div>
        </div>
      </NavigationMenu>
    </>
  );
}
