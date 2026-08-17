import React from "react";
import { Routes, Route } from "react-router-dom";

import ApplicationPage from "./Pages_10-08-2026/Mini Application Page_10-08-2026/ApplicationPage";
import "./App.css";
import "./App1.css";

import FoodDeliveryPage from "./Pages_10-08-2026/FoodDeliveryPage_10-08-2026/FoodDeliveryPage";

import ReactHookPage from "./Pages_10-08-2026/React Hook & Api Page_11-08-2026/ReactHookPage";

import ProductStorePage from "./Pages_10-08-2026/Product Store Page_11-08-2026/ProductStorePage";

import EmpPage from "./Pages_10-08-2026/EmpPage_11-08-2026/EmpPage";

import StatePage from "./Pages_10-08-2026/StateManagmentPage_12-08-2026/StatePage";

import ToolPage from "./Pages_10-08-2026/ToolKitPage_12-08-2026/ToolPage";

import MiniProjectPage2 from "./Pages_10-08-2026/Mini Project Page2_12-08-2026/MiniProjectPage2";

import PerformancePage from "./Pages_10-08-2026/PerformancePage_13-08-2026/PerformancePage";

import E_commercePage from "./Pages_10-08-2026/Smart E-Commerce Product Dashboard Page_13-08-2026/E_commercePage";

import BrowserRoutingPage from "./Pages_10-08-2026/BrowserRoutingPage_14-08-2026/BrowserRoutingPage";


// Browser Routing Pages
// import Home from "./Components_10-08-2026/Browser Routing_14-08-2026/Pages/Home";

import About from "./Components_10-08-2026/Browser Routing_14-08-2026/Pages/About";

import Contact from "./Components_10-08-2026/Browser Routing_14-08-2026/Pages/Contact";

import Products from "./Components_10-08-2026/Browser Routing_14-08-2026/Pages/Products";

import ProductDetails from "./Components_10-08-2026/Browser Routing_14-08-2026/Pages/ProductDetails";

// import Login from "./Components_10-08-2026/Browser Routing_14-08-2026/Pages/Login";

// import Dashboard from "./Components_10-08-2026/Browser Routing_14-08-2026/Pages/Dashboard";

// import ProtectedRoute from "./Components_10-08-2026/Browser Routing_14-08-2026/Components/ProtectedRoute";


// Navbar Layout
// import Navbar from "./Components_10-08-2026/Browser Routing_14-08-2026/Components/Navbar";
import Navbar from './Components_10-08-2026/StudentPotral_14-08-2026/Components/Navbar';
import Home from './Components_10-08-2026/StudentPotral_14-08-2026/Pages/Home';
import Login from './Components_10-08-2026/StudentPotral_14-08-2026/Pages/Login';
import CourseDetails from "./Components_10-08-2026/StudentPotral_14-08-2026/Pages/CourseDetails";
import StudentProfile from "./Components_10-08-2026/StudentPotral_14-08-2026/Pages/Studentprofile";
import NotFound from "./Components_10-08-2026/StudentPotral_14-08-2026/Pages/Notfound";
import ProtectedRoute from './Components_10-08-2026/StudentPotral_14-08-2026/Components/ProtectedRoute';
import Dashboard from './Components_10-08-2026/StudentPotral_14-08-2026/Pages/Dashboard';
import Navbar1 from "./Components_10-08-2026/JobPotral_14-08-2026/Components/Navbar1";
import Home1 from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/Home1";
import Login1 from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/Login1";
import ApplyJobs from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/Applyjobs";
import JobDetails from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/JobDetails";
import Jobs from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/Jobs";
import ProtectedRoute1 from "./Components_10-08-2026/JobPotral_14-08-2026/Components/ProtectedRoute1";
import About1 from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/About1";
import ReactFormPage from "./Pages_10-08-2026/ReactFormValidationPage_17-08-2026/ReactFormPage";
import EmpRegisterPage from "./Pages_10-08-2026/Emp Registratioin Form Page_17-08-2026/EmpRegisterPage";
import CheckOutformPage from "./Pages_10-08-2026/CheckOutFormPage_17-08-2026/CheckOutformPage";


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

      <Route
        path="/React Hook & Api Page_11-08-2026"
        element={<ReactHookPage />}
      />

      <Route
        path="/Product Store Page_11-08-2026"
        element={<ProductStorePage />}
      />

      <Route
        path="/EmpPage_11-08-2026"
        element={<EmpPage />}
      />

      <Route
        path="/StateManagmentPage_12-08-2026"
        element={<StatePage />}
      />

      <Route
        path="/ToolKitPage_12-08-2026"
        element={<ToolPage />}
      />

      <Route
        path="/Mini Project Page2_12-08-2026"
        element={<MiniProjectPage2 />}
      />

      <Route
        path="/PerformancePage_13-08-2026"
        element={<PerformancePage />}
      />

      <Route
        path="/Smart E-Commerce Product Dashboard Page_13-08-2026"
        element={<E_commercePage />}
      />

      <Route
        path="/BrowserRoutingPage_14-08-2026"
        element={<BrowserRoutingPage />}
      />


  

      {/* <Route path="/" element={<Navbar />}>

      
        <Route
          index
          element={<Home />}
        />

     
        <Route
          path="about"
          element={<About />}
        />

       
        <Route
          path="contact"
          element={<Contact />}
        />

        <Route
          path="products"
          element={<Products />}
        />

      
        <Route
          path="products/:id"
          element={<ProductDetails />}
        />

      
        <Route
          path="login"
          element={<Login />}
        />

        
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

      </Route>

      <Route
        path="*"
        element={
          <div>
            <h1>404</h1>
            <p>Page Not Found</p>
          </div>
        }
      /> */}

       {/* <Route path="/" element={<Navbar />}>

        
        <Route
          index
          element={<Home />}
        />

        
        <Route
          path="login"
          element={<Login />}
        />

        
        <Route
          path="CourseDetails"
          element={<CourseDetails />}
        />

       
        <Route
          path="StudentProfile"
          element={<StudentProfile />}
        />

    
        <Route
          path="dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

       
        <Route
          path="*"
          element={<NotFound />}
        />

      </Route> */}

      <Route path="/" element={<Navbar1 />}>

        
        <Route
          index
          element={<Home1 />}
        />

        
        <Route
          path="login"
          element={<Login1 />}
        />

        <Route
          path="about"
          element={<About1 />}
        />

        
        <Route
          path="Jobs"
          element={<Jobs />}
        />

        
        <Route
          path="JobDetails"
          element={<JobDetails />}
        />

       
        <Route
          path="dashboard"
          element={
            <ProtectedRoute1>
              <ApplyJobs />
            </ProtectedRoute1>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Route>

       <Route
        path="/ReactFormValidationPage_17-08-2026"
        element={<ReactFormPage />}
      />
      <Route
        path="/Emp Registratioin Form Page_17-08-2026"
        element={<EmpRegisterPage />}
      />
      <Route
        path="/CheckOutFormPage_17-08-2026"
        element={<CheckOutformPage />}
      />

    </Routes>
  );
}

export default App;