// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
  palette: {
    primary: {
      main: '#1F7A8C',
    },
    secondary: {
      main: '#F4B860',
    },
  },
});

export default theme;
