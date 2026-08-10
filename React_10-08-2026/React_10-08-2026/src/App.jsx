import React from 'react'
import { Routes, Route } from 'react-router'
import ApplicationPage from './Pages_10-08-2026/Mini Application Page_10-08-2026/ApplicationPage'
import "./App.css";
import "./App1.css";
import FoodDeliveryPage from './Pages_10-08-2026/FoodDeliveryPage_10-08-2026/FoodDeliveryPage';
import Layout from './Components_10-08-2026/Mini Project_10-08-2026/Layout';
import Home from './Pages_10-08-2026/MiniProjectPage_10-08-2026/Home';
import About from './Pages_10-08-2026/MiniProjectPage_10-08-2026/About';
import Login from './Pages_10-08-2026/MiniProjectPage_10-08-2026/Login';
import ProtectedRoute from './Components_10-08-2026/Mini Project_10-08-2026/ProtectedRoute';
import Dashboard from './Pages_10-08-2026/MiniProjectPage_10-08-2026/Dashboard/Dashboard';
import Profile from './Pages_10-08-2026/MiniProjectPage_10-08-2026/Dashboard/Profile';
import Users from './Pages_10-08-2026/MiniProjectPage_10-08-2026/Dashboard/Users';
import UserDetails from './Pages_10-08-2026/MiniProjectPage_10-08-2026/Dashboard/UserDetails';
import Overview from "./Pages_10-08-2026/MiniProjectPage_10-08-2026/Dashboard/Overwive";
import Notfound from './Pages_10-08-2026/MiniProjectPage_10-08-2026/Notfound';
function App() {
  return (
    <Routes>
      <Route
        path="/Mini Application Page_10-08-2026"
        element={<ApplicationPage />}
      />
      <Route
        path="/FoodDeliveryPage_10-08-2026"
        element={<FoodDeliveryPage />}
      />

       <Route element={<Layout />}>

        {/* Public routes */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        {/* Protected routes */}

        <Route element={<ProtectedRoute />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          >

            <Route
              index
              element={<Overview />}
            />

            <Route
              path="profile"
              element={<Profile />}
            />

            <Route
              path="users"
              element={<Users />}
            />

            <Route
              path="users/:id"
              element={<UserDetails />}
            />

          </Route>

        </Route>


        {/* 404 */}

        <Route
          path="*"
          element={<Notfound />}
        />

      </Route>
    </Routes>
  )
}

export default App