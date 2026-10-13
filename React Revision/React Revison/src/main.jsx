import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import "./App.css";
import "./Employee.css"
import "./Product.css"
import "./Dynamic.css"
import "./Nested.css"
import "./EmpPotral.css"
import ContextApi from './Components/Context Api_09-10-2026/ContextApi.jsx';
import { Provider } from 'react-redux';
import { store } from './Components/Advance State Managment_13-10-2026/Redux ToolKit/app/store.js';
import { EmployeeProvider } from './Components/Emp Potral_13-10-2026/Context/EmpContext.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ContextApi>
        <Provider store={store}>
          <EmployeeProvider>
          <App />
          </EmployeeProvider>
        </Provider>
      </ContextApi>
    </BrowserRouter>
  </StrictMode>
);