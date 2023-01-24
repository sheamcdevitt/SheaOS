import React from 'react';

import { Box, Typography, Link } from '@mui/material';

import WorkSummary from './WorkSummary';

const Work: React.FC = () => {
  const workExperience = [
    {
      id: 1,
      company: (
        <Link
          className='hover-underline-animation'
          underline='none'
          href='https://communities.projectark.co.uk/'
          target='_blank'
          rel='noreferrer'
          color={'#FB4824'}
        >
          Project Ark
        </Link>
      ),
      role: 'Software Engineer',
      startDate: 'Apr 2022',
      endDate: 'Present',
      summary: `Fullstack Software Engineer building a web and mobile platform to radically improve renting. Ark helps institutional landlords and building managers forge more meaningful relationships with residents.`,
      stack: [
        'React',
        'React Native',
        'TypeScript',
        'Django',
        'Python',
        'GraphQL',
      ],
      readMore: '/writing/ark',
    },
    {
      id: 2,
      company: (
        <Link
          className='hover-underline-animation'
          underline='none'
          href='https://aquaq.co.uk/'
          target='_blank'
          rel='noreferrer'
          color={'#2a3089'}
        >
          AquaQ Analytics
        </Link>
      ),
      role: 'Frontend Developer',
      startDate: 'Sep 2021',
      endDate: 'Apr 2022',
      summary: `Frontend Developer developing a web interface for a major global financial services client.`,
      stack: ['React', 'JavaScript'],
    },
    {
      id: 3,
      company: (
        <Link
          className='hover-underline-animation'
          underline='none'
          href='https://polyloop.io/'
          target='_blank'
          rel='noreferrer'
          color={'#031237'}
        >
          Polyloop
        </Link>
      ),
      role: 'Software Engineer',
      startDate: 'Mar 2021',
      endDate: 'Sep 2021',
      summary:
        'Software Engineering internship building an MVP that brings together strategic design, data governance and performance monitoring to maximise impact.',
      stack: ['JavaScript', 'd3.js'],
    },
    {
      id: 4,
      company: (
        <Link
          className='hover-underline-animation'
          underline='none'
          href='https://urbanscaleinterventions.com/'
          target='_blank'
          rel='noreferrer'
          color={'#000'}
        >
          Urban Scale Interventions
        </Link>
      ),
      role: 'Software Engineer',
      startDate: 'Jun 2019',
      endDate: 'Mar 2021',
      summary: `Software Engineer internship building a behaviour recognition model for public space.`,
      stack: ['Python', 'Tensorflow', 'YOLOv3'],
    },
  ];

  return (
    <Box
      className='fade-in'
      display='flex'
      flexDirection={{ xs: 'column', sm: 'row' }}
    >
      <Box>
        <Typography className='text-gradient' variant='h1'>
          Work Experience
        </Typography>
        <Typography variant='h3'>
          Here's a synopsis of my work experience
        </Typography>
        <Box mt={{ xs: 2, sm: 4 }}>
          {workExperience.map((experience) => (
            <WorkSummary key={experience.id} experience={experience} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Work;
