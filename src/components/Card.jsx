import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ name, date, link, movieid }) {
  const [info, setInfo]= useState(false);
  const navigate= useNavigate();

  return (
    <div className="w-40 h-80 p-1 rounded-md border border-purple-600 shadow-md shadow-purple-600"
      onClick={()=>{
        setInfo((prev)=> !prev);
        navigate(`/movieDetails/${movieid}`);
      }}
    >
      <div className=" border-b border-purple-600" id={movieid}>
        <img
          src={link}
          alt="movie_poster"
          className="w-40 h-60 object-cover rounded-md border-2 hover:scale-105 transition-transform cursor-pointer"
        />
      </div>
      <h2 className="text-white font-semibold">{name}</h2>
      <h2 className="text-white">{date!="" ? date.split("-").reverse().join("-") : "Not-Specified"}</h2>
      <p className="text-white">{info}</p>
    </div>
  );
}

export default Card;
