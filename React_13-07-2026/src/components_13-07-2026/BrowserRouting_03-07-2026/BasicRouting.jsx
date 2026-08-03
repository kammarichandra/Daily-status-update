import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import ProtectedRoute from './ProtectedRoute';
import Home from '../../pages_13-07-2026/BrowserRoutingPage_03-07-2026/Home';
import About from '../../pages_13-07-2026/BrowserRoutingPage_03-07-2026/About';
import Contact from '../../pages_13-07-2026/BrowserRoutingPage_03-07-2026/Contact';
import Dashboard from '../../pages_13-07-2026/BrowserRoutingPage_03-07-2026/Dashboard';
import Login from '../../pages_13-07-2026/BrowserRoutingPage_03-07-2026/Login';
import Students from '../../pages_13-07-2026/BrowserRoutingPage_03-07-2026/Students';
import StudentDetails from '../../pages_13-07-2026/BrowserRoutingPage_03-07-2026/StudentDetails';
import NotFound from '../../pages_13-07-2026/BrowserRoutingPage_03-07-2026/NotFound';

function BasicRouting() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="students" element={<Students />} />
        <Route path="students/:id" element={<StudentDetails />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute isLoggedIn={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default BasicRouting;