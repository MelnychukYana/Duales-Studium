import React from 'react';

import Routes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../App/ScrollTop';

const App = () => {
  return (
    <div className="wrapper">
        <ScrollToTop />
        <Header />
        <Routes />
        <Footer />
    </div>
  );
};

export default App;
