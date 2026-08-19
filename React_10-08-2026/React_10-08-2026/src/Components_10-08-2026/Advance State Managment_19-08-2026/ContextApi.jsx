import React, { createContext, useContext, useState } from 'react'

let themecontext = createContext();


function ContextApi({children}) {

    let[theme , settheme] = useState("light");

    let toggletheme = ()=>{
        settheme((prev)=>{
            return prev === "light" ? "dark" : "light";
        })
    };

  return (
    <themecontext.Provider value={{theme , toggletheme}}>
        {children}
    </themecontext.Provider>
  )
}

export default ContextApi

export function usetheme(){
    return useContext(themecontext);
}