import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

function Dashboard({ employee }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <MainContent employee={employee} />
    </div>
  );
}

export default Dashboard;