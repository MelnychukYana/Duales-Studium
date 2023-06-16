
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from '../Home/Home';
import Menu from '../Header/Menu';
import Imprint from '../pages/Imprint';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Press from '../pages/Press';

const RoutesComponent = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/imprint" element={<Imprint />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<About />} />
    <Route path="/press" element={<Press />} />
  </Routes>
);

export default RoutesComponent;
