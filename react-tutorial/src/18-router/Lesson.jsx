import React, { Fragment } from 'react';

import Header from './components/header/header';
import Footer from './components/footer/footer';

const AppRouter1 = ({ children }) => (
  <Fragment>
    <Header />
    {children}
    <Footer />
  </Fragment>
);

export default AppRouter1;
