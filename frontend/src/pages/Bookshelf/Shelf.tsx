import React from 'react';
import { Box } from '@mui/material';
import Book from './Book';
import { books } from './books';
import { titleToId } from './Book';

const Shelf: React.FC = () => {
  return (
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
    </Box>
  );
};

export default Shelf;
