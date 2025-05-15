import { navbarIcons, userInfo } from '@/app/constants';
import chat from '@/assets/icons/chat.svg';
import linkedinIcon from '@/assets/images/linkedIM.png';
import sort from '@/assets/icons/sort.svg';
import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSearch } from '@/hooks/use-search';
import { cn } from '@/lib/utils';
import { NavigationMenuItem } from '@radix-ui/react-navigation-menu';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AvatarIcon from './shared/Avatar-icon';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import NavbarIcon from './shared/navbar-icon';
import DialogLayout from './dialog-layout';
import ContactinfoDialogContent from './shared/contact-info-dialog';
import { ModeToggle } from './mode-toggle';

// Extracted SearchBar component
const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useSearch();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="relative w-[250px] h-9">
      <Input
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm((e.target as HTMLInputElement).value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            if (pathname !== '/') {
              navigate('/');
            } else {
              setSearchTerm((e.target as HTMLInputElement).value);
            }
          }
        }}
        type="text"
        placeholder="Search post..."
        className={cn(
          'bg-gray-100 shadow-none border-none active:outline-none focus:outline-none w-full h-full pl-10',
        )}
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  );
};

// Mobile top navigation bar
const MobileTopBar = () => (
  <NavigationMenu className="flex justify-between mx-auto md:h-14 md:border-b md:border-gray-200 max-w-full bg-card fixed top-0 z-50">
    <div className="w-full h-full flex justify-between items-center">
      <div className="w-full flex justify-around items-center p-2 border-b border-gray-200 list-none">
        <AvatarIcon name={userInfo.name} link="/profile" size={30} />
        <NavigationMenuItem>
          <SearchBar />
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/chat"
            className="h-full flex items-center justify-center opacity-70"
          >
            <NavigationMenuLink
              className={cn(
                navigationMenuTriggerStyle(),
                'h-full w-max p-0 bg-card',
              )}
            >
              <img src={sort} alt="Sort Icon" width={24} height={24} />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link
            to="/chat"
            className="h-full flex items-center justify-center opacity-70"
          >
            <div
              className={cn(
                navigationMenuTriggerStyle(),
                'h-full w-max p-0 bg-card',
              )}
            >
              <img src={chat} alt="Chat Icon" width={24} height={24} />
            </div>
          </Link>
        </NavigationMenuItem>
      </div>
    </div>
  </NavigationMenu>
);

// Profile Popover component
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
              'h-full flex flex-col items-center justify-center w-15 md:w-20 bg-card',
            )}
          >
            <div className="bg-card">
              <AvatarIcon name={userInfo.name} size={28} />
            </div>
            <span className="text-muted-foreground text-xs flex items-center justify-between opacity-70 hover:opacity-100">
              You{' '}
              {isClicked ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max p-0">
        <Card className="w-max h-max p-0 border-0">
          <CardContent className="h-auto py-4 flex flex-col items-center justify-center gap-4">
            <div className="rounded-full  flex items-center justify-center gap-3">
              <AvatarIcon name={userInfo.name} size={45} />
              <CardTitle className="font-semibold flex flex-col gap-1">
                <h2>{userInfo.name}</h2>
                <p className="text-muted-foreground text-sm">
                  {userInfo.title}
                </p>
              </CardTitle>
            </div>
            <div className="flex justify-between items-center w-full gap-2">
              <ModeToggle />
              <Button
                onClick={() => setIsClicked(false)}
                variant="outline"
                className="flex-1 w-full rounded-full py-3 border border-blue-500 hover:border-blue-800 bg-transparent"
                asChild
              >
                <Link to="/profile">
                  <span className="font-semibold text-blue-500 hover:text-blue-800">
                    View Profile
                  </span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default function Navbar() {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  const filteredNavIcons = isMobile
    ? navbarIcons.filter((item) => item.name !== 'Chat')
    : navbarIcons.filter(
        (item) => item.name !== 'Connect' && item.name !== 'Chat',
      );

  return (
    <>
      {isMobile && <MobileTopBar />}
      <NavigationMenu className="flex justify-center mx-auto h-14 border-t md:border-b border-b-0 md:border-gray-200 max-w-full bg-card dark:bg-card dark:border-[#333] fixed bottom-0 md:top-0 z-50">
        <div className="lg:w-[67%] md:w-[90%] w-full h-full flex justify-between items-center">
          <div className="items-center h-full hidden md:flex">
            <NavigationMenuItem className="flex items-center gap-3">
              <Link to="/">
                <img src={linkedinIcon} alt="Logo" className="h-8 w-8" />
              </Link>
              <SearchBar />
            </NavigationMenuItem>
          </div>
          <div className="flex items-center justify-evenly md:w-auto w-full h-full">
            {filteredNavIcons.map((navIcon, index) =>
              isMobile && navIcon.name === 'Connect' ? (
                <DialogLayout
                  key={index}
                  triggerContent={
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        'h-full flex flex-col items-center justify-center w-15 md:w-20 bg-card opacity-70',
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
                            pathname === navIcon.path && navIcon.hasDot
                              ? 'rotate-345'
                              : '',
                          )}
                        />
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {navIcon.name}
                      </span>
                    </NavigationMenuLink>
                  }
                  dialogTitle="Contact Info"
                  dialogContent={<ContactinfoDialogContent />}
                />
              ) : (
                <NavbarIcon key={index} navIcon={navIcon} pathname={pathname} />
              ),
            )}
            {!isMobile && <ProfileIcon />}
          </div>
        </div>
      </NavigationMenu>
    </>
  );
}
