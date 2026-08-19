import { Outlet } from "react-router-dom";

import Navbar1 from "../Components/Navbar1";
import Notification from "../Components/Notification";

function MainLayout() {
  return (
    <>
      <Navbar1 />

      <Notification />

      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;