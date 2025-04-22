import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PreventHoverEvent extends React.PointerEvent<HTMLElement> {}

export const preventHover = (event: PreventHoverEvent): void =>
  event.preventDefault();

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const formatDate = (date: string) => {
  // dd, month, yyyy i.e. 3 sept 2023
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  const dateObj = new Date(date);

  return {
    fullDate: dateObj.toLocaleDateString('en-US', options),
    onlyDayMonth: dateObj.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
    }),
  };
};

export const reduceText = (text: string, limit: number = 7): string => {
  if (text.length > limit) {
    return text.split(' ').slice(0, limit).join(' ') + '...';
  }
  return text;
};
