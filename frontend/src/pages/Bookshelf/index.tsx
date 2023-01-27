import React from 'react';
import { Box, Typography } from '@mui/material';
import Shelf from './Shelf';

const Bookshelf: React.FC = () => {
  return (
    <Box className='fade-in'>
      <Typography variant='h1'>Bookshelf</Typography>
      <Shelf />
    </Box>
  );
};

export default Bookshelf;
