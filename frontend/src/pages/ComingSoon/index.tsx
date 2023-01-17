import { Box, Typography } from '@mui/material';
import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
      height='100vh'
      padding={2}
    >
      <Typography className='text-gradient' variant='h1' pb={1}>
        Coming Soon...
      </Typography>
      <Typography className='text-gradient' variant='h2' textAlign={'center'}>
        I'm still building this site.
      </Typography>
      <Typography className='text-gradient' variant='h2' textAlign={'center'}>
        Check back 28th of January 2023.
      </Typography>
    </Box>
  );
};

export default ComingSoon;
