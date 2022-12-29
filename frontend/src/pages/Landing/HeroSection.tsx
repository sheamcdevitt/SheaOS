import React, { useEffect, useState } from 'react';

import { Box, Link, Tooltip, Typography } from '@mui/material';

import Abstract from 'assets/abstract-placeholder.png';
import Avatar from 'assets/avatar.png';
import Macbook from 'assets/stock-macbook.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Hero: React.FC = () => {
  const emailHref = `mailto:enquiries@sheamcdevitt.com?subject=Let's%20build%20something%20together!&body=Hey%20Shéa!%20I'd%20love%20to%20work%20with%20you%20on%20my%20next%20project.%20I've%20attached%20some%20more%20information%20about%20my%20project%20below.%20I'll%20be%20in%20touch%20soon!`;
  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <Box>
        <Typography className='text-gradient' variant='h1' mb={2}>
          Hey, I'm Shéa
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
        <Typography variant='h2'>
          I'm currently building{' '}
          <Link
            className='hover-underline-animation'
            variant='h2'
            underline='none'
            href='https://omnitate.io/'
            target='_blank'
            rel='noreferrer'
            color={'#072d51'}
          >
            Omnitate&nbsp;
          </Link>
          in public
        </Typography>
        <Box mt={{ xs: 2, sm: 4 }}>
          <Typography variant='h3'>
            I build high quality web and mobile applications for businesses and
            personal brands. Fast.
          </Typography>
          <Typography variant='h3' mt={1}>
            Get in touch at{' '}
            <Link
              className='hover-underline-animation'
              variant='h3'
              underline='none'
              href={emailHref}
              target='_blank'
              rel='noreferrer'
              color={'#8e88fb '}
            >
              enquiries@sheamcdevitt.com&nbsp;
            </Link>
            or DM me on{' '}
            <Link
              className='hover-underline-animation'
              variant='h3'
              underline='none'
              href='https://twitter.com/_sheamc'
              target='_blank'
              rel='noreferrer'
              color={'#1DA1F2'}
            >
              Twitter&nbsp;
            </Link>
            if you want to work with me.
          </Typography>
        </Box>
        <Box mt={{ xs: 2, sm: 4 }}>
          <Typography variant='h5'>
            I'm currently available for work in January 2023.
          </Typography>
        </Box>
      </Box>
      <Box>
        <img
          src={Abstract}
          alt='abstract'
          style={{
            width: '80%',
            height: '80%',
            objectFit: 'cover',
            objectPosition: 'center',
            marginLeft: '20px',
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
