import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/system';
import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem, useMediaQuery, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const theme = createTheme();

const AppBarWrapper = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const ToolbarWrapper = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const MenuItemWrapper = styled(MenuItem)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));

const NavBarprac: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBarWrapper position="static">
        <ToolbarWrapper>
          <Typography variant="h6" component="div">
            Logo
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItemWrapper onClick={handleMenuClose}>
                  <Button color="inherit">Home</Button>
                </MenuItemWrapper>
                <MenuItemWrapper onClick={handleMenuClose}>
                  <Button color="inherit">About</Button>
                </MenuItemWrapper>
                <MenuItemWrapper onClick={handleMenuClose}>
                  <Button color="inherit">Contact</Button>
                </MenuItemWrapper>
              </Menu>
            </>
          ) : (
            <div>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact</Button>
            </div>
          )}
        </ToolbarWrapper>
      </AppBarWrapper>
    </ThemeProvider>
  );
};

export default NavBarprac;
