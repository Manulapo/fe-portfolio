import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface PreventHoverEvent extends React.PointerEvent<HTMLElement> {}

export const preventHover = (event: PreventHoverEvent): void =>
  event.preventDefault();