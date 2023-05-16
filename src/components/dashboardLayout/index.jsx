import React from 'react';

const DashboardLayout = ({ sideBar = null, children }) => {
  return (
    <div>
      <div>{sideBar}</div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
