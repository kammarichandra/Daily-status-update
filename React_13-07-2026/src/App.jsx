import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import "./Minproject.css";
// import "./FormValidation.css";
// Components
import ComponentsPage from "./pages_13-07-2026/components/ComponentsPage";
// import ContextPage from "./pages_13-07-2026/Contextapi_13-07-2026/Contextpage";
import UserPage from "./pages_13-07-2026/Contextapi_13-07-2026/Userpage";
import Multipulepages from "./pages_13-07-2026/multipulecomponents_13-07-2026/multipulepages";
import ThemePage from "./pages_13-07-2026/ThemeManagment_13-07-2026/ThemePage";
import Projectpage from "./pages_13-07-2026/Miniproject_13-07-2026/Projectpage";
import Profilepage from "./pages_13-07-2026/ProfileManagmentPage_14-07-2026/Profilepage";
import Reduxpage from "./pages_13-07-2026/redux_13-07-2026/ReduxPage";
import ReducerPage from "./pages_13-07-2026/ReducerFunctionPage_15-07-2026/ReducerPage";
import TodoPage from "./pages_13-07-2026/TodoPage_15-07-2026/TodoPage";
// import DispatchPage from "./pages_13-07-2026/DispatchPage_15-07-2026/DispatchPage";
import ShoppingPage from "./pages_13-07-2026/ShoppingCartPage_15-07-2026/ShoppingPage";
import RegistrationPage from "./pages_13-07-2026/RegistrationPage_15-07-2026/RegistrationPage";
import Mainpage from "./pages_13-07-2026/ContextApiPage_16-07-2026/Mainpage";
import ContextPage from "./pages_13-07-2026/UseContextpage_16-07-2026/ContextPage";
import CounterPage from "./pages_13-07-2026/CounterPage_16-07-2026/CounterPage"
import UserReducerPage from "./pages_13-07-2026/UserReducerPage_16-07-2026/UserReducerPage"
import EcomercePage from "./pages_13-07-2026/E-comercePage_16-07-2026/EcomercePage"
import ProjectPage1 from "./pages_13-07-2026/MiniProjectPage_16-07-2026/ProjectPage1"
import StudentPage from "./pages_13-07-2026/ComponentPage_17-07-2026/StudentPage";
import ClassPage from "./pages_13-07-2026/ClassComponentPage_17-07-2026/ClassPage"
import EmpPage from "./pages_13-07-2026/Props&StatesPage_17-07-2026/EmpPage"
import StatePage from "./pages_13-07-2026/StatePage_17-07-2026/StatePage"
import StudentPage1 from "./pages_13-07-2026/StudentPage_17-07-2026/StudentPage1"
import ChildtoParent from "./pages_13-07-2026/ChildtoParent_17-07-2026/ChildtoParent"
import ParenttoChild from "./pages_13-07-2026/ParenttoChildPage_17-07-2026/ParenttoChild"
import ChildtoChildPage from "./pages_13-07-2026/ChildtoChild_17-07-2026/ChildtoChildPage"
import Apipage from "./pages_13-07-2026/ApiPage_17-07-2026/Apipage"
import ChildPage from "./pages_13-07-2026/ChildPage_17-07-2026/ChildPage"
import MainPage from "./pages_13-07-2026/MiniProjectPage_17-07-2026/MainPage"
import RenderingPage from "./pages_13-07-2026/ConditionalRenderingPage_20-07-2026/RenderingPage"
import MessagePage from "./pages_13-07-2026/MessagePage_20-07-2026/MessagePage"
import UserPage1 from "./pages_13-07-2026/UserAtunticationPage_20-07-2026/UserPage1"
import LoadingPage from "./pages_13-07-2026/LoadingPage_20-07-2026/LoadingPage"
import LoginPage20 from "./pages_13-07-2026/LoginPage_20-07-2026/Login"
import DashboardPage20 from "./pages_13-07-2026/DashboardPages_20-07-2026/Dashboard"
import UseEffectPage from "./pages_13-07-2026/UseEffectPage_21-07-2026/UseEffectPage"
import ApiPage1 from "./pages_13-07-2026/ApiPage1_21-07-2026/ApiPage1"
import AxiosPage from "./pages_13-07-2026/AxiosPage_21-07-2026/AxiosPage"
import ApiDataPage from "./pages_13-07-2026/ApiDataPage_21-07-2026/ApiDataPage";
import Userpost from "./pages_13-07-2026/UserPostPage_21-07-2026/Userpost"
import DynamicPage from "./pages_13-07-2026/Dynamic Page_23-07-2026/DynamicPage"
import InputPage from "./pages_13-07-2026/InputPage_23-07-2026/InputPage"
import FormValidationPage from "./pages_13-07-2026/FormValidationPage_23-07-2026/FormValidationPage"
import ChangeHandlerPage from "./pages_13-07-2026/ChangeHandlerPage_23-07-2026/ChangeHandlerPage"
import HocPage from "./pages_13-07-2026/HocPage_23-07-2026/HocPage"
import BankPage from "./pages_13-07-2026/BankPage_23-07-2026/BankPage"
import ProductPage from "./pages_13-07-2026/ProductHomePage_23-07-2026/ProductPage"
import ReactPart2Page from "./pages_13-07-2026/React Part 2_pag2_24-07-2026/ReactPart2Page"
import HmsPage from "./pages_13-07-2026/Mini Project Page_24-07-2026/HmsPage"
import ApiCalls2Page from "./pages_13-07-2026/Api-Calls2-Page_27-07-2026/ApiCalls2Page"
import LSEPage from "./pages_13-07-2026/LSEPage_27-07-2026/LSEPage"
import ReactMemoPage from "./pages_13-07-2026/ReactMemoPage_27-07-2026/ReactMemoPage"
import PracticalPage from "./pages_13-07-2026/PracticalPage_27-07-2026/PracticalPage"
import EmpProjectPage from "./pages_13-07-2026/EmpProjectPage_27-07-2026/EmpProjectPage"
import ReactHomePage from "./pages_13-07-2026/ReactHomePage_28-07-2026/ReactHomePage"
import Hoc2Page from "./pages_13-07-2026/Hoc2_Page_28-07-2026/Hoc2Page"
import ComparisonPage from "./pages_13-07-2026/Hoc&ComponentCompositionPage_28-07-2026/ComparisonPage"
import CustomHookPage from "./pages_13-07-2026/CustomHookPage_28-07-2026/CustomHookPage"
import StudentPage2 from "./pages_13-07-2026/StudentPage1_28-07-2026/StudentPage2"
import PureComponentPage from "./pages_13-07-2026/Pure Components Page_29-07-2026/PureComponentPage"
import ReactMemoPage2 from "./pages_13-07-2026/ReactMemoPage2_29-07-2026/ReactMemoPage2";
import UseMemoPage from "./pages_13-07-2026/UseMemoPage_29-07-2026/UseMemoPage";
import UseCallbackPage from "./pages_13-07-2026/UseCallbackPage_29-07-2026/UseCallbackPage"
import ReactPotralPage from "./pages_13-07-2026/React Potral Page_30-07-2026/ReactPotralPage"
import Popup_Page from "./pages_13-07-2026/Popup_Page_30-07-2026/Popup_Page"
import ToolTipPage from "./pages_13-07-2026/ToolTipPage_30-07-2026/ToolTipPage"
import EventBindingPage from "./pages_13-07-2026/EventBindingPage_30-07-2026/EventBindingPage"
import MiniProjectPage3 from "./pages_13-07-2026/MiniProjectPage3_30-07-2026/MiniProjectPage3"
import MiniProjectPage4 from "./pages_13-07-2026/MiniProject4page_30-07-2026/MiniProjectPage4"
import ListRenderingPage from "./pages_13-07-2026/ListRenderingPage_31-07-2026/ListRenderingPage"
import LazyLoadingPage from "./pages_13-07-2026/LazyLoadingPage_31-07-2026/LazyLoadingPage"
import MiniprojectPage5 from "./pages_13-07-2026/Mini Project Page 5_31-07-2026/MiniprojectPage5"
import Layout from "./components_13-07-2026/BrowserRouting_03-07-2026/Layout";
import ProtectedRoute from "./components_13-07-2026/BrowserRouting_03-07-2026/ProtectedRoute";
import About from "./pages_13-07-2026/BrowserRoutingPage_03-07-2026/About";
import Contact from "./pages_13-07-2026/BrowserRoutingPage_03-07-2026/Contact";
import BrowserDashboard from "./pages_13-07-2026/BrowserRoutingPage_03-07-2026/Dashboard";
import Home from "./pages_13-07-2026/BrowserRoutingPage_03-07-2026/Home";
import BrowserLogin from "./pages_13-07-2026/BrowserRoutingPage_03-07-2026/Login";
// import NotFound from "./pages_13-07-2026/BrowserRoutingPage_03-07-2026/NotFound";
import StudentDetails from "./pages_13-07-2026/BrowserRoutingPage_03-07-2026/StudentDetails";
import Students from "./pages_13-07-2026/BrowserRoutingPage_03-07-2026/Students";
import Home1 from "./pages_13-07-2026/MultipleRoutingPage_03-08-2026/Home1";
import About1 from "./pages_13-07-2026/MultipleRoutingPage_03-08-2026/About1";
import Services1 from "./pages_13-07-2026/MultipleRoutingPage_03-08-2026/Services1";
import Contact1 from "./pages_13-07-2026/MultipleRoutingPage_03-08-2026/Contact1";
// import Navbar from "./components_13-07-2026/MultipleRouting_03-08-2026/Navbar";
import Home2 from "./pages_13-07-2026/CompanyWebsitePage_03-08-2026/Home2";
import About2 from "./pages_13-07-2026/CompanyWebsitePage_03-08-2026/About2";
import Services2 from "./pages_13-07-2026/CompanyWebsitePage_03-08-2026/Services2";
import Contact2 from "./pages_13-07-2026/CompanyWebsitePage_03-08-2026/Contact2";
import Layout1 from "./components_13-07-2026/CompanyWebsite_03-08-2026/Layout1";
import DashboardLayout from "./components_13-07-2026/Nested Routing_04-08-2026/DashboardLayout";
import Dashboard3 from "./pages_13-07-2026/Nested Routing Pages_04-08-2026/Dashboard3";
import Profile from "./pages_13-07-2026/Nested Routing Pages_04-08-2026/Profile";
import Settings from "./pages_13-07-2026/Nested Routing Pages_04-08-2026/Settings";
import Orders from "./pages_13-07-2026/Nested Routing Pages_04-08-2026/Orders";
import Home3 from "./pages_13-07-2026/Nested Routing Pages_04-08-2026/Home3";
import Home4 from './pages_13-07-2026/Dynamic Routing Pages_04-08-2026/Home4';
import Students4 from './pages_13-07-2026/Dynamic Routing Pages_04-08-2026/Students4';
import StudentDetails4 from './pages_13-07-2026/Dynamic Routing Pages_04-08-2026/StudentDetails4';
import Home5 from "./pages_13-07-2026/UseNavigatePage_04-08-2026/Home5";
import Navbar from './components_13-07-2026/UseNavigate_04-08-2026/Navbar';
import Login5 from "./pages_13-07-2026/UseNavigatePage_04-08-2026/Login5";
import Dashboard5 from "./pages_13-07-2026/UseNavigatePage_04-08-2026/Dashboard5";
import Home6 from "./pages_13-07-2026/Passing data page_04-08-2026/Home6";
import Dashboard6 from "./pages_13-07-2026/Passing data page_04-08-2026/Dashboard6";
import Navbar6 from "./components_13-07-2026/Passing data Using Routes_04-08-2026/Navbar6";
import Profile6 from "./pages_13-07-2026/Passing data page_04-08-2026/Profile6"
import Products from "./pages_13-07-2026/CompanyWebsitePage_03-08-2026/Products";
import ProductDetails from "./pages_13-07-2026/CompanyWebsitePage_03-08-2026/ProductDetails";
import Login from "./pages_13-07-2026/CompanyWebsitePage_03-08-2026/Login";
import NotFound from './pages_13-07-2026/CompanyWebsitePage_03-08-2026/Notfound';
import Dashboard from "./pages_13-07-2026/CompanyWebsitePage_03-08-2026/Dashboard";
import Careers  from "./pages_13-07-2026/CompanyWebsitePage_03-08-2026/Careers"
import WebpackPage from "./pages_13-07-2026/Webpack Page_06-08-2026/WebpackPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/components"
          element={<ComponentsPage />}
        />

        {/* <Route
          path="/contextapi_13-07-2026"
          element={<ContextPage />}
        /> */}

        <Route
          path="/usercontext_13-07-2026"
          element={<UserPage />}
        />

        <Route
          path="/multipulecomponents_13-07-2026"
          element={<Multipulepages />}
        />

        <Route
          path="/ThemeManagment_13-07-2026"
          element={<ThemePage />}
        />

        <Route
          path="/Miniproject_13-07-2026"
          element={<Projectpage />}
        />

        <Route
          path="/ProfileManagmentPage_14-07-2026"
          element={<Profilepage />}
        />

        <Route
          path="/redux_13-07-2026"
          element={<Reduxpage />}
        />

        <Route
          path="/ReducerFunctionPage_15-07-2026"
          element={<ReducerPage />}
        />
        <Route
          path="/TodoPage_15-07-2026"
          element={<TodoPage/>}
        />
        {/* <Route
          path="/DispatchPage_15-07-2026"
          element={<DispatchPage/>}
        /> */}
        <Route
          path="/ShoppingCartPage_15-07-2026"
          element={<ShoppingPage/>}
        />
        <Route
          path="/RegistrationPage_15-07-2026"
          element={<RegistrationPage/>}
        />
        <Route
          path="/ContextApiPage_16-07-2026"
          element={<Mainpage/>}
        />

        <Route
          path="/UseContextpage_16-07-2026"
          element={<ContextPage/>}
        />
        <Route
          path="/CounterPage_16-07-2026"
          element={<CounterPage/>}
        />
        <Route
          path="/UserReducerPage_16-07-2026"
          element={<UserReducerPage/>}
        />
        <Route
          path="/E-comercePage_16-07-2026"
          element={<EcomercePage/>}
        />
        <Route
          path="/MiniProjectPage_16-07-2026"
          element={<ProjectPage1/>}
        />
       <Route
          path="/ComponentPage_17-07-2026"
          element={<StudentPage />}
        />
        <Route
          path="/ClassComponentPage_17-07-2026"
          element={<ClassPage/>}
        />
        <Route
          path="/Props&StatesPage_17-07-2026"
          element={<EmpPage/>}
        />
        <Route
          path="/StatePage_17-07-2026"
          element={<StatePage/>}
        />
        <Route
          path="/ParenttoChildPage_17-07-2026"
          element={<ParenttoChild/>}
        />
        <Route
          path="/ChildtoParent_17-07-2026"
          element={<ChildtoParent/>}
        />
        <Route
          path="/ChildtoChild_17-07-2026"
          element={<ChildtoChildPage/>}
        />
        <Route
          path="/ApiPage_17-07-2026"
          element={<Apipage/>}
        />
        <Route
          path="/ChildPage_17-07-2026"
          element={<ChildPage/>}
        />
        <Route
          path="/MiniProjectPage_17-07-2026"
          element={<MainPage/>}
        />
        <Route
          path="/ConditionalRenderingPage_20-07-2026"
          element={<RenderingPage/>}
        />
        <Route
          path="/MessagePage_20-07-2026"
          element={<MessagePage/>}
        />
        <Route
          path="/UserAtunticationPage_20-07-2026"
          element={<UserPage1/>}
        />
        <Route
          path="/LoadingPage_20-07-2026"
          element={<LoadingPage/>}
        />
        <Route
          path="/LoginPage_20-07-2026"
          element={<LoginPage20/>}
        />
        <Route
          path="/DashboardPages_20-07-2026"
          element={<DashboardPage20/>}
        />
        <Route
          path="/UseEffectPage_21-07-2026"
          element={<UseEffectPage/>}
        />
        <Route
          path="/ApiPage1_21-07-2026"
          element={<ApiPage1/>}
        />
        <Route
          path="/AxiosPage_21-07-2026"
          element={<AxiosPage/>}
        />
        <Route
          path="/ApiDataPage_21-07-2026"
          element={<ApiDataPage/>}
        />
        <Route
          path="/UserPostPage_21-07-2026"
          element={<Userpost/>}
        />
        <Route
          path="/Dynamic Page_23-07-2026"
          element={<DynamicPage/>}
        />
        <Route
          path="/InputPage_23-07-2026"
          element={<InputPage/>}
        />
        <Route
          path="/FormValidationPage_23-07-2026"
          element={<FormValidationPage/>}
        />
        <Route
          path="/ChangeHandlerPage_23-07-2026"
          element={<ChangeHandlerPage/>}
        />
        <Route
          path="/HocPage_23-07-2026"
          element={<HocPage/>}
        />
        <Route
          path="/BankPage_23-07-2026"
          element={<BankPage/>}
        />
        <Route
          path="/ProductHomePage_23-07-2026"
          element={<ProductPage/>}
        />
        <Route
          path="/React Part 2_pag2_24-07-2026"
          element={<ReactPart2Page/>}
        />
        <Route
          path="/Mini Project Page_24-07-2026"
          element={<HmsPage/>}
        />
        <Route
          path="/Api-Calls2-Page_27-07-2026"
          element={<ApiCalls2Page/>}
        />
        <Route
          path="/LSEPage_27-07-2026"
          element={<LSEPage/>}
        />
        <Route
          path="/ReactMemoPage_27-07-2026"
          element={<ReactMemoPage/>}
        />
        <Route
          path="/PracticalPage_27-07-2026"
          element={<PracticalPage/>}
        />
        <Route
          path="/EmpProjectPage_27-07-2026"
          element={<EmpProjectPage/>}
        />
        <Route
          path="/ReactHomePage_28-07-2026"
          element={<ReactHomePage/>}
        />
        <Route
          path="/Hoc2_Page_28-07-2026"
          element={<Hoc2Page/>}
        />
        <Route
          path="/Hoc&ComponentCompositionPage_28-07-2026"
          element={<ComparisonPage/>}
        />
        <Route
          path="/CustomHookPage_28-07-2026"
          element={<CustomHookPage/>}
        />
        <Route
          path="/StudentPage1_28-07-2026"
          element={<StudentPage2/>}
        />
        <Route
          path="/Pure Components Page_29-07-2026"
          element={<PureComponentPage/>}
        />
        <Route
          path="/ReactMemoPage2_29-07-2026"
          element={<ReactMemoPage2/>}
        />
        <Route
          path="/UseMemoPage_29-07-2026"
          element={<UseMemoPage/>}
        />
        <Route
          path="/UseCallbackPage_29-07-2026"
          element={<UseCallbackPage/>}
        />
        <Route
          path="/React Potral Page_30-07-2026"
          element={<ReactPotralPage/>}
        />
        <Route
          path="/Popup_Page_30-07-2026"
          element={<Popup_Page/>}
        />
        <Route
          path="/ToolTipPage_30-07-2026"
          element={<ToolTipPage/>}
        />
        <Route
          path="/EventBindingPage_30-07-2026"
          element={<EventBindingPage/>}
        />
        <Route
          path="/MiniProjectPage3_30-07-2026"
          element={<MiniProjectPage3/>}
        />
        <Route
          path="/MiniProject4page_30-07-2026"
          element={<MiniProjectPage4/>}
        />
        <Route
          path="/ListRenderingPage_31-07-2026"
          element={<ListRenderingPage/>}
        />
        <Route
          path="/LazyLoadingPage_31-07-2026"
          element={<LazyLoadingPage/>}
        />
         <Route
          path="/Mini Project Page 5_31-07-2026"
          element={<MiniprojectPage5/>}
        />
{/* 
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="contact" element={<Contact />} />

          <Route path="login" element={<BrowserLogin />} />

          <Route path="students" element={<Students />} />

          <Route
            path="students/:id"
            element={<StudentDetails />}
          />

          <Route
            path="dashboard"
            element={ <ProtectedRoute isLoggedIn={true}> <BrowserDashboard /></ProtectedRoute> }
          />

          <Route path="*" element={<NotFound />} />
        </Route>


        <Route path="/" element = {<Navbar/>}>

        <Route index element={<Home1 />} />

        <Route path="about" element={<About1 />} />

        <Route path="services" element={<Services1 />} />

        <Route path="contact" element={<Contact1 />} />

        </Route> */}

