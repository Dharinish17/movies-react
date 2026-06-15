import React, { useState } from "react";
import Card from "./Card";

function HomeScroll({ needBtn }) {
  const [selected, setSelected] = useState("today");
  return (
    <div className="p-4 mb-4">
      <h2 className="text-3xl text-white font-bold mb-2 md:inline-block md:mr-4">
        Tredning
      </h2>
      <div className={`${needBtn ? "inline-block" : "hidden"}`}>
        <label className="inline-block w-fit rounded-xl cursor-pointer">
          <input
            type="radio"
            name="Trending_on"
            value="Today"
            className="hidden"
          />
          <div
            onClick={() => setSelected("today")}
            className={`px-3 py-2 rounded-xl rounded-r-none font-bold border border-amber-200 border-r-0 ${selected == "today" ? "bg-amber-200 text-black" : "bg-none text-white"}`}
          >
            Today
          </div>
        </label>

        <label className="inline-block w-fit rounded-xl cursor-pointer">
          <input
            type="radio"
            name="Trending_on"
            value="This Week"
            className="hidden"
          />

          <div
            onClick={() => setSelected("week")}
            className={`px-3 py-2 rounded-xl rounded-l-none font-bold border border-amber-200 border-l-0 ${selected == "week" ? "bg-amber-200 text-black" : "bg-none text-white"}`}
          >
            This Week
          </div>
        </label>
      </div>
      
      <div className="overflow-x-auto mt-2 scrollbar scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-transparent">
        <div className="flex w-max gap-4 p-1">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default HomeScroll;
