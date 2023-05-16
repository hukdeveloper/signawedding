// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../layouts/admin';
import DashboardLayout from '../components/dashboardLayout';
import SideBar from '../components/sideBar';

const Routers = () => {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        <Route
          exact
          path="/admin"
          element={
            <DashboardLayout sideBar={<SideBar />}>
              <Dashboard />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default Routers;
