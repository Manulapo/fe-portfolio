import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

const AvatarIcon = ({
  size,
  image,
  className,
  ...props
}: {
  size?: number;
  image?: string;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <Avatar>
      <AvatarImage
        className={cn(
          'rounded-full',
          size ? `w-${size.toString()} h-${size.toString()}` : 'w-10 h-10',
          className,
        )}
        {...props}
        src={image ?? 'https://github.com/shadcn.png'}
      />
      <AvatarFallback
        className={cn(
          'rounded-full',
          size ? `w-${size.toString()} h-${size.toString()}` : 'w-10 h-10',
          className,
        )}
      >
        U
      </AvatarFallback>
    </Avatar>
  );
};

export default AvatarIcon;
