import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MainNavbar: React.FC = () => {
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  return (
    <AppBar style={{backgroundColor:"white"}} >
      <Toolbar style={{display:"flex", justifyContent:"space-between"}}>
        <Button component={Link} to="/main" style={{fontVariant:"h6", color:"green", fontFamily:'Bertham, sans-serif'}} >
          URBAN PLATES
        </Button>
        <Button component={Link} to="/login"  style={{ color:"green", fontFamily:'Bertham, sans-serif' }} >
        <Avatar alt="Sign In" src="/path/to/avatar.png" />Sign In
        </Button>
        <Button href="/order" style={{ color:"green", fontFamily:'Bertham, sans-serif' }} >
          Order
        </Button>
        <Button href="/catering"style={{ color:"green", fontFamily:'Bertham, sans-serif' }} >
          Catering
        </Button>
        <Button href="/nutrition" style={{ color:"green", fontFamily:'Bertham, sans-serif' }} >
          Nutrition
        </Button>
        <Button href="/organics" style={{ color:"green", fontFamily:'Bertham, sans-serif' }} >
          Organics
        </Button>
        <Button href="/careers"style={{ color:"green", fontFamily:'Bertham, sans-serif' }} >
          Careers
        </Button>
        <Button href="/platepass" style={{ color:"green", fontFamily:'Bertham, sans-serif' }} >
          Plate Pass
        </Button>
        <Button href="/locations" style={{ color:"green", fontFamily:'Bertham, sans-serif' }} >
          Find a Location
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainNavbar;
