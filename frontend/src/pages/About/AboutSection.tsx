import React from 'react';

import { Box, Link, Tooltip, Typography } from '@mui/material';

const AboutSection: React.FC = () => {
  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <Box id='about'>
        <Typography className='text-gradient' variant='h1'>
          About me
        </Typography>
        <Typography variant='h2' mb={4}>
          Here's my story (so far)
        </Typography>
        <Typography variant='h4'>
          I'm a full stack Software Engineer at Project Ark.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
