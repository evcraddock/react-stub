import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <h1 id="nav-title">React Stub</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
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
