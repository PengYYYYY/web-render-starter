import { Outlet } from 'react-router-dom';
import { Header } from './Header';

const Layout = () => (
  <>
    <Header />
    <div style={{ padding: 20, border: '1px solid black', marginTop: 24 }}>
      <Outlet />
    </div>
  </>
);

export default Layout;
