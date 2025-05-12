import { userInfo } from '@/app/constants';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Link } from 'react-router-dom';

const AvatarIcon = ({
  size,
  link,
  image,
  className,
  name,
  ...props
}: {
  size?: number;
  image?: string;
  link?: string;
  name?: string;
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
        src={image ?? userInfo.avatarImg}
        style={{
          width: dimension,
          height: dimension,
          objectFit: 'cover',
          minWidth: dimension,
        }}
      />
      <AvatarFallback className={cn('rounded-full bg-blue-100 p-2', className)}>
        {name
          ? name
              .split(' ')
              .map((word) => word[0].charAt(0).toUpperCase())
              .join('')
          : 'U'}
      </AvatarFallback>
    </>
  );

  return (
    <Avatar>
      {link ? (
        <Link to={link} className="w-max">
          <AvatarContent />
        </Link>
      ) : (
        <AvatarContent />
      )}
    </Avatar>
  );
};

export default AvatarIcon;
