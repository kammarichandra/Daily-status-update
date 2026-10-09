import { Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <Routes>
      <Route path="/FunctionalPage" element={<FunctionalPage />} />
      <Route path="/ProfilePage" element={<ProfilePage  />} />
      <Route path="/PropsPage" element={<PropsPage  />} />
      <Route path="/Employee" element={<Employee  />} />
      <Route path="/EmployeePage" element={<EmployeePage  />} />
      <Route path="/ProductUIPage" element={<ProductUIPage  />} />
      <Route path="/Events_formsPage" element={<Events_formsPage  />} />
      <Route path="/ListPage" element={<ListPage  />} />
      <Route path="/UseEffectPage" element={<UseEffectPage  />} />
      <Route path="/UserRegistrationPage" element={<UserRegistrationPage  />} />
      <Route path="/ApiPage" element={<ApiPage/>} />
      <Route path="/LoadingPage" element={<LoadingPage/>} />
      <Route path="/DynamicPage" element={<DynamicPage/>} />
      <Route path="/ApiMethodsPage" element={<ApiMethodsPage/>} />
      <Route path="/UserManagmentPage" element={<UserManagmentPage/>} />
      <Route path="/ContextApiPage" element={<ContextApiPage/>} />
      <Route path="/CostomHookPage" element={<CostomHookPage/>} />
      <Route path="/RevisionPage" element={<RevisionPage/>} />
      <Route path="/MiniProjectPage" element={<MiniProjectPage/>} />
    </Routes>
  );
}

export default App;