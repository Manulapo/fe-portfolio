import { Link } from 'react-router-dom';
import linkedinIcon from '@/assets/images/linkedIM.png';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Chat', to: '/chat' },
  { label: 'Notifications', to: '/notification' },
  { label: 'Network', to: '/network' },
  { label: 'Profile', to: '/profile' },
];

const Footer = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'text-xs text-muted-foreground px-4 pb-6 pt-4 space-y-2',
        className,
      )}
    >
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {navLinks.map((link) => {
          if (link.label === 'Chat' && !useIsMobile()) return null; // Skip the Profile link
          return (
            <Link key={link.to} to={link.to} className="hover:underline">
              {link.label}
            </Link>
          );
        })}
      </div>
      <div className="pt-2 flex items-center gap-1">
        <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
        <span>Manuel La Porta© Portfolio {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
