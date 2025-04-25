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

export const formatDate = (date: string | Date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  return {
    fullDate: dateObj.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }),
    onlyDayMonth: dateObj.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
    }),
    onlyTime: dateObj.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
  };
};

export const reduceText = (text: string, limit: number = 7): string => {
  if (text.length > limit) {
    return text.split(' ').slice(0, limit).join(' ') + '...';
  }
  return text;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const cleanStringify = (text:string) => {
  return text.replace(/[{}":,]/g, '');
};