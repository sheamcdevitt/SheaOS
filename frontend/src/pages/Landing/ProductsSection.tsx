import React, { useEffect, useState } from 'react';

import { Box, Grid, Link, Tooltip, Typography } from '@mui/material';

import Abstract from 'assets/abstract-placeholder.png';
import Avatar from 'assets/avatar.png';
import Macbook from 'assets/stock-macbook.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Products: React.FC = () => {
  const emailHref = `mailto:enquiries@sheamcdevitt.com?subject=Let's%20build%20something%20together!&body=Hey%20Shéa!%20I'd%20love%20to%20work%20with%20you%20on%20my%20next%20project.%20I've%20attached%20some%20more%20information%20about%20my%20project%20below.%20I'll%20be%20in%20touch%20soon!`;

  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection={{ xs: 'column', sm: 'column' }}
    >
      <Box>
        <Typography className='text-gradient' variant='h1' mb={2}>
          Products
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
              personal@sheamcdevitt.com&nbsp;
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
      {/*
      Box with a grid displaying 3 different products with prices

       */}
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        mt={{ xs: 4, sm: 0 }}
        mb={{ xs: 4, sm: 0 }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              p={2}
              borderRadius={4}
              boxShadow='0px 0px 8px rgba(0, 0, 0, 0.25)'
            >
              <Typography variant='h4'>Personal site</Typography>
              <Typography variant='h5'>$200</Typography>
              <Typography variant='h6'>
                A personal site showing your products, links blah blah blah need
                to get better at selling
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              p={2}
              borderRadius={4}
              boxShadow='0px 0px 8px rgba(0, 0, 0, 0.25)'
            >
              <Typography variant='h4'>Product 1</Typography>
              <Typography variant='h5'>£100</Typography>
              <Typography variant='h6'>Lorem ipsum dolor sit amet</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              p={2}
              borderRadius={4}
              boxShadow='0px 0px 8px rgba(0, 0, 0, 0.25)'
            >
              <Typography variant='h4'>Product 1</Typography>
              <Typography variant='h5'>£100</Typography>
              <Typography variant='h6'>Lorem ipsum dolor sit amet</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Products;
