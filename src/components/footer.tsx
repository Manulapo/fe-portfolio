import { Link } from 'react-router-dom';
import linkedinIcon from '@/assets/icons/LinkedIn_icon.svg';
import { cn } from '@/lib/utils';

const links = [
  ['Informazioni', 'Accessibilità'],
  ['Centro assistenza', 'Privacy e condizioni'],
  ['Opzioni per gli annunci pubblicitari', 'Pubblicità'],
  ['Servizi alle aziende', 'Scarica l’app LinkedIn'],
  ['Altro'],
];

const Footer = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'text-xs text-muted-foreground px-4 pb-6 pt-4 space-y-2',
        className,
      )}
    >
      {links.map((group, i) => (
        <div key={i} className="flex flex-wrap gap-x-2 gap-y-1">
          {group.map((label) => (
            <Link key={label} to="#" className="hover:underline">
              {label}
            </Link>
          ))}
        </div>
      ))}
      <div className="pt-2 flex items-center gap-1">
        <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
        <span>LinkedIn Corporation © {new Date().getFullYear()}</span>
      </div>
    </div>
  );
};

export default Footer;
