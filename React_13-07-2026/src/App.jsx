import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComponentsPage from "./pages_13-07-2026/components/ComponentsPage";
import ReduxPage from "./pages_13-07-2026/redux_13-07-2026/Reduxpage";
import ContextPage from "./pages_13-07-2026/Contextapi_13-07-2026/Contextpage";
import UserPage from "./pages_13-07-2026/Contextapi_13-07-2026/Userpage";
import Multipulepages from "./pages_13-07-2026/multipulecomponents_13-07-2026/multipulepages";
import ThemePage from "./pages_13-07-2026/ThemeManagment_13-07-2026/ThemePage";
import Projectpage from "./pages_13-07-2026/Miniproject_13-07-2026/Projectpage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/components" element={<ComponentsPage />} />

        <Route path="/redux" element={<ReduxPage />} />

        <Route
          path="/contextapi_13-07-2026"
          element={<ContextPage />}
        />

        <Route
          path="/usercontext_13-07-2026"
          element={<UserPage />}
        />

        <Route
          path="/multipulecomponents_13-07-2026"
          element={<Multipulepages />}
        />

        <Route
          path="/ThemeManagment_13-07-2026"
          element={<ThemePage />}
        />

        <Route
          path="/Miniproject_13-07-2026"
          element={<Projectpage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;