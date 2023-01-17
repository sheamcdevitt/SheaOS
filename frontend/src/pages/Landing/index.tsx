import React from 'react';
import Hero from './HeroSection';
import Products from './ProductsSection';
import Divider from 'components/Divider';
import About from 'pages/About';
import Work from 'pages/About/Work';

const Landing: React.FC = () => {
  return (
    <>
      <Hero />

      <Products />
    </>
  );
};

export default Landing;
