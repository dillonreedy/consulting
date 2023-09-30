import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Box, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ width: '100%', backgroundColor: 'white' }}
      elevation={0}
    >
      <Toolbar>
        <Avatar
          src="https://raw.githubusercontent.com/dillonreedy/consulting/main/src/assets/logo.png"
          alt="DR"
          onClick={() => navigate('/')}
          sx={{
            width: 40,
            height: 40,
            border: (theme) => `2px solid ${theme.palette.primary.main}`,
          }}
        />
        <Box flexGrow={1} />
        <MenuItem
          sx={{
            textDecoration: 'underline',
            fontWeight: 550,
            color: '#000000',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
          onClick={() => navigate('/about')}
        >
          About
        </MenuItem>
        <MenuItem
          sx={{
            textDecoration: 'underline',
            fontWeight: 550,
            color: '#000000',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
          onClick={() => navigate('/services')}
        >
          Services
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
