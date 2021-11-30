import React from 'react';
import { childrenProp } from '../../types/types';
import Footer from '../footer/footer';
import Header from '../header/header';

function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

PageLayout.propTypes = {
  children: childrenProp,
};

PageLayout.defaultProps = {
  className: '',
};

export default PageLayout;
