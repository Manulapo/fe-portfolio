import { cn, formatDate } from '@/lib/utils';
import { PostData } from '@/types';
import {
  Bug,
  Download,
  Ellipsis,
  Globe2,
  LinkIcon,
  Loader,
  Presentation,
  X,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader } from '../ui/card';
import AvatarIcon from './Avatar-icon';
import PostFooter from './post-footer';
import Suggested from './suggested';
import { memo, Suspense, useState } from 'react';
import CertificationBadge from './certification-badge';
import MarkDownLayout from './MarkDown';

export const EmptyPost = () => {
  return (
    <Card className={cn('px-0 mb-2 pb-1 md:pb-0 relative')}>
      <CardContent className="px-0">
        <CardDescription className="px-6 mb-5 flex items-center gap-5">
          <Bug />
          <div>
            <p className="text-gray-900 dark:text-gray-300 font-semibold">No Posts Found</p>
            <p className="text-muted-foreground">Any typos?</p>
          </div>
        </CardDescription>
      </CardContent>
    </Card>
  );
};

const Post = memo(
  ({
    className,
    postData,
    hasSuggested = false,
  }: {
    className?: string;
    postData?: PostData;
    hasSuggested?: boolean;
  }) => {
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);
    const isCertification = postData?.type?.includes('certifications');
    const maxWord = 40;
    const descWords = postData?.description?.split(' ').length ?? 0;
    const isTruncatedDescription =
      descWords > maxWord
        ? postData?.description?.split(' ').slice(0, maxWord).join(' ')
        : postData?.description;

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
              link='/profile'
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
          <CardDescription className="text-gray-900 dark:text-white px-4 mb-5 space-y-3 relative">
            {postData?.description && (
              <div
                className="mb-8"
                onClick={() => {descWords > maxWord && setIsReadMoreOpen((prev) => !prev)}}
              >
                <MarkDownLayout>
                  {descWords > maxWord
                    ? isReadMoreOpen
                      ? postData.description + ' \n\n **Read less**'
                      : isTruncatedDescription + '... **Read more**'
                    : postData.description}
                </MarkDownLayout>
              </div>
            )}
          </CardDescription>
          {isCertification && postData && (
            <div className="p-4">
              <CertificationBadge data={postData.description} />
            </div>
          )}
          {!isCertification &&
            postData?.imageUrl &&
            (postData?.hasPdf ? (
              <div className="w-full relative h-max">
                <div className="absolute bottom-0 right-5 z-1 flex items-center gap-2 ml-2 mb-4">
                  <Link
                    to={postData?.ctaUrl ?? '/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 ease-in-out transition-all rounded-full font-semibold bg-black text-white text-nowrap px-4 py-2 flex items-center w-max gap-2"
                  >
                    <Presentation size={18} /> View Deck
                  </Link>
                  <a
                    href={postData?.downloadUrl ?? postData?.ctaUrl ?? '/'}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 ease-in-out transition-all rounded-full font-semibold bg-blue-800 text-white text-nowrap px-4 py-2 flex items-center gap-2"
                  >
                    <Download size={18} /> Download
                  </a>
                </div>
                <Suspense
                  fallback={
                    <div className="w-full h-80 bg-muted flex items-center justify-center">
                      <Loader className="animate-spin" />
                    </div>
                  }
                >
                  <img
                    src={postData?.imageUrl}
                    alt={postData?.imageAlt}
                    className="w-full"
                    height={1000}
                  />
                </Suspense>
              </div>
            ) : postData?.hasCta ? (
              <div className="w-full relative h-max">
                <div className="absolute bottom-0 right-5 z-1 flex items-center gap-2 ml-2 mb-4">
                  <Link
                    to={postData?.ctaUrl ?? '/'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-70 hover:opacity-100 ease-in-out transition-all rounded-full font-semibold bg-blue-800 text-white text-nowrap px-4 py-2 flex items-center gap-2"
                  >
                    <LinkIcon size={18} /> Visit Website
                  </Link>
                </div>
                <img
                  src={postData?.imageUrl}
                  alt={postData?.imageAlt}
                  className="w-full"
                />
              </div>
            ) : (
              <img
                src={postData?.imageUrl}
                alt={postData?.imageAlt}
                className="w-full"
              />
            ))}
        </CardContent>
        <PostFooter
          likes={postData?.likes}
          comments={postData?.comments}
          shares={postData?.shares}
        />
      </Card>
    );
  },
);

export default Post;
