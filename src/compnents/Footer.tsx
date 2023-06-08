import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Typography } from 'antd';

const Footer = () => {
    const links = [
        { text: 'Link 1', url: '#' },
        { text: 'Link 2', url: '#' },
        { text: 'Link 3', url: '#' },
        { text: 'Link 4', url: '#' },
        { text: 'Link 5', url: '#' },
        { text: 'Link 6', url: '#' },
        { text: 'Link 7', url: '#' },
        { text: 'Link 8', url: '#' },
        { text: 'Link 9', url: '#' },
        { text: 'Link 10', url: '#' },
        { text: 'Link 11', url: '#' },
      ];

  return (
    <div
      style={{
        width: '100%',
        height: '50vh',
        display: 'flex',
        backgroundColor:"grey",
        marginBottom:"0px"
      }}
    >
      <div
        className="left-top-text"
        style={{
            width:"320px",
          height: '100%',
          color: 'green',
        }}
      >
        <div style={{width:"25%"}}>
        Urban 
        Plates
        </div>
      </div>
      <div
      style={{
        width: '220%',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: 'repeat(4, 1fr)',
        gap: '1px',
        backgroundColor: 'grey',
      }}
    >
      {links.map((link, index) => (
        <a key={index} href={link.url} style={{ border: '1px solid black', padding: '10px' }}>
          {link.text}
        </a>
      ))}
    </div>
      <div
        className="additional-links"
        style={{
            width:"790px",
            display:"flex",
            alignItems:"center",
          justifyContent:"center",
          height: '100%',
        }}
      >
      <a href='https://www.instagram.com/'><InstagramIcon/></a>
       <a href='https://www.facebook.com/'><FacebookIcon/></a>
       <a href='https://www.twitter.com/'><TwitterIcon/></a>
       <a href='https://www.youtube.com/'><YouTubeIcon/></a>
       <a href='https://www.linkedin.com/'><LinkedInIcon/></a>
        <Typography>© Urban Plates. All Rights Reserved.</Typography>
      </div>
    </div>
  );
};

export default Footer;
