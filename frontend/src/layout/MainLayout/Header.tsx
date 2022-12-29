import React from 'react';

import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';

import Logo from 'assets/logo.png';

const Header: React.FC = () => {
  return (
    <AppBar
      position='fixed'
      sx={{
        backdropFilter: 'blur(5px)',
        backgroundColor: '#ffffff99',
        boxShadow: 'none',
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          justifyContent: 'flex-start',
          gap: '3rem',
          margin: '32px auto',
        }}
      >
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            justifyContent: 'flex-start',
            gap: '3rem',
          }}
        >
          <Link href='/' underline='none' color='text.primary'>
            <Typography variant='h3'>Home</Typography>
          </Link>
          <Link href='/about' underline='none' color='text.primary'>
            <Typography variant='h3'>About</Typography>
          </Link>
          <Link href='#projects' underline='none' color='text.primary'>
            <Typography variant='h3'>Projects</Typography>
          </Link>

          <Link href='#writing' underline='none' color='text.primary'>
            <Typography variant='h3'>Writing</Typography>
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
