import React,{useContext} from "react";
import { theamcontext } from "./TheamContext";

let Theme = ()=>{

    let {theme , toggleTheme} = useContext(theamcontext);

     return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px"
      }}
    >
      <h1>{theme.toUpperCase()} MODE</h1>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );

  
}

export default Theme;