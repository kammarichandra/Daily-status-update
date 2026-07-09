import React from "react";
import Counter from "./Local State Component_09-07-2026/Counter";
import UserForm from "./Local State Component_09-07-2026/userform";
import TodoList from "./Local State Component_09-07-2026/Todolist";
import UserProvider from "./Global State_09-07-2026/Usercontext";
import UserProfile from "./Global State_09-07-2026/Userprofile";
import UserGreeting from "./Global State_09-07-2026/Usergreetings";
import AppProvider from "./ContrextApi_09-07-2026/contrext";
import Header from "./ContrextApi_09-07-2026/Header";
import Profile from "./ContrextApi_09-07-2026/Profile";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <h1 className="app-title">React State Management Demo</h1>

        <div className="demo-section local-section">
          <h2>Local State</h2>
          <Counter />
          <hr />
          <UserForm />
          <hr />
          <TodoList />
        </div>
        
<h1>Context API</h1>
        <div className="demo-section">
          <h2>Context API Example</h2>
          <AppProvider>
            <Header />
            <hr />
            <Profile />
          </AppProvider>
        </div>

<h1>Global State Example</h1>
        <div className="demo-section global-section">
          <h2>Global State Example</h2>
          <UserProfile />
          <hr />
          <UserGreeting />
        </div>
      </div>
    </UserProvider>
  );
}

export default App;