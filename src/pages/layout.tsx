import { Outlet, Link } from 'react-router-dom';

import { selectTitle } from '../lib/store/layoutSlice';
import { useAppSelector } from '../lib/store/hooks';

const Layout = () => {
  const title = useAppSelector(selectTitle);

  return (
    <>
      <header>
        <h1 id="nav-title">{title}</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div id="main">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
