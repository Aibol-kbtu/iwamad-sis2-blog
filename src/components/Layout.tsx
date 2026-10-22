import { Outlet } from 'react-router';
import { Header } from './HeaderSection';
import { Footer} from './FooterSection';

export const Layout = () => {
  return (
    <div className="app-container">
      <Header title="My Profile Page" />
      <Outlet />
      <Footer  year={2026} />
    </div>
  );
};