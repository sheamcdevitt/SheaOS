import React from 'react';
import Hero from './HeroSection';
import Products from './ProductsSection';
import Divider from 'components/Divider';

const Landing: React.FC = () => {
  return (
    <>
      <Hero />
      <Divider />
      <Products />
    </>
  );
};

export default Landing;
