import { postFilters } from '@/app/constants';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PopoverContent } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { PostTagsTypes } from '@/types';
import { Popover, PopoverTrigger } from '@radix-ui/react-popover';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const PostFilter = ({
  onFilterToggle,
  filter,
}: {
  onFilterToggle: (filter: PostTagsTypes) => void;
  filter: PostTagsTypes;
}) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="flex items-center justify-center w-[95%] mx-auto my-3">
      <Separator className="flex-1" />
      <Popover open={isClicked} onOpenChange={setIsClicked}>
        <PopoverTrigger
          onClick={() => setIsClicked(!isClicked)}
          asChild
          className="p-0 bg-transparent hover:bg-transparent w-max h-full cursor-pointer"
        >
          <Button variant="link">
            Filter posts by
            {isClicked ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0">
          <Card className="w-full h-max p-0 border-0">
            <CardContent className="h-auto w-full p-0 py-2 flex flex-col items-start justify-center">
              {postFilters.map((postFilter) => (
                <Button
                  key={postFilter.filter}
                  onClick={() => {
                    onFilterToggle(postFilter.filter as PostTagsTypes);
                    setIsClicked(false);
                  }}
                  className="w-full flex items-center justify-start gap-2 py-3 px-5 flex-1 group rounded-none"
                  style={
                    postFilter.filter === filter
                      ? { borderLeft: '2px solid green', opacity: 1 }
                      : { border: 'none', opacity: 0.7 }
                  }
                  variant={'ghost'}
                  asChild
                >
                  <span className="text-xs md:text-sm font-semibold opacity-70 group-hover:opacity-100 w-full">
                    {postFilter.name}
                  </span>
                </Button>
              ))}
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default PostFilter;