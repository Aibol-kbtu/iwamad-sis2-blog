import { Link } from 'react-router';
import  { type Post } from '../data/post';
import LikeButton from './LikeButton';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <li className="post-card" id={`post-${post.id}`}>
      <h2>
        <Link to={`/posts/${post.id}`}>
          {post.name}
        </Link>
      </h2>

      <p>{post.challenge}</p>
      <p>Deadline: {post.deadline}</p>

      <LikeButton postId={post.id} />
    </li>
  );
}