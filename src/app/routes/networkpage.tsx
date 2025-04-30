import Heading from '@/components/shared/heading';
import { Card } from '@/components/ui/card';
import { inspirations, testimonials } from '../constants/network';
import TestimonialRow from '@/components/testimonial-row';
import { Separator } from '@/components/ui/separator';
import InspirationsRow from '@/components/shared/inspirations-row';

const NetworkPage = () => {
  return (
    <>
      <Card className="w-full h-full flex flex-col px-6">
        <Heading title="Talking about me" className='pt-2'/>
        <Separator />
        {testimonials.map((testimonial, index) => (
          <>
            <TestimonialRow data={testimonial} key={index} />
            {index < testimonials.length - 1 && <Separator className="my-4" />}
          </>
        ))}
      </Card>
      <Card className="w-full h-full flex flex-col px-6">
        <Heading title="Who Inspires Me" className='pt-2'/>
        <Separator />
        {inspirations.map((inspiration, index) => (
          <>
            <InspirationsRow data={inspiration} key={index} />
            {index < inspirations.length - 1 && <Separator className="my-4" />}
          </>
        ))}
      </Card>
    </>
  );
};

export default NetworkPage;
