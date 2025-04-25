import AddPost from '@/components/shared/add-post';
import LoadingSection from '@/components/shared/loading-section';
import Post from '@/components/shared/post';
import PostFilter from '@/components/shared/post-filter';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { PostTagsTypes } from '@/types';
import { useMemo, useState } from 'react';
import { posts } from '../constants/posts';

const Homepage = () => {
  const isMobile = useIsMobile();
  const [filter, setFilter] = useState<PostTagsTypes>('all');
  const sortedPost = posts.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });

  const filteredPosts = useMemo(() => {
    if (filter === 'all') return sortedPost;
    return sortedPost.filter((post) => post?.tags?.includes(filter));
  }, [filter, sortedPost]);

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
        <LoadingSection delay={300} key={filteredPosts.length}>
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
