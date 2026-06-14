import React from "react";
import film from "../assets/film.png";
import Search from "./Search";

function Navbar() {
  return (
    <div className="w-full bg-purple-600 h-14 flex items-center justify-between p-2 text-white">
      <img src={film} className="h-8 mr-3 md:mr-0" alt="logo" />
      <Search />
    </div>
  );
}

export default Navbar;
