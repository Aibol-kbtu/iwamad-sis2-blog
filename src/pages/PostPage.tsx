import { useParams, Link } from 'react-router';
import { posts } from '../data/post';
import LikeButton from '../components/LikeButton';

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <main>
        <p>Post not found</p>
        <Link to="/posts">Back to all posts</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.challenge}</p>
      <p>{post.deadline}</p>
      <LikeButton postId={post.id} />
    </main>
  );
}