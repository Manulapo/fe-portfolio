import AddPost from '@/components/shared/add-post';
import LoadingSection from '@/components/shared/loading-section';
import Post from '@/components/shared/post';
import PostFilter from '@/components/shared/post-filter';
import { useIsMobile } from '@/hooks/use-mobile';
import { cleanStringify, cn } from '@/lib/utils';
import { PostTagsTypes } from '@/types';
import { useCallback, useMemo, useState } from 'react';
import { posts } from '../constants/posts';
import { useSearch } from '@/hooks/use-search';

const Homepage = () => {
  const isMobile = useIsMobile();
  const [filter, setFilter] = useState<PostTagsTypes>('all');
  const { searchTerm, setSearchTerm } = useSearch();

  // Sorted posts remain static assuming posts are constant
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return dateB - dateA;
    });
  }, []);

  // Precompute cleaned text for each post to avoid repeatedly stringifying/cleaning on every filter operation.
  const allPosts = useMemo(() => {
    return sortedPosts.map((post) => ({
      post,
      stringifiedPost: cleanStringify(JSON.stringify(post).toLowerCase()),
    }));
  }, [sortedPosts]);

  const navbarSearch = () => {
    const searchWords = searchTerm.toLowerCase().split(' ');
    return allPosts
      .filter(({ stringifiedPost }) =>
        searchWords.every((word) =>
          stringifiedPost.toLowerCase().includes(word),
        ),
      )
      .map(({ post }) => post);
  };

  const filteredPosts = useMemo(() => {
    if (searchTerm) {
      return navbarSearch();
    } else if (filter === 'all') {
      return sortedPosts;
    }
    // Filter by tag
    return sortedPosts.filter((post) => post?.type?.includes(filter));
  }, [filter, allPosts, searchTerm, sortedPosts]);

  const suggestedFlags = useMemo(
    () => filteredPosts.map(() => Math.random() < 0.5),
    [],
  );

  return (
    <>
      <AddPost
        onAddPostFilterToggle={(filter) => {
          setSearchTerm('');
          setFilter(filter as PostTagsTypes);
        }}
      />
      {!isMobile && (
        <PostFilter
          filter={filter}
          onFilterToggle={(filter) => {
            setSearchTerm('');
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
              hasSuggested={suggestedFlags[idx]}
            />
          ))}
        </LoadingSection>
      </div>
    </>
  );
};

export default Homepage;
