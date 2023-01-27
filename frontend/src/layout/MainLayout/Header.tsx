import React from 'react';
import { AppBar, Box, Link, Typography } from '@mui/material';
import HamburgerMenu from './HamburgerMenu';
import { routes } from './routes';

const Header: React.FC = () => {
  return (
    <AppBar
      position='fixed'
      sx={{
        backdropFilter: 'blur(5px)',
        backgroundColor: '#ffffff99',
        boxShadow: 'none',
        position: 'fixed',
      }}
    >
      <Box
        sx={{
          display: { xs: 'flex', sm: 'none' },
          justifyContent: 'flex-end',
          gap: '3rem',
          margin: '12px 16px',
        }}
      >
        <HamburgerMenu />
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'flex-start',
          gap: '3rem',
          margin: '32px auto',
        }}
      >
        {routes.map((route, index) => (
          <Link
            key={index}
            className='link'
            href={`/${route}`}
            underline='none'
            color='text.primary'
          >
            <Typography variant='h3'>{route}</Typography>
          </Link>
        ))}
      </Box>
    </AppBar>
  );
};

export default Header;
