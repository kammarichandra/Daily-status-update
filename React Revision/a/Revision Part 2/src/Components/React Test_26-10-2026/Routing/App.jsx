import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import EmpDetails from "./Pages/EmpDetails";
import EmpList from "./Pages/EmpList";
import Login from "./Pages/Login";
import Notfound from "./Components/Notfound";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employees"
        element={
          <ProtectedRoute>
            <EmpList />
          </ProtectedRoute>
        }
      />
      <Route
        path="/employees/:id"
        element={
          <ProtectedRoute>
            <EmpDetails />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;
