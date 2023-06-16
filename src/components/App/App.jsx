import React from 'react';

import Routes from '../Routes/Routes';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className="wrapper">
        <Header />
        <Routes />
        <Footer />
    </div>
  );
};

export default App;
