import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ProfileCard = () => {
  return (
    <Card className="p-0 h-auto">
      <CardHeader className="p-0 pb-2 rounded-tl-sm rounded-tr-sm bg-amber-500 h-25 relative">
        <div className="absolute left-3 bottom-[-35px] border-2 border-white rounded-full bg-white ">
          <Avatar className='w-20 h-20'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </CardHeader>
      <CardContent className="h-150">
        <CardTitle className="font-semibold pt-8 flex flex-col gap-1">
          <h1 className='text-xl'>Manuel La Porta</h1>
          <p className="text-muted-foreground font-normal">Frontend Developer & UX Designer</p>
          <p className="text-muted-foreground text-xs font-medium">Copenaghen, Regione Capitale della Danimarca</p>
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
