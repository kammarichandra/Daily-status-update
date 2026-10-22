
import FunComponentsPage from './Pages/Fun Components Page_21-10-2026/FunComponentsPage';
import { Route } from 'react-router-dom';
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
    </Routes>
  )
}

export default App