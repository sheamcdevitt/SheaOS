import React from 'react';
import Divider from 'components/Divider';
import { Box, Typography } from '@mui/material';

const Bookshelf: React.FC = () => {
  return (
    <Box>
      <Typography variant='h1'>Bookshelf</Typography>
      <Typography variant='h2'>
        Todo: Add a bookshelf with a list of books I've read and a list of books
        I'm currently reading. Shoe Dog is a great book about the early days of
        Nike. In the book, Phil Knight talks about how he started Nike with a
        $500 loan from his father. -Have a clear vision and mission for your
        company -Be willing to take calculated risks -Be persistent and
        resilient in the face of challenges and setbacks -Be willing to adapt
        and evolve your business model as needed -Be passionate and dedicated to
        your work -Be open to new ideas and perspectives -Be prepared for the
        long-term and have a long-term mindset -Be able to surround yourself
        with a strong and talented team -Be able to make tough decisions and
        take personal responsibility for the success or failure of the business
        -Be willing to work hard and make sacrifices to achieve success
      </Typography>
      <Divider />
    </Box>
  );
};

export default Bookshelf;
