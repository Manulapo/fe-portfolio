import { CertificationData } from '@/types';
import { Loader } from 'lucide-react';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const CertificationRow = ({ data }: { data: CertificationData }) => {
  const {
    title,
    organization,
    issueDate,
    credentialUrl,
    skills,
    description,
    logoUrl,
  } = data;
  return (
    <div className="flex flex-col gap-2 md:p-4 p-1 my-4">
      <div className="flex items-center gap-4">
        {logoUrl && (
          <Suspense
            fallback={<Loader className="animate-spin text-gray-500" />}
          >
            <img
              src={logoUrl}
              alt={`${organization} logo`}
              className="w-12 h-12 rounded-full shadow-sm p-1"
            />
          </Suspense>
        )}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{organization}</p>
          <p className="text-sm text-gray-500">{issueDate}</p>
        </div>
      </div>
      {description && <p className="text-sm text-gray-700">{description}</p>}
      <div className="flex gap-2 mt-4 w-full justify-between items-center md:flex-nowrap flex-wrap">
        {skills && (
          <div className="flex flex-wrap gap-2 mt-2 w-max">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="flex justify-end items-center w-full">
        {credentialUrl && (
          <Button
            variant={'outline'}
            className="bg-transparent mt-2 w-max rounded-full text-gray-500 border-gray-300 hover:text-gray-600 hover:border-gray-600 transition-all ease-in-out hover:bg-transparent hover:shadow-none shadow-none"
            asChild
          >
            <Link to={credentialUrl} target="_blank" rel="noopener noreferrer">
              View Credential
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default CertificationRow;
