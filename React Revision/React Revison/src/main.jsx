import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import "./App.css";
import "./Employee.css"
import "./Product.css"
import ContextApi from './Components/Context Api_09-10-2026/ContextApi.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ContextApi>
        <App />
    </ContextApi>
    </BrowserRouter>
  </StrictMode>
);