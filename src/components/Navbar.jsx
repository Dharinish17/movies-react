import React, {useState} from "react";
import film from "../assets/film.png";
import Search from "./Search";
import Hero from "./Hero";

function Navbar() {
  const [type, setType]= useState("Movies");
  return (
    <div className="w-full bg-purple-600 h-14 flex items-center justify-between p-2 text-white">
      <img src={film} className="h-8 mr-3" alt="logo" />
      <input type="button" value={type=== "Movies"? 'Person' : 'Movie'} onClick={()=>setType(type==='Movies'? 'Person': 'Movies')} className="bg-amber-200 p-1 rounded-md border-0 text-black font-bold hover:scale-105 cursor-pointer" />
      <Search type={type} />
    </div>
  );
}

export default Navbar;
