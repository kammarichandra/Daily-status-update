
import { lazy, Suspense } from 'react';
import FunComponentsPage from './Pages/Fun Components Page_21-10-2026/FunComponentsPage';
import { Link, Navigate, Outlet, Route, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import PropsPage from './Pages/Fun Components Page_21-10-2026/PropsPage';
import ConditionalPage from './Pages/Fun Components Page_21-10-2026/ConditionalPage';
import FormHandlingPage from './Pages/Fun Components Page_21-10-2026/FormHandlingPage';
import SMSPage from './Pages/Fun Components Page_21-10-2026/SMSPage';
import UseEffectPage from './Pages/Side Actions Page_22-10-2026/UseEffectPage';
import ApiIntegrationPage from './Pages/Side Actions Page_22-10-2026/ApiIntegrationPage';
import CrudPage from './Pages/Side Actions Page_22-10-2026/CrudPage';
import ContextPage from './Pages/Side Actions Page_22-10-2026/ContextPage';
import UseReduserPage from './Pages/Side Actions Page_22-10-2026/UseReduserPage';
import CustomHookPage from './Pages/Side Actions Page_22-10-2026/CustomHookPage';
import USMPage from './Pages/Side Actions Page_22-10-2026/USMPage';
import NotFound from './Components/React Routers_23-10-2026/Pages/NotFound';
import Dashboard from './Components/React Routers_23-10-2026/Pages/Dashboard';
import EmpList from './Components/React Routers_23-10-2026/Pages/EmpList';
import EmpDetails from './Components/React Routers_23-10-2026/Pages/EmpDetails';
import AddEmployee from './Components/React Routers_23-10-2026/Pages/AddEmp';
import EditEmp from './Components/React Routers_23-10-2026/Pages/EditEmp';
import Layout from './Components/React Routers_23-10-2026/Components/Layout';
import ProtectedRoute from './Components/React Routers_23-10-2026/Components/ProtectedRoute';
import Login1 from './Components/Advance React_23-10-2026/Pages/Login1';
import Advance from './Components/Advance React_23-10-2026/Advance';
import Loader from './Components/Performance Optimization_23-10-2026/Components/Loader';
import { EmployeeProvider } from './Components/React Emp Potral_23-10-2026/Context/EmpContext';

const PerformanceDashboard = lazy(() => import('./Components/Performance Optimization_23-10-2026/Pages/Dashboard'));
const PerformanceEmpList = lazy(() => import('./Components/Performance Optimization_23-10-2026/Pages/EmpList'));
const PerformanceEmpDetails = lazy(() => import('./Components/Performance Optimization_23-10-2026/Pages/EmpDetails'));
import PortalProtectedRoute from './Components/React Emp Potral_23-10-2026/Context/ProtectedRoute';
import PortalEmpForm from './Components/React Emp Potral_23-10-2026/Pages/EmpForm';
import PortalEmpDetails from './Components/React Emp Potral_23-10-2026/Pages/EmpDetails';
import PortalEmpList from './Components/React Emp Potral_23-10-2026/Pages/EmpList';
import PortalDashboard from './Components/React Emp Potral_23-10-2026/Pages/Dashboard1';
import PortalLogin from './Components/React Emp Potral_23-10-2026/Pages/Login2';

function PerformanceLayout() {
  return (
    <>
      <nav>
        <Link to="/performance/dashboard">Dashboard</Link>
        {" | "}
        <Link to="/performance/employees">Employees</Link>
      </nav>
      <Outlet />
    </>
  );
}

function EmployeePortalLayout() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("login");
    navigate("/portal/login", { replace: true });
  }

  return (
    <>
      <nav>
        <Link to="/portal/dashboard">Dashboard</Link>{" "}
        <Link to="/portal/employees">Employees</Link>{" "}
        <button type="button" onClick={handleLogout}>Logout</button>
      </nav>
      <Outlet />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/FunComponentsPage" element={<FunComponentsPage />} />
      <Route path="/PropsPage" element={<PropsPage />} />
      <Route path="/ConditionalPage" element={<ConditionalPage />} />
      <Route path="/FormHandlingPage" element={<FormHandlingPage />} />
      <Route path="/SMSPage" element={<SMSPage />} />
      <Route path="/UseEffectPage" element={<UseEffectPage />} />
      <Route path="/ApiIntegrationPage" element={<ApiIntegrationPage />} />
      <Route path="/CrudPage" element={<CrudPage />} />
      <Route path="/ContextPage" element={<ContextPage />} />
      <Route path="/UseReduserPage" element={<UseReduserPage />} />
      <Route path="/CustomHookPage" element={<CustomHookPage />} />
      <Route path="/USMPage" element={<USMPage />} />


      {/* Public Route */}
      <Route path="/login" element={<Login1 />} />

      {/* Protected Routes */}
      <Route path="/" element={<ProtectedRoute />} >

        {/* Shared Layout */}
        <Route element={<Layout />}>

          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />} />

          <Route path="employees" element={<EmpList />} />

          <Route path="employees/:id" element={<EmpDetails />} />

          <Route path="employees/add" element={<AddEmployee />} />

          <Route path="employees/:id/edit" element={<EditEmp />} />

        </Route>
      </Route>

      <Route path="/Advance" element={<Advance />} />

      <Route path="/performance" element={<PerformanceLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={ <Suspense fallback={<Loader />}>
              <PerformanceDashboard />
            </Suspense>
          }
        />
        <Route path="employees" element={
            <Suspense fallback={<Loader />}>
              <PerformanceEmpList />
            </Suspense>
          }
        />
        <Route path="employees/:id" element={
            <Suspense fallback={<Loader />}>
              <PerformanceEmpDetails />
            </Suspense>
          }
        />
      </Route>

      <Route
        path="/portal"
        element={
          <EmployeeProvider>
            <Outlet />
          </EmployeeProvider>
        }
      >
        <Route path="login" element={<PortalLogin />} />
        <Route element={<PortalProtectedRoute />}>
          <Route element={<EmployeePortalLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<PortalDashboard />} />
            <Route path="employees" element={<PortalEmpList />} />
            <Route path="employees/:id" element={<PortalEmpDetails />} />
            <Route path="add" element={<PortalEmpForm />} />
            <Route path="edit/:id" element={<PortalEmpForm />} />
          </Route>
        </Route>
      </Route>
      {/* 404 Page */}
      <Route path="*" element={<NotFound />} />


    </Routes>
  )
}

export default App