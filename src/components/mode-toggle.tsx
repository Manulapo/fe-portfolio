import { ComputerIcon, Moon, Sun } from 'lucide-react';

import { useTheme } from '@/app/providers/theme.provider';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Card } from './ui/card';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';

export function ModeToggle() {
  const { setTheme } = useTheme();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Popover open={isClicked} onOpenChange={setIsClicked}>
      <PopoverTrigger onClick={() => setIsClicked(!isClicked)} asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-min' align="end">
        <Card className="h-max p-0 border-0">
          <Button className='flex justify-start' variant={'ghost'} onClick={() => setTheme('light')}>
            <Sun /> Light
          </Button>
          <Button className='flex justify-start' variant={'ghost'} onClick={() => setTheme('dark')}>
            <Moon /> Dark
          </Button>
          <Button className='flex justify-start' variant={'ghost'} onClick={() => setTheme('system')}>
            <ComputerIcon />System
          </Button>
        </Card>
      </PopoverContent>
    </Popover>
  );
}
