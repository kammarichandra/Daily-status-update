import { Routes, Route, Navigate } from 'react-router-dom';
import FunctionalPage from './Pages/FunctionalPage_05-10-2026/FunctionalPage';
import ProfilePage from './Pages/ProfilePage_05-10-2026/ProfilePage';
import PropsPage from './Pages/PropsPage_06-10-2026/PropsPage';
import Employee from './Pages/Parent_child_06-10-2026/Employee';
import EmployeePage from './Pages/Employee Dashboard Page_06-10-2026/EmployeePage';
import ProductUIPage from './Pages/Product Ui Page_06-10-2026/ProductUIPage';
import Events_formsPage from './Pages/Events_formsPage_07-10-2026/Events_formsPage';
import ListPage from './Pages/List_conditionalPage_07-10-2026/ListPage';
import UseEffectPage from './Pages/UseEffect Page_07-10-2026/UseEffectPage';
import UserRegistrationPage from './Pages/UserRegistrationPage_07-10-2026/UserRegistrationPage';
import ApiPage from './Pages/React Api Page_08-10-2026/ApiPage';
import LoadingPage from './Pages/Loading Page_08-10-2026/LoadingPage';
import DynamicPage from './Pages/DynamicPage_08-10-2026/DynamicPage';
import ApiMethodsPage from './Pages/Api Methods Page_08-10-2026/ApiMethodsPage';
import UserManagmentPage from './Pages/User Managment Page_08-10-2026/UserManagmentPage';
import ContextApiPage from './Pages/Context Api Page_09-10-2026/ContextApiPage';
import CostomHookPage from './Pages/CustomHookPage_09-10-2026/CostomHookPage';
import RevisionPage from './Pages/Revision Page_09-10-2026/RevisionPage';
// import MiniProjectPage from './Pages/Mini Project_09-10-2026/MiniProjectPage';
import { AuthProvider } from './Components/React Router_12-10-2026/Protected Routes/Context/AuthContext';
import UsereduserPage from './Pages/Advance SM Page_13-10-2026/UsereduserPage';
import ContextPage from './Pages/Context Page_13-10-2026/ContextPage';
import ReduxPage from './Pages/Redux Page_13-10-2026/ReduxPage';
import EmpPotralPage from './Pages/Emp Potral Page_13-10-2026/EmpPotralPage';
import RenderingPage from './Pages/Performance Page_14-10-2026/RenderingPage';
import ReactMemoPage from './Pages/Performance Page_14-10-2026/ReactMemoPage';
import UseCallbackPage from './Pages/Performance Page_14-10-2026/UseCallbackPage';

import { Suspense } from 'react';
import Loading from './Components/Performance Optimization_14-10-2026/React Lazy/components/Loading';
import Dashboard from './Components/Performance Optimization_14-10-2026/React Lazy/pages/Dashboard';
import { lazy } from 'react';
import PerformanceTestingPage from './Pages/Performance Page_14-10-2026/PerformanceTestingPage';
import AnalyticsPage from './Pages/AnalyticsPage_14-10-2026/AnalyticsPage';
import ReusablePage from './Pages/Reusable Page_15-10-2026/ReusablePage';
import CustomHookPage from './Pages/Reusable Page_15-10-2026/CustomHookPage';
import ApiServisePage from './Pages/Reusable Page_15-10-2026/ApiServisePage';
import ErrorHandlingPage from './Pages/Reusable Page_15-10-2026/ErrorHandlingPage';


const Reports = lazy(() => import("./Components/Performance Optimization_14-10-2026/React Lazy/pages/Reports"));
const Performance = lazy(() => import("./Components/Performance Optimization_14-10-2026/React Lazy/pages/Performance"));
const Settings = lazy(() => import("./Components/Performance Optimization_14-10-2026/React Lazy/pages/settings"));
import MiniProjectPage from './Pages/Reusable Page_15-10-2026/MiniProjectPage';
import TestingPage from './Pages/TestingPage_16-10-2026/TestingPage';

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/FunctionalPage" element={<FunctionalPage />} />
        <Route path="/ProfilePage" element={<ProfilePage />} />
        <Route path="/PropsPage" element={<PropsPage />} />
        <Route path="/Employee" element={<Employee />} />
        <Route path="/EmployeePage" element={<EmployeePage />} />
        <Route path="/ProductUIPage" element={<ProductUIPage />} />
        <Route path="/Events_formsPage" element={<Events_formsPage />} />
        <Route path="/ListPage" element={<ListPage />} />
        <Route path="/UseEffectPage" element={<UseEffectPage />} />
        <Route path="/UserRegistrationPage" element={<UserRegistrationPage />} />
        <Route path="/ApiPage" element={<ApiPage />} />
        <Route path="/LoadingPage" element={<LoadingPage />} />
        <Route path="/DynamicPage" element={<DynamicPage />} />
        <Route path="/ApiMethodsPage" element={<ApiMethodsPage />} />
        <Route path="/UserManagmentPage" element={<UserManagmentPage />} />
        <Route path="/ContextApiPage" element={<ContextApiPage />} />
        <Route path="/CostomHookPage" element={<CostomHookPage />} />
        <Route path="/RevisionPage" element={<RevisionPage />} />
        <Route path="/MiniProjectPage" element={<MiniProjectPage />} />
        <Route path="/UsereduserPage" element={<UsereduserPage />} />
        <Route path="/ContextPage" element={<ContextPage />} />
        <Route path="/ReduxPage" element={<ReduxPage />} />
        <Route path="/EmpPotralPage" element={<EmpPotralPage />} />
        <Route path="/RenderingPage" element={<RenderingPage />} />
        <Route path="/ReactMemoPage" element={<ReactMemoPage />} />
        <Route path="/UseCallbackPage" element={<UseCallbackPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/performance" element={<Performance />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/PerformanceTestingPage" element={<PerformanceTestingPage />} />
        <Route path="/AnalyticsPage" element={<AnalyticsPage />} />
        <Route path="/ReusablePage" element={<ReusablePage />} />
        <Route path="/CustomHookPage" element={<CustomHookPage />} />
        <Route path="/ApiServisePage" element={<ApiServisePage />} />
        <Route path="/ErrorHandlingPage" element={<ErrorHandlingPage />} />
        <Route path="/MiniProjectPage" element={<MiniProjectPage />} />
        <Route path="/TestingPage" element={<TestingPage />} />
      </Routes>
      </Suspense> 
    </AuthProvider>
  );
}

export default App;