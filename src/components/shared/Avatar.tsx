// filepath: c:\Users\manul\Repo\fe-portfolio\src\components\shared\Avatar.tsx
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Link } from 'react-router-dom';

const AvatarIcon = ({
  size,
  link,
  image,
  className,
  ...props
}: {
  size?: number;
  image?: string;
  link?: string;
  className?: string;
  [key: string]: any;
}) => {
  const dimension = size ? size : 40; // default to 40px (i.e., 10 * 4)
  const AvatarContent = () => (
    <>
      <AvatarImage
        key={size}
        className={cn('rounded-full', className)}
        {...props}
        src={image ?? 'https://github.com/shadcn.png'}
        style={{ width: dimension, height: dimension }}
      />
      <AvatarFallback
        className={cn('rounded-full', className)}
        style={{ width: dimension, height: dimension }}
      >
        U
      </AvatarFallback>
    </>
  );

  return (
    <Avatar>
      {link ? (
        <Link to={link}>
          <AvatarContent />
        </Link>
      ) : (
        <AvatarContent />
      )}
    </Avatar>
  );
};

export default AvatarIcon;
