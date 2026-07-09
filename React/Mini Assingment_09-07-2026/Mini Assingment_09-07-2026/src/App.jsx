import Counter from "./components/Counter";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ThemeSwitcher from "./components/ThemeSwitcher";
import AppProvider from "./context/AppContext";

function App() {

  return (

    <AppProvider>

      <div className="container">

        <h1>Mini React Assignment</h1>

        <Header />

        <ThemeSwitcher />

        <Counter />

        <Profile />

      </div>

    </AppProvider>

  );

}

export default App;