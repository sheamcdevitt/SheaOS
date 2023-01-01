import React, { useEffect, useState } from 'react';

import { Box, Link, Tooltip, Typography } from '@mui/material';

import Abstract from 'assets/abstract-placeholder.png';
import Avatar from 'assets/avatar.png';
import Macbook from 'assets/stock-macbook.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { makeStyles } from '@mui/styles';
import { Info } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '80%',
    height: '80%',
    objectFit: 'cover',
    objectPosition: 'center',
    marginLeft: '20px',
  },
  info: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const Hero: React.FC = () => {
  const styles = useStyles();
  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <Box>
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
        <Typography className='blurred' variant='h2'>
          I'm currently building{' '}
          <Link
            // className='hover-underline-animation'
            variant='h2'
            underline='none'
            href='https://omnitate.io/'
            target='_blank'
            rel='noreferrer'
            color={'#072d51'}
          >
            <span>Omnitate</span>&nbsp;
          </Link>
          in public
        </Typography>
      </Box>
      {/* <Box>
        <img
          src={Abstract}
          alt='abstract'
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            marginLeft: '20px',
          }}
        />
      </Box> */}
    </Box>
  );
};

export default Hero;
