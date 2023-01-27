import React from 'react';

import { Box, Link, Typography } from '@mui/material';

const Products: React.FC = () => {
  const emailHref = `mailto:personal@sheamcdevitt.com?subject=Let's%20build%20something%20together!&body=Hey%20Shéa!%20I'd%20love%20to%20work%20with%20you%20on%20my%20next%20project.%20I've%20attached%20some%20more%20information%20about%20my%20project%20below.`;

  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection={{ xs: 'column', sm: 'column' }}
    >
      <Box>
        <Typography className='text-gradient' variant='h2' mb={2} pb={1}>
          Got a project in mind?
        </Typography>
        <Box mt={{ xs: 2, sm: 4 }}>
          <Typography variant='h3'>
            Whether you're looking for a new personal site or want to build a
            business application.
          </Typography>
          <Typography variant='h3'>I'd love to hear from you.</Typography>
          <Typography mt={2} variant='h3'>
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
        </Box>
        <Box mt={{ xs: 2, sm: 4 }}>
          <Typography variant='h5'>I'm currently available for work</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
