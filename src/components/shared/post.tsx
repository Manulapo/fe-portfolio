import { Ellipsis, Globe2, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import AvatarIcon from './Avatar-icon';
import PostFooter from './post-footer';
import Suggested from './suggested';
import { PostData } from '@/types';
import { cn, formatDate } from '@/lib/utils';

const Post = ({
  className,
  postData,
  hasSuggested = false,
}: {
  className?: string;
  postData?: PostData;
  hasSuggested?: boolean;
}) => {
  return (
    <Card className={cn('px-0 mb-2 pb-1 md:pb-0 relative', className)}>
      {hasSuggested && <Suggested />}
      <div className="flex items-center justify-end px-4 py-2 gap-2 absolute top-2 right-1">
        <Ellipsis className="rounded-full w-5 h-5" />
        <X className="rounded-full w-5 h-5" />
      </div>
      <CardHeader className="w-full pl-4">
        <div className="flex items-center gap-3">
          <AvatarIcon
            name={postData?.author.name}
            image={postData?.author.avatarUrl}
            size={50}
          />
          <div className="flex flex-col justify-center">
            <h2 className="md:text-lg text-sm font-semibold py-0 md:h-6">
              {postData?.author.name}
            </h2>
            <p className="text-muted-foreground text-sm">
              {postData?.author?.title}
            </p>
            <p className="text-xs text-gray-600 pt-1 font-semibold flex items-center gap-1">
              <p>{formatDate(postData!.createdAt.toString()).fullDate}</p>
              <Globe2 size={13} />
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <CardDescription className="text-gray-900 px-4 mb-5">
          {postData?.description}
        </CardDescription>
        {postData?.imageUrl && (
          <img
            src={postData?.imageUrl}
            alt={postData?.imageAlt}
            className="w-full"
          />
        )}
      </CardContent>
      <PostFooter
        likes={postData?.likes}
        comments={postData?.comments}
        shares={postData?.shares}
      />
    </Card>
  );
};

export default Post;
