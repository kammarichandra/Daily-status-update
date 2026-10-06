import { Routes, Route } from 'react-router-dom';
import FunctionalPage from './Pages/FunctionalPage_05-10-2026/FunctionalPage';
import ProfilePage from './Pages/ProfilePage_05-10-2026/ProfilePage';
import PropsPage from './Pages/PropsPage_06-10-2026/PropsPage';
import Employee from './Pages/Parent_child_06-10-2026/Employee';
import EmployeePage from './Pages/Employee Dashboard Page_06-10-2026/EmployeePage';
import ProductUIPage from './Pages/Product Ui Page_06-10-2026/ProductUIPage';


function App() {
  return (
    <Routes>
      <Route path="/FunctionalPage" element={<FunctionalPage />} />
      <Route path="/ProfilePage" element={<ProfilePage  />} />
      <Route path="/PropsPage" element={<PropsPage  />} />
      <Route path="/Employee" element={<Employee  />} />
      <Route path="/EmployeePage" element={<EmployeePage  />} />
      <Route path="/ProductUIPage" element={<ProductUIPage  />} />
    </Routes>
  );
}

export default App;