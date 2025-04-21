import { Ellipsis, Globe2, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import AvatarIcon from './Avatar';
import PostFooter from './post-footer';
import Suggested from './suggested';

const Post = ({
  className,
  hasSuggested = false,
  ...props
}: {
  className?: string;
  hasSuggested?: boolean;
  [key: string]: any;
}) => {
  return (
    <Card className="px-0 pb-1 relative">
      {hasSuggested && <Suggested />}
      <div className="flex items-center justify-end px-4 py-2 gap-2 absolute top-2 right-1">
        <Ellipsis className="rounded-full w-5 h-5" />
        <X className="rounded-full w-5 h-5" />
      </div>
      <CardHeader>
        <div className="flex items-start gap-3">
          <AvatarIcon size={14} />
          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-semibold py-0 h-6">Post Title</h2>
            <p className="text-muted-foreground text-xs">
              Post description goes here.
            </p>
            <p className="text-xs text-gray-600 font-semibold flex items-center gap-1">
              <p>2 hours ago </p>
              <Globe2 size={15} />
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <CardDescription className="text-gray-900 px-4 mb-5">
          This is a sample post content. It can be a long text that describes
          the post in detail. You can add more information here to make it more
          informative and engaging for the readers.
        </CardDescription>
        <img
          src="https://images.pexels.com/photos/25954946/pexels-photo-25954946/free-photo-of-balconies-of-modern-building-with-apartments.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </CardContent>
      <PostFooter />
    </Card>
  );
};

export default Post;
