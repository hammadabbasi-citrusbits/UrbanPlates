import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button, Drawer, List, ListItem, ListItemText, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const ResponsiveToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems:"center",
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
   
  },
}));

const ResponsiveButtons = styled('div')(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const MobileButtons = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },
}));

const MainNavbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  return (
    <AppBar style={{ backgroundColor: 'white'}}>
      <ResponsiveToolbar>
        <Button
          component={Link}
          to="/main"
          style={{
            fontVariant: 'h6',
            color: 'green',
            fontFamily: 'Bertham, sans-serif',
            marginBottom: '1rem', 
          }}
        >
          URBAN PLATES
        </Button>
        <Button
          component={Link}
          to="/login"
          style={{
            color: 'green',
            fontFamily: 'Bertham, sans-serif',
            marginBottom: '1rem', 
          }}
        >
          <Avatar alt="Sign In" src="/path/to/avatar.png" />
          Sign In
        </Button>
        <ResponsiveButtons>
          <Button href="/order" style={{ color: 'green', fontFamily: 'Bertham, sans-serif' }}>
            Order
          </Button>
          <Button href="/catering" style={{ color: 'green', fontFamily: 'Bertham, sans-serif' }}>
            Catering
          </Button>
          <Button href="/nutrition" style={{ color: 'green', fontFamily: 'Bertham, sans-serif' }}>
            Nutrition
          </Button>
          <Button href="/organics" style={{ color: 'green', fontFamily: 'Bertham, sans-serif' }}>
            Organics
          </Button>
          <Button href="/careers" style={{ color: 'green', fontFamily: 'Bertham, sans-serif' }}>
            Careers
          </Button>
          <Button href="/platepass" style={{ color: 'green', fontFamily: 'Bertham, sans-serif' }}>
            Plate Pass
          </Button>
          <Button href="/locations" style={{ color: 'green', fontFamily: 'Bertham, sans-serif' }}>
            Find a Location
          </Button>
        </ResponsiveButtons>
        <MobileButtons>
          <Button onClick={toggleDrawer(true)} style={{ color: 'green', fontFamily: 'Bertham, sans-serif' }}>
            Menu
          </Button>
        </MobileButtons>
      </ResponsiveToolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button component={Link} to="/order" onClick={toggleDrawer(false)}>
            <ListItemText primary="Order" />
          </ListItem>
          <ListItem button component={Link} to="/catering" onClick={toggleDrawer(false)}>
            <ListItemText primary="Catering" />
          </ListItem>
          <ListItem button component={Link} to="/nutrition" onClick={toggleDrawer(false)}>
            <ListItemText primary="Nutrition" />
          </ListItem>
          <ListItem button component={Link} to="/organics" onClick={toggleDrawer(false)}>
            <ListItemText primary="Organics" />
          </ListItem>
          <ListItem button component={Link} to="/careers" onClick={toggleDrawer(false)}>
            <ListItemText primary="Careers" />
          </ListItem>
          <ListItem button component={Link} to="/platepass" onClick={toggleDrawer(false)}>
            <ListItemText primary="Plate Pass" />
          </ListItem>
          <ListItem button component={Link} to="/locations" onClick={toggleDrawer(false)}>
            <ListItemText primary="Find a Location" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default MainNavbar;
