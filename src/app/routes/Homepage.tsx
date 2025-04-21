import AddPost from '@/components/shared/add-post';
import Post from '@/components/shared/post';

const Homepage = () => {
  return (
    <>
      <AddPost />
      <Post />
      <Post hasSuggested={true} />
      <Post />
    </>
  );
};

export default Homepage;
