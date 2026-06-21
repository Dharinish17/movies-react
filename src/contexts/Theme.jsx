import React, { createContext, useContext, useEffect, useState } from 'react'

export const ThemeContext= createContext({theme: "light",
  setTheme: () => {}});

export function Theme({children}) {
  const [theme, setTheme]= useState(localStorage.getItem("theme") || "light");
  useEffect(()=> {
    document.documentElement.classList.toggle("dark", theme==="dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value= {{theme, setTheme}} >
        {children}
    </ThemeContext.Provider>
    // we export this Theme function to wrap all the children inside the <ThemeContext.Provider ....></ThemeContext.Provider> commonly we use this as a wrapper in main.jsx
  )
}

export function useTheme(){
    return useContext(ThemeContext);
    // we export this useTheme function in those files where we need to use this context info, this prevents us from importing ThemeContext and useContext multiple times and hence avoids us from doing the useContext(ThemeContext) instead we can do "const {theme, setTheme}= useTheme()"
}