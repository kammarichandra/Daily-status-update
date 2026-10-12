import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

function DashboardLayout() {
  return (

    <div className="dashboard-layout">
      <Header />

      <div className="dashboard-body">
        <Sidebar />

        <main className="dashboard-content">
          <Outlet />
        </main>

      </div>

    </div>
    
  );
}

export default DashboardLayout;