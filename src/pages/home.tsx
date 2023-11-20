import '../App.css';
import { selectTitle } from '../lib/store/layoutSlice';
import { useAppSelector } from '../lib/store/hooks';

const Home = () => {
  const title = useAppSelector(selectTitle);

  return (
    <>
      <img src="/logo.png" alt="Caradoc Services" />
      <h1>{title}</h1>
    </>
  );
};

export default Home;
