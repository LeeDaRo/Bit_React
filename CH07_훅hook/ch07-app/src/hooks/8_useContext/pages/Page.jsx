import React from 'react';
import Content from '../layout/Content';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import { BrowserRouter } from 'react-router-dom';

const Page = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Page;