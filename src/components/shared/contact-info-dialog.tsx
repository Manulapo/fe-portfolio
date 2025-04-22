import { contactInfo } from '@/app/constants';
import { Link } from 'react-router-dom';

const ContactinfoDialogContent = () => {
  return (
    <div>
      {contactInfo.map((item, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          <item.icon className="w-6 h-6" />
          <div className="flex flex-col">
            <p className="text-md font-semibold flex items-center gap-2">
              {item.title}
              <span>
                {item.description && (
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </span>
            </p>
            {item.value &&
              (item.link.length > 0 ? (
                <Link
                  className="text-blue-500"
                  to={item.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  {item.value}
                </Link>
              ) : (
                <p className="text-sm text-muted-foreground">{item.value}</p>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactinfoDialogContent;
