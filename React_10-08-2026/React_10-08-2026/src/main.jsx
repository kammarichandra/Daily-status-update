import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";

import App from "./App.jsx";

/* =========================
   REDUX TOOLKIT STORE
========================= */

import Store from "./Components_10-08-2026/ReduxToolKit_19-08-2026/Data/Store.js";


/* =========================
   FOOD DELIVERY CONTEXTS
========================= */

import {
  AuthProvider
} from "./Components_10-08-2026/Food Delivery App_19-08-2026/Context/AuthContext.jsx";

import {
  ThemeProvider
} from "./Components_10-08-2026/Food Delivery App_19-08-2026/Context/ThemeContext.jsx";

import {
  NotificationProvider
} from "./Components_10-08-2026/Food Delivery App_19-08-2026/Context/NotificationContext.jsx";

import {
  CartProvider
} from "./Components_10-08-2026/Food Delivery App_19-08-2026/Context/CartContext.jsx";


createRoot(
  document.getElementById("root")
).render(

  <StrictMode>

    {/* React Router */}
    <BrowserRouter>

      {/* Redux Toolkit */}
      <Provider store={Store}>

        {/* Authentication Context */}
        <AuthProvider>

          {/* Theme Context */}
          <ThemeProvider>

            {/* Notification Context */}
            <NotificationProvider>

              {/* Cart Context */}
              <CartProvider>

                <App />

              </CartProvider>

            </NotificationProvider>

          </ThemeProvider>

        </AuthProvider>

      </Provider>

    </BrowserRouter>

  </StrictMode>
);
