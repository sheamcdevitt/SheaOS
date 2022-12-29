import React, { useEffect, useState } from 'react';

import { Box, Link, Tooltip, Typography } from '@mui/material';

import Abstract from 'assets/abstract-placeholder.png';
import Avatar from 'assets/avatar.png';
import Macbook from 'assets/stock-macbook.png';

import { AnimationOnScroll } from 'react-animation-on-scroll';

const Products: React.FC = () => {
  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <Box>
        <Typography className='text-gradient' variant='h1' mb={2}>
          Products
        </Typography>
      </Box>
    </Box>
  );
};

export default Products;
