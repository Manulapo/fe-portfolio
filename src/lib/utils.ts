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

export const formatDate = (date: string): string => {
  // dd, month, yyyy i.e. 3 sept 2023
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('en-US', options);
};
