import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <CustomBox className='layout-container' maxWidth='lg'>
      <Header />
      <Outlet />
      <Footer />
    </CustomBox>
  );
};

export default MainLayout;

const CustomBox = styled(Container)(({ theme }) => ({
  margin: '200px auto 12px',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    margin: '80px auto 12px',
  },
}));
