// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// import { Provider } from "react-redux";
// import Store4 from "./components_13-07-2026/E-Commerce Cart Application_16-07-2026/Store4";
// import { ThemeProvider } from "./components_13-07-2026/E-Commerce Cart Application_16-07-2026/ThemeContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={Store4}>
//     <ThemeProvider>
//       <App />
//     </ThemeProvider>
//   </Provider>
// );

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";

import store5 from "./components_13-07-2026/Mini Project_16-07-2026/Store5";

import { ThemeProvider } from "./components_13-07-2026/Mini Project_16-07-2026/ThemeContext";
import { UserProvider } from "./components_13-07-2026/Mini Project_16-07-2026/UserContext";



ReactDOM.createRoot( document.getElementById("root")).render(

    <Provider store={store5}>

        <ThemeProvider>

            <UserProvider>

                <App />

            </UserProvider>

        </ThemeProvider>

    </Provider>

);