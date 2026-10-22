import { Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import HomePage from "./pages/Home";
import Posts from "./pages/Posts";
import PostPage from "./pages/PostPage";
import { ContactPage } from "./pages/Contact";
import { SignIn } from "./pages/SignIn";
import { NotFoundPage } from "./pages/NotFound";

const Dashboard = () => <h2>Protected Dashboard</h2>;

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}