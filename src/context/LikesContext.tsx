import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

type LikesContextType = {
  likes: Record<number, number>;
  addLike: (postId: number) => void;
};

const LikesContext = createContext<LikesContextType | undefined>(
  undefined
);

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<Record<number, number>>({});

  const addLike = (postId: number) => {
    setLikes((previousLikes) => ({
      ...previousLikes,
      [postId]: (previousLikes[postId] ?? 0) + 1,
    }));
  };

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  );
}

export function useLikes() {
  const context = useContext(LikesContext);

  if (!context) {
    throw new Error('useLikes must be used inside LikesProvider');
  }

  return context;
}