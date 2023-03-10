import React from 'react';
import { Box, Link, Typography } from '@mui/material';

export type Status = 'Currently Reading' | 'Finished' | 'Want to Read';

const statusToColor = (status: Status) => {
  switch (status) {
    case 'Currently Reading':
      return '#FB4824';
    case 'Finished':
      return 'green';
    case 'Want to Read':
      return 'warning';
    default:
      return 'primary';
  }
};

export const titleToId = (title: string) =>
  title.replace(/\s/g, '-').toLowerCase();

export interface BookProps {
  title: string;
  subtitle?: string;
  author: string;
  cover: string;
  description: string;
  status: Status;
  dateFinished?: string;
  hasNotes?: boolean;
  link: string;
}

const Book: React.FC<BookProps> = ({
  title,
  subtitle,
  author,
  cover,
  description,
  status,
  dateFinished,
  hasNotes,
  link,
}) => {
  return (
    <Box
      display='flex'
      className='hover-grow'
      flexDirection={{ xs: 'column', md: 'row' }}
      width={{
        xs: '100%',
        sm: '100%',
        md: '48%',
      }}
      m={{ xs: '0.5rem', md: '0' }}
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
        padding: '2rem',
      }}
      onClick={() => {
        window.open(link, '_blank');
      }}
    >
      <Box
        mr={{ xs: 0, sm: '2rem' }}
        display='flex'
        justifyContent={{ xs: 'center', md: 'flex-start' }}
      >
        <img src={cover} alt={title} style={{ height: '300px' }} />
      </Box>
      <Box display='flex' flexDirection='column' mt={{ xs: '1rem', md: '0' }}>
        <Typography variant='h2'>{title}</Typography>
        <Typography variant='h4'>
          {subtitle} by {author}
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: statusToColor(status),
          }}
        >
          {status} {dateFinished}
        </Typography>
        <Typography variant='body1' mt={{ xs: '1rem', md: '2rem' }}>
          {description}
        </Typography>
        {hasNotes && (
          <Link
            href={`/bookshelf/${titleToId(title)}`}
            className='hover-underline-animation'
            underline='none'
            rel='noreferrer'
            variant='h4'
            mt={{ xs: '1rem', md: '2rem' }}
            width='fit-content'
            color={'#2a3089'}
          >
            Notes
          </Link>
        )}
      </Box>
    </Box>
  );
};

export default Book;
