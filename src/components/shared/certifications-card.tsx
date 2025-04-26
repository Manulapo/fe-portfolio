import { certifications } from '@/app/constants/cert-skills';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';
import CertificationRow from './certification-row';

const CertificationsCard = () => {
  return (
    <Card className="p-0 h-auto pb-4">
      <CardHeader>
        <Heading title="Certifications" />
        <Separator className="mt-0" />
      </CardHeader>
      <CardContent className="m-0">
        {certifications.map((certification, index) => (
          <div key={index}>
            <CertificationRow data={certification} />
            {index < certifications.length - 1 && (
              <Separator className="my-0 bg-gray-300" />
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default CertificationsCard;
