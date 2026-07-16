import {useContext} from "react";

import { ThemeContext } from "./ThemeContext";


function ThemeButton1(){


let {theme,toggleTheme} = useContext(ThemeContext);


return(

<button onClick={toggleTheme}>Current Theme:{theme}</button>

);

}

export default ThemeButton1;