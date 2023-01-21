import React from 'react';
import { AppBar, Box, Link, Tooltip, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

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
          <Link className='link' href='/' underline='none' color='text.primary'>
            <Typography variant='h3'>Home</Typography>
          </Link>
          <Link
            className='link'
            href='/about'
            underline='none'
            color='text.primary'
          >
            <Typography variant='h3'>About</Typography>
          </Link>
          <Tooltip title='Coming soon!' placement='bottom'>
            <Typography
              variant='h3'
              color='lightgrey'
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              Projects
            </Typography>
          </Tooltip>
          <Tooltip title='Coming soon!' placement='bottom'>
            <Typography
              variant='h3'
              color='lightgrey'
              sx={{
                '&:hover': {
                  cursor: 'pointer',
                },
              }}
            >
              Writing
            </Typography>
          </Tooltip>
          <Link
            className='link'
            href='/bookshelf'
            underline='none'
            color='text.primary'
          >
            <Typography variant='h3'>Bookshelf</Typography>
          </Link>
          <Link
            className='link'
            href='/roadmap'
            underline='none'
            color='text.primary'
          >
            <Typography variant='h3'>Roadmap</Typography>
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
