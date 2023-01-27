import React from 'react';
import { Box, Typography } from '@mui/material';
import Book from './Book';
import { books } from './books';
import { titleToId } from './Book';

const Shelf: React.FC = () => {
  const bookshelfDescription = (
    <Box mt={2}>
      <Typography variant='h3'>
        Here are some of the books I've read this year.
      </Typography>
      <Typography mt={{ xs: 1, sm: 0.5 }} variant='h4'>
        My goal with this bookshelf is to keep track of the books I've read and
        to share my thoughts on them.
      </Typography>
    </Box>
  );

  const affiliateLinkDisclaimerText = (
    <Box>
      <Typography>
        Some of the links on this page are affiliate links. This means that if
        you click on a link and make a purchase, I may receive a small
        commission. This is at no extra cost to you and helps me to keep this
        site running. Thank you for your support!
      </Typography>
    </Box>
  );

  return (
    <>
      {bookshelfDescription}
      <Box
        display='flex'
        flexWrap='wrap'
        justifyContent='space-between'
        gap={{ xs: '0.5rem', md: '2rem' }}
        mt='2rem'
      >
        {books.map((book) => (
          <Book key={titleToId(book.title)} {...book} />
        ))}
        {affiliateLinkDisclaimerText}
      </Box>
    </>
  );
};

export default Shelf;
