import React from 'react';
import { Box, Typography, Link, useMediaQuery, useTheme } from '@mui/material';

type Experience = {
  id: number;
  company: JSX.Element;
  role: string;
  startDate: string;
  endDate: string;
  summary: string;
  stack: string[];
  readMore?: string;
};

interface WorkSummaryProps {
  experience: Experience;
}

const WorkSummary: React.FC<WorkSummaryProps> = ({ experience }) => {
  const { company, role, startDate, endDate, summary, stack, readMore } =
    experience;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const calculateMonths = (startDate: string, endDate: string) => {
    const start = new Date(startDate);
    const end = endDate === 'Present' ? new Date() : new Date(endDate);
    const months = (end.getFullYear() - start.getFullYear()) * 12;
    return months + end.getMonth() - start.getMonth();
  };

  const monthsToYearsAndMonths = (months: number) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return years > 1
      ? `${years} years ${remainingMonths} months`
      : years === 1
      ? `${years} year ${remainingMonths} months`
      : remainingMonths === 1
      ? `${remainingMonths} month`
      : `${remainingMonths} months`;
  };

  const months = calculateMonths(startDate, endDate);
  const yearsAndMonths = monthsToYearsAndMonths(months + 1);

  return (
    <Box
      display='flex'
      flexDirection='column'
      sx={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
        padding: '2rem',
        margin: '2rem 0',
      }}
    >
      {isMobile ? (
        <>
          <Typography variant='h3'>{company}</Typography>
          <Typography variant='h4'>{role}</Typography>
        </>
      ) : (
        <Typography variant='h3'>
          {company} • {role}
        </Typography>
      )}
      <Typography variant='h5' mb={1}>
        {startDate} - {endDate} • {yearsAndMonths}
      </Typography>
      <Typography variant='h5'>{summary}</Typography>

      {readMore && (
        <Typography mt={2} variant='h5'>
          <Link
            href={readMore}
            className='hover-underline-animation'
            underline='none'
            color='text.primary'
          >
            Read more about my experience
          </Link>
        </Typography>
      )}
    </Box>
  );
};

export default WorkSummary;
