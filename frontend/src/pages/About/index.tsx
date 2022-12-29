import React, { useEffect, useState } from 'react';
import Work from './Work';
import AboutSection from './AboutSection';
import Divider from 'components/Divider';

const About: React.FC = () => {
  return (
    <>
      <AboutSection />
      <Divider />
      <Work />
    </>
  );
};

export default About;