{/* CompanyWebsitePage_03-08-2026 */}

        {/* <Route path="/" element={<Layout1 />}>
          
          <Route index element={<Home2 />} />

          
          <Route path="about" element={<About2 />} />
          <Route path="services" element={<Services2 />} />
          <Route path="contact" element={<Contact2 />} />

          
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />

          
          <Route path="careers" element={<Careers />} />

          
          <Route path="login" element={<Login />} />

          
          <Route
            path="dashboard"
            element={
              <ProtectedRoute isLoggedIn={true}>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          
          <Route path="*" element={<NotFound />} />
        </Route> */}


        {/* Nested Routing Pages_04-08-2026 */}

        <Route path="/Nested Routing Pages_04-08-2026" element={<Home3 />} />

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard3 />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="orders" element={<Orders />} />
        </Route>

       {/* Dynamic Routing Pages_04-08-2026 */}

        <Route path="/Dynamic Routing Pages_04-08-2026" element={<Home4 />} />

        <Route path="/students" element={<Students4 />} />

        <Route
          path="/students/:id"
          element={<StudentDetails4 />}
        />


        {/* usenavigate Routing Pages_04-08-2026 */}
         <Route path="/" element = {<Navbar/>}>

        <Route index element={<Home5 />} />

        <Route path="Dashboard" element={<Dashboard5 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="Login" element={<Login5 />} />

        </Route> 
      {/* Passing data page_04-08-2026 */}
      <Route path="/Passing data page_04-08-2026" element={<Home6 />} />

        <Route path="/Navbar" element={<Navbar6 />}>
          <Route index element={<Dashboard6 />} />
          <Route path="profile6" element={<Profile6 />} />
          
        </Route>

        <Route
          path="/Webpack Page_06-08-2026"
          element={<WebpackPage/>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;