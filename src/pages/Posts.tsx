import { posts } from '../data/post';
import PostCard from '../components/PostCard';

export default function Posts() {
  return (
    <main className="page-content">
      <h1>Posts</h1>
      <p>Read our latest articles and stories.</p>

      <ul className="post-list">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </main>
  );
}