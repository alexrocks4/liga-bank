import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';

function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default PageLayout;
