import { Route, Routes } from 'react-router-dom';

//import Layout from './pages/layout';
import Home from './pages/home';
import Projects from './pages/projects';
import Dashboard from './pages/titleBar';

const App = () => (
  <Routes>
    <Route path="/" element={<Dashboard />}>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Route>
  </Routes>
);

export default App;
