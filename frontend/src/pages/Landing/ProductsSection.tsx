import React from 'react';

import { Box, Link, Typography } from '@mui/material';

const Products: React.FC = () => {
  const emailHref = `mailto:enquiries@sheamcdevitt.com?subject=Let's%20build%20something%20together!&body=Hey%20Shéa!%20I'd%20love%20to%20work%20with%20you%20on%20my%20next%20project.%20I've%20attached%20some%20more%20information%20about%20my%20project%20below.%20I'll%20be%20in%20touch%20soon!`;

  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection={{ xs: 'column', sm: 'column' }}
    >
      <Box>
        <Typography className='text-gradient' variant='h2' mb={2} pb={1}>
          Let's build something together!
        </Typography>
        <Box mt={{ xs: 2, sm: 4 }}>
          <Typography variant='h3'>
            I build high quality web and mobile applications for businesses and
            personal brands. Fast.
          </Typography>
          <Typography variant='h3'>
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
          </Typography>
          <Link
            className='link'
            href='/work-with-me'
            underline='none'
            color='text.primary'
          >
            <Typography variant='h4'>You can learn more here</Typography>
          </Link>
        </Box>
        <Box mt={{ xs: 2, sm: 4 }}>
          <Typography variant='h5'>I'm currently available for work</Typography>
        </Box>
      </Box>
      {/*
      Box with a grid displaying 3 different products with prices

       */}
    </Box>
  );
};

export default Products;
