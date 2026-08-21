import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import "./App1.css";
import "./App2.css";
/* ================================
   OLD PRACTICE / LEARNING PAGES
================================ */

import ApplicationPage from "./Pages_10-08-2026/Mini Application Page_10-08-2026/ApplicationPage";

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

import ReactFormPage from "./Pages_10-08-2026/ReactFormValidationPage_17-08-2026/ReactFormPage";

import EmpRegisterPage from "./Pages_10-08-2026/Emp Registratioin Form Page_17-08-2026/EmpRegisterPage";

import CheckOutformPage from "./Pages_10-08-2026/CheckOutFormPage_17-08-2026/CheckOutformPage";

import ApicallsPage from "./Pages_10-08-2026/Apicalls&DataHandling Page_18-08-2026/ApicallsPage";

import ProductSearchPage from "./Pages_10-08-2026/ProductSearchPage_18-08-2026/ProductSearchPage";

import WeatherPage from "./Pages_10-08-2026/Weather Dashboard Page_18-08-2026/WeatherPage";

import AdvanceStateManagmentPage from "./Pages_10-08-2026/Advance State Managment Page_19-08-2026/AdvanceStateManagmentPage";

import ReduxToolPage from "./Pages_10-08-2026/ReduxToolPage_19-08-2026/ReduxToolPage";


/* ================================
   STUDENT PORTAL
================================ */

// import Navbar from "./Components_10-08-2026/StudentPotral_14-08-2026/Components/Navbar";

import HomeStudent from "./Components_10-08-2026/StudentPotral_14-08-2026/Pages/Home";

import LoginStudent from "./Components_10-08-2026/StudentPotral_14-08-2026/Pages/Login";

import CourseDetails from "./Components_10-08-2026/StudentPotral_14-08-2026/Pages/CourseDetails";

import StudentProfile from "./Components_10-08-2026/StudentPotral_14-08-2026/Pages/Studentprofile";

import NotFound from "./Components_10-08-2026/StudentPotral_14-08-2026/Pages/Notfound";

import ProtectedRoute from "./Components_10-08-2026/StudentPotral_14-08-2026/Components/ProtectedRoute";

import DashboardStudent from "./Components_10-08-2026/StudentPotral_14-08-2026/Pages/Dashboard";


/* ================================
   JOB PORTAL
================================ */

import Navbar1 from "./Components_10-08-2026/JobPotral_14-08-2026/Components/Navbar1";

// import Home1 from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/Home1";

import Login1 from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/Login1";

import ApplyJobs from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/Applyjobs";

import JobDetails from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/JobDetails";

import Jobs from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/Jobs";

import ProtectedRoute1 from "./Components_10-08-2026/JobPotral_14-08-2026/Components/ProtectedRoute1";

import About1 from "./Components_10-08-2026/JobPotral_14-08-2026/Pages/About1";


/* ================================
   FOOD DELIVERY APP
================================ */

import MainLayout from "./Components_10-08-2026/Food Delivery App_19-08-2026/Layout/MainLayout";

// import Home from "./Components_10-08-2026/Food Delivery App_19-08-2026/Pages/Home";

import Restaurant from "./Components_10-08-2026/Food Delivery App_19-08-2026/Pages/Restaurant";

import CartPage from "./Components_10-08-2026/Food Delivery App_19-08-2026/Pages/CartPage";

import Checkout from "./Components_10-08-2026/Food Delivery App_19-08-2026/Pages/Checkout";

import Orders from "./Components_10-08-2026/Food Delivery App_19-08-2026/Pages/Orders";

import LoginFood from "./Components_10-08-2026/Food Delivery App_19-08-2026/Pages/Login";

