import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout';
import Home from './pages/home';
import Projects from './pages/projects';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Route>
  </Routes>
);

export default App;
