import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


function ThemeButton(){

let {theme,toggleTheme}=useContext(ThemeContext);


return(

<button onClick={toggleTheme}> Switch to {theme==="light"?"Dark":"Light"} </button>

)

}

export default ThemeButton;