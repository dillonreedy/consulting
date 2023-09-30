import { Box } from '@mui/material';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'black', height: '100vh' }}>
      <NavBar />
      <h1>Home Page</h1>
    </Box>
  );
};

export default Home;
