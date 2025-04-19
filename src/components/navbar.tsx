import chat from '@/assets/icons/chat.svg';
import job from '@/assets/icons/job.svg';
import linkedinIcon from '@/assets/icons/LinkedIn_icon.svg';
import notification from '@/assets/icons/notification.svg';
import publish from '@/assets/icons/publish.svg';
import people from '@/assets/icons/people.svg';
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import { Link, useLocation } from 'react-router-dom';
import { Input } from './ui/input';
import { Search } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const navIcons = [
  { icon: people, path: '/people', name: 'People' },
  { icon: chat, path: '/chat', name: 'Chat' },
  { icon: publish, path: '/publish', name: 'Publish' },
  { icon: job, path: '/job', name: 'Jobs' },
  { icon: notification, path: '/notification', name: 'Notification' },
];
export default function Navbar() {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  return (
    <NavigationMenu className="flex justify-between mx-auto h-14 border-b border-gray-200 max-w-full bg-white fixed bottom-0 md:top-0 z-50">
      <div className="md:w-[67%] w-full h-full md:m-auto flex justify-between items-center">
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
            if (!isMobile && item.name === 'Publish') return;
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
                      ? 'md:border-b-2 md:border-gray-900 opacity-100'
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
  );
}
