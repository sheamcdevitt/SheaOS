import { Container, Stack, Box, Toolbar, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Header from './Header';

const MainLayout = () => {
  return (
    <CustomBox className='layout-container' maxWidth='lg'>
      <Header />
      <Outlet />
    </CustomBox>
  );
};

export default MainLayout;

const CustomBox = styled(Container)(({ theme }) => ({
  margin: '200px auto',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    margin: '40px auto',
  },
}));
