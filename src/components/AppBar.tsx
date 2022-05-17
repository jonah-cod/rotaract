import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import {Box,
        Toolbar,
        MenuItem, 
        Menu,
        Avatar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { NavLink } from 'react-router-dom'


export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar sx={{display: 'flex', justifyContent: 'space-between', bgcolor: 'white'}}>
          <Avatar alt="Remy Sharp" src="https://clubrunner.blob.core.windows.net/00000050118/Images/PNG-for-Word-documents--presentations--and-web-use..png" sx={{width: 'fit-content', height: 48}}/>
          <Box sx={{display: {sm:'flex', xs:'none'}, gap:{md:4, sm:2}, }} className='menubar'>
            <NavLink to='#'>HOME</NavLink>
            <NavLink to='#'>PROJECTS</NavLink>
            <NavLink to='#'>EVENTS</NavLink>
            <NavLink to='#'>GALLERY</NavLink>
            <NavLink to='#'>CONTACT</NavLink>
            <NavLink to='#'>ABOUT US</NavLink>
          </Box>
          <Box sx={{display: {xs:'block', sm:'none', color:"#a18b60"}}}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}>
                <WidgetsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
