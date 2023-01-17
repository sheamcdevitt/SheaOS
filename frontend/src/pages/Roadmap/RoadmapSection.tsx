import React from 'react';

import { Box, Typography } from '@mui/material';

const Roadmap: React.FC = () => {
  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection='column'
      maxWidth='1000px'
    >
      <Box>
        <Typography className='text-gradient' variant='h1' mb={2}>
          Roadmap
        </Typography>
        <Typography variant='h2'>
          Below you can find a rough guide to the development of this site
          <Typography variant='h5'>
            This is a rough guide and will change according to my time and
            priorities. I intend to write a piece on each version when they are
            fully released detailing the changes and what I learned.
          </Typography>
        </Typography>
      </Box>
      <Box>
        <Typography className='text-gradient' variant='h2' mt={4}>
          v0.0 - Initial Setup
        </Typography>
        <Typography color='text.secondary' variant='h6' mb={2}>
          released 0x/01/2023
        </Typography>

        <Typography variant='h4'></Typography>
      </Box>
      <Box>
        <Typography className='text-gradient' variant='h2' mb={2} mt={4}>
          v1 - Building the Backend
        </Typography>
        <Typography color='text.secondary' variant='h6' mb={2}>
          released 0x/01/2023
        </Typography>
        <Typography variant='h4'>
          Below I attempt to detail my plans for building the site Below I
          attempt to detail my plans for building the site Below I attempt to
          detail my plans for building the site Below I attempt to detail my
          plans for building the site Below I attempt to detail my plans for
          building the site Below I attempt to detail my plans for building the
          site Below I attempt to detail my plans for building the site
        </Typography>
      </Box>
    </Box>
  );
};

export default Roadmap;
