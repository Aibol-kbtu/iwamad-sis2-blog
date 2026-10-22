import { NavLink, useNavigate } from "react-router";
import { useLikes } from "../context/LikesContext";
import { useAuth } from "../context/AuthContext";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const { likes } = useLikes();
  const { isSignedIn, signIn, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuth = () => {
    if (isSignedIn) {
      signOut();
      navigate("/signin");
    } else {
      signIn();
      navigate("/dashboard");
    }
  };

  return (
    <header className="header">
      <h1>{title}</h1>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <span className="header-likes">
        ♥ {Object.values(likes).reduce((a, b) => a + b, 0)}
      </span>

      <button onClick={handleAuth}>
        {isSignedIn ? "Sign out" : "Sign in"}
      </button>
    </header>
  );
};
