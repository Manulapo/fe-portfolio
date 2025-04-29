import { contactInfo } from '@/app/constants';

const ContactinfoDialogContent = () => {
  return (
    <div>
      {contactInfo.map((item, index) => (
        <div key={index} className="flex items-center gap-4 mb-4">
          <item.icon className="w-6 h-6" />
          <div className="flex flex-col">
            <div className="text-md font-semibold flex items-center gap-2">
              {item.title}
              <span>
                {item.description && (
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                )}
              </span>
            </div>
            {item.value &&
              (item.link.length > 0 ? (
                <a className="text-blue-500" href={item.link} download>
                  {item.value}
                </a>
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
