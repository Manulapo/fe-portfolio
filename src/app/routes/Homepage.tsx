import AddPost from '@/components/shared/add-post';
import Post from '@/components/shared/post';
import { posts } from '../constants';

const Homepage = () => {
  return (
    <>
      <AddPost />
      {posts.map((post, index) => (
        <Post
          postData={post}
          key={post.createdAt}
          hasSuggested={Math.floor(Math.random() * 100) % 2 === 0}
        />
      ))}
    </>
  );
};

export default Homepage;
