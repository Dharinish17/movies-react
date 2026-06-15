import React from "react";

function Card({ name, date, link, movieid }) {
  return (
    <div className="w-40 h-80 p-1 rounded-md border border-purple-600 shadow-md shadow-purple-600 ">
      <div className=" border-b border-purple-600" id={movieid}>
        <img
          src={link}
          alt="movie_poster"
          className="w-40 h-60 object-cover rounded-md border-2 hover:scale-105 transition-transform cursor-pointer"
        />
      </div>
      <h2 className="text-white font-semibold">{name}</h2>
      <h2 className="text-white">{date.split("-").reverse().join("-")}</h2>
    </div>
  );
}

export default Card;
