import React from "react";
import film from "../assets/film.png";

function Navbar() {
  return (
    <div className="w-screen bg-purple-600 h-14 flex items-center justify-between p-2 text-white">
      <img src={film} className="h-8 mr-3 md:mr-0" alt="logo" />
      <div className="flex w-full justify-end">
        <input
          type="search"
          className="bg-white w-10/12 md:w-11/12 text-gray-800 p-1 rounded-l-sm md:bg-amber-200 lg:bg-red-600"
          placeholder="Search {type}"
        />
        <input
          type="button"
          value="Search"
          className="bg-gray-800 p-1 rounded-r-sm"
        />
      </div>
    </div>
  );
}

export default Navbar;
