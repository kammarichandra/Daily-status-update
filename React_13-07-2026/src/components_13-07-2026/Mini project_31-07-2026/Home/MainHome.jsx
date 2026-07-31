import React, { Suspense } from "react";
import Dashboard from "../Pages/Dashboard";
import Loader from "../Components/Loader";


// let  Reports = React.lazy(() => import("../Pages/Reports"));

function MainHome() {

  return (
    <>
      <Dashboard />

      <Suspense fallback={<Loader />}>
        {/* <Reports /> */}
      </Suspense>
    </>
  );

}

export default MainHome;