import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import Avatar from 'assets/avatar.png';

const Hero: React.FC = () => {
  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection={{ xs: 'column-reverse', sm: 'row' }}
      mb={8}
    >
      <Box
        width={{
          xs: '100%',
          md: '75%',
        }}
      >
        <Typography className='text-gradient' variant='h1' mb={2}>
          Hey, I'm Shéa{' '}
        </Typography>
        <Typography variant='h2'>
          I'm a full stack Software Engineer at{' '}
          <Link
            className='hover-underline-animation'
            variant='h2'
            underline='none'
            href='https://communities.projectark.co.uk/'
            target='_blank'
            rel='noreferrer'
            color={'#FB4824'}
          >
            Project Ark
          </Link>
        </Typography>
        <Typography mt={2} variant='h3'>
          Welcome to my personal site.
        </Typography>
        <Typography variant='h3'>
          Here you can find out more about me, my projects and my thoughts!
        </Typography>
      </Box>
      <Box display='flex' justifyContent='center' mb={{ xs: 4 }}>
        <img
          src={Avatar}
          alt='abstract'
          style={{
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: '50%',
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
