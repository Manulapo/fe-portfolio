import { certifications } from '@/app/constants/cert-skills';
import { Award } from 'lucide-react';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { Link } from 'react-router-dom';

const CertificationBadge = ({ data }: { data: string }) => {
  const match = certifications.find((cert) =>
    data.toLowerCase().includes(cert.title.toLowerCase()),
  );

  return (
    <>
      {match ? (
        <Card className=" rounded-md p-2 border-1 w-full mx-auto border-blue-100 bg-blue-50 relative overflow-hidden">
          <Link target='_blank' to={match.credentialUrl ?? '/'}>
            <div className="flex gap-4 items-start justify-between py-2 px-4 relative z-2">
              <div className="flex items-center gap-4">
                <img
                  src={match.logoUrl}
                  alt={`${match.organization} logo`}
                  className="w-12 h-12 rounded-full shadow-sm bg-white p-1 relative z-2"
                />
                <div>
                  <CardTitle className="text-black font-semibold">
                    {match.title}
                  </CardTitle>
                  <CardDescription className="text-xs md:text-sm text-gray-600">
                    Issued by{' '}
                    <span className="font-semibold text-shadow">
                      {match.organization}
                    </span>
                  </CardDescription>
                </div>
              </div>
              <div className="items-start text-xs text-gray-500 hidden md:flex">
                <Award size={18} />
                {match.issueDate}
              </div>
            </div>
          </Link>
          <img
            src={match.logoUrl}
            alt={`${match.organization} logo`}
            className="w-80 object-cover absolute left-0 rounded-full bottom-[-100px] opacity-10 blur-xs rotate-145 z-1"
          />
        </Card>
      ) : null}
    </>
  );
};

export default CertificationBadge;
