import { Card, CardContent, CardHeader } from '../ui/card';
import { Separator } from '../ui/separator';
import Heading from './heading';

const InfoCard = () => {
  return (
    <Card className="p-0 h-auto">
      <CardHeader>
        <Heading title="About me" />
      </CardHeader>
      <Separator className="mt-1" />
      <CardContent className="h-auto pb-5">
        <p className="text-sm text-muted-foreground">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod rerum
          exercitationem harum illum suscipit. Recusandae suscipit quo deleniti,
          praesentium atque explicabo cumque pariatur ad sunt porro laudantium
          minus ducimus aliquam veritatis, voluptas, ab eum quaerat nisi a animi
          qui omnis. Optio mollitia aliquam odio vero quae blanditiis vel in, ex
          non quas ipsa? Quaerat dolore natus ipsam pariatur explicabo debitis
          modi placeat eveniet error commodi in blanditiis earum voluptatem,
          quisquam quidem tenetur corporis sequi iure necessitatibus
          accusantium, ut enim. Ad, provident deleniti non sit fugiat iusto
          fugit eos velit quod rem animi est voluptates nihil corporis
          consequuntur dolore? Iure, optio vitae. Delectus, dicta consequuntur
          nesciunt esse excepturi ratione accusantium aut quasi ducimus autem
          dolore perspiciatis nostrum voluptatum adipisci fugiat necessitatibus
          est voluptas a magnam sed asperiores? Beatae similique ut repudiandae
          impedit nulla laborum autem voluptatem sunt doloribus iste et
          voluptates laudantium deleniti ad illo eligendi explicabo aperiam
          neque, labore temporibus!
        </p>
      </CardContent>
    </Card>
  );
};

export default InfoCard;
