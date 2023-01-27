import React from 'react';

import { Box, Typography } from '@mui/material';

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
          I'm Shéa, a software engineer, with a passion for building products.
          Blending the art of design with the science of programming, my goal is
          to create intuitive and aesthetic applications that focus on the user
          experience.
        </Typography>
        <Typography mt={2} variant='h4'>
          I'm currently a software engineer at Project Ark, where I work on
          building a platform that helps landlords and tenants manage their
          properties with a focus on community.
        </Typography>
        <Typography mt={2} variant='h4'>
          I'm also a freelance developer, where I am currently working on client
          projects and building my portfolio.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutSection;
