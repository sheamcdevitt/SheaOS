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
      </Box>
    </Box>
  );
};

export default AboutSection;