import PerformencePage1 from "./Pages_10-08-2026/PerformencePage1_20-08-2026/PerformencePage1";
import DashboardPage from "./Pages_10-08-2026/DashboardPage_20-08-2026/DashboardPage";
import ExpensesPage from "./Pages_10-08-2026/Expenses Page_20-08-2026/ExpensesPage";
import RoutingPage from "./Pages_10-08-2026/Routing Page_21-08-2026/RoutingPage";
import Layout from "./Components_10-08-2026/Browser Routing1_21-08-2026/Dynamic Routing_21-08-2026/Layout/Layout";
import Home2 from "./Components_10-08-2026/Browser Routing1_21-08-2026/Dynamic Routing_21-08-2026/Pages/Home2";
import About2 from "./Components_10-08-2026/Browser Routing1_21-08-2026/Dynamic Routing_21-08-2026/Pages/About2";
import Contact2 from "./Components_10-08-2026/Browser Routing1_21-08-2026/Dynamic Routing_21-08-2026/Pages/Contact2";
import Products2 from "./Components_10-08-2026/Browser Routing1_21-08-2026/Dynamic Routing_21-08-2026/Pages/Products2";
import ProductDetails from "./Components_10-08-2026/Browser Routing1_21-08-2026/Dynamic Routing_21-08-2026/Pages/ProductDetails";
import Home3 from "./Components_10-08-2026/Student Managment1_21-08-2026/Pages/Home3";
import Login3 from "./Components_10-08-2026/Student Managment1_21-08-2026/Pages/Login3";
import Dashboard3 from "./Components_10-08-2026/Student Managment1_21-08-2026/Pages/Dashboard3";
import Students3 from "./Components_10-08-2026/Student Managment1_21-08-2026/Pages/Students3";
import StudentDetails from "./Components_10-08-2026/Student Managment1_21-08-2026/Pages/StudentDetails";
import Courses from "./Components_10-08-2026/Student Managment1_21-08-2026/Pages/Courses";
import Settings from "./Components_10-08-2026/Student Managment1_21-08-2026/Pages/Settings";
import DashboardLayout from "./Components_10-08-2026/Student Managment1_21-08-2026/Layouts/DashboardLayout";

function App() {

  return (

    <Routes>

      {/* =================================
          OLD PRACTICE ROUTES
      ================================= */}

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

      <Route
        path="/Apicalls&DataHandling Page_18-08-2026"
        element={<ApicallsPage />}
      />

      <Route
        path="/ProductSearchPage_18-08-2026"
        element={<ProductSearchPage />}
      />

      <Route
        path="/Weather Dashboard Page_18-08-2026"
        element={<WeatherPage />}
      />

      <Route
        path="/Advance State Managment Page_19-08-2026"
        element={<AdvanceStateManagmentPage />}
      />

      <Route
        path="/ReduxToolPage_19-08-2026"
        element={<ReduxToolPage />}
      />
      <Route
        path="/PerformencePage1_20-08-2026"
        element={<PerformencePage1 />}
      />
      <Route
        path="/DashboardPage_20-08-2026"
        element={<DashboardPage />}
      />
      <Route
        path="/Expenses Page_20-08-2026"
        element={<ExpensesPage />}
      />
      <Route
        path="/Routing Page_21-08-2026"
        element={<RoutingPage />}
      />
      {/* 
        <Route path="/" element={< Navbar/>}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route> */}

          <Route path="/" element={<Layout />}>

         <Route index element={<Home2 />} />

         <Route path="about" element={<About2 />} />

         <Route path="contact" element={<Contact2 />} />

         <Route path="products" element={<Products2 />} />
        
         <Route path="products/:id" element={<ProductDetails />} />

        </Route>


      {/* <Route path="/" element={<Home3 />} />

        <Route path="/login" element={<Login3 />} />

        <Route path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          <Route index element={<Dashboard3 />}/>

          <Route path="students" element={<Students3 />} />

          <Route path="students/:id" element={<StudentDetails />}/>

          <Route path="courses" element={<Courses />} />

          <Route path="settings" element={<Settings />}/>

        </Route>

        <Route path="*" element={<NotFound />}/> */}

    </Routes>

  );

}

export default App;