import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';

const CertificationsCard = () => {
  return (
    <Card className="p-0 h-auto pb-4">
      <CardHeader>
        <Heading title="Certifications" />
        <Separator className="mt-0" />
      </CardHeader>
      <CardContent className="m-0"></CardContent>
    </Card>
  );
};

export default CertificationsCard;
