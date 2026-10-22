import { useLikes } from '../context/LikesContext';

type LikeButtonProps = {
  postId: number;
};

export default function LikeButton({ postId }: LikeButtonProps) {
  const { likes, addLike } = useLikes();
  const count = likes[postId] ?? 0;

  return (
    <button
      onClick={() => addLike(postId)}
      className="like-button"
    >
      {count > 0 ? '❤️ Liked' : '🤍 Like'} ({count})
    </button>
  );
}