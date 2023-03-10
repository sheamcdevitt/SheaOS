import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import Wave from 'assets/waves-bg.svg';

const Landing = lazy(() => import('pages/Landing'));
const About = lazy(() => import('pages/About'));
const Roadmap = lazy(() => import('pages/Roadmap'));
const Bookshelf = lazy(() => import('pages/Bookshelf'));
const MainLayout = lazy(() => import('layout/MainLayout'));

const rootStyle = document.documentElement.style;
rootStyle.backgroundImage = `url(${Wave})`;
rootStyle.backgroundRepeat = 'no-repeat';
rootStyle.backgroundPosition = 'center';
rootStyle.backgroundSize = 'cover';

document.body.style.background = 'transparent';

const DefaultRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Landing />} />
            <Route path='/about' element={<About />} />
            <Route path='/bookshelf/:id' element={<Bookshelf />} />
            <Route path='/bookshelf' element={<Bookshelf />} />

            <Route path='/roadmap' element={<Roadmap />} />
          </Route>
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default DefaultRoutes;
