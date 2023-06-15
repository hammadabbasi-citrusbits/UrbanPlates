import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link,useNavigate } from 'react-router-dom';
const Navbar: React.FC = () => {
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  const navigate = useNavigate();
  return (
    <AppBar  sx={{width:"100%",  backgroundColor:"white"}}>
      <Toolbar>
      <div style={{display:"flex", justifyContent:"center"}}>
        <Typography fontFamily='Bentham' variant="h6" component="div" >
          {/* <Link href="/" sx={{color:"green"}}>
            Logo 
          </Link> */}
          <div style={{width:"25%"}}>
          <Link to="/main" onClick={() => navigate('/main')}><b>Urban Plates</b></Link>
          </div>
        </Typography>
        <Button href="/button-link" sx={{ color:"green", clear:"left", float:"left", borderRadius:"25px" }}>
          X
        </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
