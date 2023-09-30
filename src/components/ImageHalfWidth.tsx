import React from 'react';
import { Grid, Paper } from '@mui/material';

const ImageLeftOfCenter = ({ imageUrl }) => {
  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={12}
        sm={6}
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <Paper elevation={3}>
          <img src={imageUrl} alt="Image Preview" style={{ width: '100%' }} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        {/* Your content for the right side */}
      </Grid>
    </Grid>
  );
};

export default ImageLeftOfCenter;
