import React from "react";

function Card() {
  return (
    <div className="h-60 p-1 border-b-2 border-purple-600 shadow-lg shadow-purple-600">
      <div className="w-36  mb-2 h-40 rounded-md bg-gray-600 hover:scale-105 border-2 border-purple-600">
      </div>
      <h2 className="text-white font-semibold">Movie</h2>
      <h2 className="text-white">Date-of-Release</h2>
    </div>
  );
}

export default Card;
