import Home from "../../components_13-07-2026/Mini Project_16-07-2026/Home";
import { ThemeContext } from "../../components_13-07-2026/Mini Project_16-07-2026/ThemeContext";
import { useContext } from "react";

function App() {

    let { theme } = useContext(ThemeContext);

    return (

        <div className={theme}>

            <Home />

        </div>

    )

}

export default App;