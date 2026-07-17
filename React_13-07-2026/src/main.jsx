

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";

import store5 from "./components_13-07-2026/Mini Project_16-07-2026/Store5";

import { ThemeProvider } from "./components_13-07-2026/Mini Project_16-07-2026/ThemeContext";
import { UserProvider } from "./components_13-07-2026/Mini Project_16-07-2026/UserContext";
import { EmployeeProvider } from "./components_13-07-2026/MiniProject_17-07-2026/EmpContext/EmpContext";

ReactDOM.createRoot( document.getElementById("root")).render(

    <Provider store={store5}>
        <EmployeeProvider>
        <ThemeProvider>

            <UserProvider>

                <App />

            </UserProvider>

        </ThemeProvider>
        </EmployeeProvider>

    </Provider>

);
