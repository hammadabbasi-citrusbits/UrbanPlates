import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from 'antd';

const Footer = () => {
    const links = [
        { text: 'Contact Us', url: '#' },
        { text: 'Our Promise', url: '#' },
        { text: 'Careers', url: '#' },
        { text: 'Privacy Policy', url: '#' },
        { text: 'Gifts Cards', url: '#' },
        { text: 'Donations', url: '#' },
        { text: 'Locations', url: '#' },
        { text: 'Terms and Conditions', url: '#' },
        { text: 'High Protien', url: '#' },
        { text: 'Low Calorie', url: '#' },
        { text: 'Plant Based', url: '#' },
      ];

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        backgroundColor:"white",
        marginBottom:"0px"
      }}
    >
      <div
        className="left-top-text"
        style={{
          width:"18%",
          height: '100%',
          color: 'green',
        }}
      >
        <div >
        <b style={{fontSize:"40px", fontFamily:"Bentham", color:"#656D6D"}}>URBAN PLATES</b>
        </div>
      </div>
      <div
      style={{
        width: '50%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gap: '1px',
        backgroundColor: 'white',
      }}
    >
      {links.map((link, index) => (
        <a key={index} href={link.url} style={{ padding: '10px',color:"black"  }}>
          {link.text}
        </a>
      ))}
    </div>
      <div
        className="additional-links"
        style={{
           width:"25%",
            // display:"flex",
            //margin:"10px",
            alignItems:"center",
         justifyContent:"center",
         // verticalAlign:"middle",
          display:"grid",
          //padding: "3vh 0 0 0"
        }}
      >
        <div style={{width:"100%",display:"flex",justifyContent:"space-between"}}>
      <a href='https://www.instagram.com/' style={{color:"#656D6D"}}><InstagramIcon/></a>
       <a href='https://www.facebook.com/' style={{color:"#656D6D"}}><FacebookIcon/></a>
       <a href='https://www.twitter.com/' style={{color:"#656D6D"}}><TwitterIcon/></a>
       <a href='https://www.youtube.com/' style={{color:"#656D6D"}}><YouTubeIcon/></a>
       <a href='https://www.linkedin.com/' style={{color:"#656D6D"}}><LinkedInIcon/></a>
        </div>
        <div style={{width:"100%", color:"black"}}>
        <Typography>© Urban Plates. All Rights Reserved.</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
