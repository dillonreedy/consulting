import { Box, Grid, Paper } from '@mui/material';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'black', height: '100%' }}>
      <NavBar />

      <Grid container justifyContent="center">
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Paper elevation={3}>
            <img
              src="https://raw.githubusercontent.com/dillonreedy/consulting/main/src/assets/profile.jpg"
              alt="Image Preview"
              style={{ width: '100%' }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* Your content for the right side */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
