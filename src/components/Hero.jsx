import React from "react";
import hero from "../assets/hero.jpg";
import Search from "./Search";

function Hero({type}) {
  return (
    <div className="text-white w-full h-70 bg-cover bg-center flex flex-col items-center justify-center mb-4" style={{backgroundImage: `url(${hero})`}}>
      <h2 className="text-3xl font-bold text-center mb-2 text-purple-600 md:text-5xl">{type=== "Movies" ?  "Millions of movies. One search away." : "One search away from the world's biggest stars."}</h2>
      <Search type={type} />
    </div>
  );
}

export default Hero;
