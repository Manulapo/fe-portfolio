import { Link } from 'react-router-dom';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { cn } from '@/lib/utils';

const NavbarIcon = ({
  navIcon,
  pathname,
}: {
  navIcon: {
    icon: string;
    path: string;
    name: string;
    hasDot?: boolean;
  };
  pathname: string;
}) => {
  return (
    <NavigationMenuItem className="h-full flex items-center justify-center group">
      <Link
        to={navIcon.path}
        className={cn(
          'h-full flex items-center justify-center opacity-70 group-hover:opacity-100',
          pathname === navIcon.path
            ? 'border-gray-900 opacity-100 md:border-b-2 md:border-t-0 border-t-2'
            : '',
        )}
      >
        <div
          className={cn(
            navigationMenuTriggerStyle(),
            'h-full flex flex-col items-center justify-center w-15 md:w-20 bg-white',
          )}
        >
          <div className="relative">
            {navIcon.hasDot && (
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-700 rounded-full z-10" />
            )}
            <img
              src={navIcon.icon}
              alt="Icon"
              width={24}
              height={24}
              className={cn(
                pathname === navIcon.path && navIcon.hasDot ? 'rotate-345' : '',
              )}
            />
          </div>
          <span className="text-muted-foreground text-xs">{navIcon.name}</span>
        </div>
      </Link>
    </NavigationMenuItem>
  );
};

export default NavbarIcon;
