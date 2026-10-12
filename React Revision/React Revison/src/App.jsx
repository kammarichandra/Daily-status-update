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
import MiniProjectPage from './Pages/Mini Project_09-10-2026/MiniProjectPage';
// import Home from './Components/React Router_12-10-2026/Pages/Home';
// import About from './Components/React Router_12-10-2026/Pages/About';
// import Contact from './Components/React Router_12-10-2026/Pages/Contact';
// import NotFound from './Components/React Router_12-10-2026/Pages/NotFound';
// import Main from './Components/React Router_12-10-2026/Main/Main';
import Home1 from './Pages/Dynamic Router Page_12-10-2026/Home1';
import About1 from './Pages/Dynamic Router Page_12-10-2026/About1';
import Contact1 from './Pages/Dynamic Router Page_12-10-2026/Contact1';
import EmployeeList from './Pages/Dynamic Router Page_12-10-2026/EmployeeList';
import AddEmployee from './Pages/Dynamic Router Page_12-10-2026/AddEmployee';
import EmployeeDetails from './Pages/Dynamic Router Page_12-10-2026/EmployeeDetails';
import Login from './Pages/Dynamic Router Page_12-10-2026/Login';
import DynamicRouting from './Components/React Router_12-10-2026/Dynamic Routing/DynamicRouting';
import DashboardLayout from './Components/React Router_12-10-2026/Nested Routing/Components/DashboardLayout';
// import Dashboard from './Components/React Router_12-10-2026/Nested Routing/Pages/Dashboard';
import DashboardEmployees from './Components/React Router_12-10-2026/Nested Routing/Pages/DashboardEmployees';
import Settings from './Components/React Router_12-10-2026/Nested Routing/Pages/Settings';
import QueryPage from './Pages/Query Parameter Page_12-10-2026/QueryPage';
import { AuthProvider } from './Components/React Router_12-10-2026/Protected Routes/Context/AuthContext';
// import ProtectedRoute from './Components/React Router_12-10-2026/Protected Routes/Components/ProtectedRoute';
import ProtectedLogin from './Components/React Router_12-10-2026/Protected Routes/Pages/Login';
import Login2 from './Components/Mini Project_12-10-2026/Pages/Login2';
import ProtectedRoute from './Components/Mini Project_12-10-2026/Components/ProtectedRoute';
import Dashboard from './Components/Mini Project_12-10-2026/Pages/Dashboard';
import EmpList from './Components/Mini Project_12-10-2026/Pages/EmpList';
import EmpDetails from './Components/Mini Project_12-10-2026/Pages/EmpDetails';
import AddEmp from './Components/Mini Project_12-10-2026/Pages/AddEmp';


function App() {
  return (
    <AuthProvider>
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

        {/* <Route path="/" element={<Main />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> */}

        {/* Dynamic Routing */}
        {/* <Route path="/DynamicRouting" element={<DynamicRouting />} />
      <Route path="/" element={<Home1 />} />
      <Route path="/about" element={<About1 />} />
      <Route path="/contact" element={<Contact1 />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/employees/add" element={<AddEmployee />} />
      <Route path="/employees/:id" element={<EmployeeDetails/>} />
      <Route path="/login" element={<Login />} /> */}

        {/* Nested routing */}

        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route path="/login" element={<ProtectedLogin />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="employees" element={<DashboardEmployees />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* <Route path="/QueryPage" element={<QueryPage />} /> */}

        {/* Public employee routes from earlier tasks */}
        {/* <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />

        <Route path="*" element={<h1 className="not-found">404 - Page Not Found</h1>} /> */}

        {/* <Route path="/login" element={<Login2 />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<EmpList />} />
          <Route path="/employees/:id" element={<EmpDetails />} />
          <Route path="/add-employee" element={<AddEmp />} />
        </Route>

        <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}

      </Routes>
    </AuthProvider>
  );
}

export default App;