import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import { Provider } from 'react-redux';
import { CartProvider } from "./Components_10-08-2026/MiniProject_12-08-2026/Context/CartContext.jsx";
import { store } from "./Components_10-08-2026/MiniProject_12-08-2026/Redux/Store1.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CartProvider>
          <App />
        </CartProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);