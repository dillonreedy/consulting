import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Box, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const NavBar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ width: '100%', backgroundColor: 'white' }}>
      <Toolbar>
        <Avatar src="../../assets/logo.png" alt="DR" />
        <Box flexGrow={1} />
        <MenuItem
          sx={{
            textDecoration: 'underline',
            color: '#000000',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
          onClick={() => navigate('/about')}
        >
          About
        </MenuItem>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem
            sx={{ textDecoration: 'underline', color: '#000000' }}
            onClick={() => navigate('/about')}
          >
            About
          </MenuItem>
          <MenuItem
            sx={{ textDecoration: 'underline', color: '#000000' }}
            onClick={() => navigate('/services')}
          >
            Services
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
