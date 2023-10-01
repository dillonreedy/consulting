import { Box, Grid, Typography } from '@mui/material';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  const text = 'EXPERT.\nINNOVATOR.\nCOLLABORATOR.\nDEVELOPER.';
  return (
    <Box sx={{ backgroundColor: 'black', height: '100%' }}>
      <NavBar />
      <Grid container>
        <Grid item md={6} lg={4}>
          <img
            src="https://raw.githubusercontent.com/dillonreedy/consulting/main/src/assets/profile.jpg"
            alt="Dillon Reedy"
            style={{ maxHeight: '800px' }}
          />
        </Grid>
        <Grid item sm={6} md={6} lg={8}>
          <Typography sx={{ color: 'white', whiteSpace: 'pre-line' }}>
            {text}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
