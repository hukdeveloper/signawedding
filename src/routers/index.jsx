// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../layouts/admin';

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route exact path="/admin" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default Routers;
