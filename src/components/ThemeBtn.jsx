import React, {useState} from "react";
import { Theme, useTheme } from "../contexts/Theme";

function ThemeBtn() {
  const {theme, setTheme}= useTheme();
  return (
    <div className="text-black font-bold bg-amber-200 p-1 rounded-md cursor-pointer hover:scale-105" onClick={()=> setTheme(theme==="dark" ? "light" : "dark")}>{theme==="dark"? "Dark" : "Light"}</div>
  );
}

export default ThemeBtn;
