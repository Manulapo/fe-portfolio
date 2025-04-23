import AddPost from '@/components/shared/add-post';
import Post from '@/components/shared/post';
import { posts } from '../constants';
import PostFilter from '@/components/shared/post-filter';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { useMemo, useState } from 'react';
import { PostTagsTypes } from '@/types';
import LoadingSection from '@/components/shared/loading-section';

const Homepage = () => {
  const isMobile = useIsMobile();
  const [filter, setFilter] = useState<PostTagsTypes>('all');
  const filteredPosts = useMemo(() => {
    if (filter === 'all') return posts;
    return posts.filter((post) => post.tags?.includes(filter));
  }, [filter]);

  return (
    <>
      <AddPost
        onAddPostFilterToggle={(filter) => {
          setFilter(filter as PostTagsTypes);
        }}
      />
      {!isMobile && (
        <PostFilter
          filter={filter}
          onFilterToggle={(filter) => {
            setFilter(filter as PostTagsTypes);
          }}
        />
      )}
      <div className={cn(isMobile ? 'mt-7' : '')}>
        <LoadingSection delay={500} key={filteredPosts.length}>
          {filteredPosts.map((post, idx) => (
            <Post
              postData={post}
              key={idx}
              hasSuggested={Math.floor(Math.random() * 100) % 2 === 0}
            />
          ))}
        </LoadingSection>
      </div>
    </>
  );
};

export default Homepage;
