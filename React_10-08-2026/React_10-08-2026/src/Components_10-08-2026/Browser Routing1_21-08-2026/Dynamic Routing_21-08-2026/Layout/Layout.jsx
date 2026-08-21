import { Outlet } from "react-router-dom";
import Navbar2 from "../Components/Navbar2";

function Layout() {
  return (
    <>
      <Navbar2 />

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;