import { Box } from '@mui/material';
import ImageHalfWidth from '../components/ImageHalfWidth';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'black', height: '100%' }}>
      <NavBar />
      <ImageHalfWidth imageUrl="https://raw.githubusercontent.com/dillonreedy/consulting/main/src/assets/profile.jpg" />
    </Box>
  );
};

export default Home;
