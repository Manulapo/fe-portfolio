import AddPost from '@/components/shared/add-post';
import Post from '@/components/shared/post';
import { posts } from '../constants';
import PostFilter from '@/components/shared/post-filter';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const Homepage = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <AddPost />
      {!isMobile && <PostFilter />}
      <div className={cn(isMobile ? 'mt-7' : '')}>
        {posts.map((post) => (
          <Post
            postData={post}
            key={post.createdAt}
            hasSuggested={Math.floor(Math.random() * 100) % 2 === 0}
          />
        ))}
      </div>
    </>
  );
};

export default Homepage;
