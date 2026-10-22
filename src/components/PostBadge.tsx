import { Link } from 'react-router';
import type { Post } from '../data/post';

type PostBadgeProps = {
  post: Post;
};

export const PostBadge = ({ post }: PostBadgeProps) => {
  return (
    <Link className="post-badge" to={`/posts/${post.id}`}>
      {post.name}
    </Link>
  );
};