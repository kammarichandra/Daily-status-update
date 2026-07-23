import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
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
import Login from "./pages_13-07-2026/LoginPage_20-07-2026/Login"
import Dashboard from "./pages_13-07-2026/DashboardPages_20-07-2026/Dashboard"
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
          element={<Login/>}
        />
        <Route
          path="/DashboardPages_20-07-2026"
          element={<Dashboard/>}
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;