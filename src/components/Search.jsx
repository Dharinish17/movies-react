import React, { useEffect, useRef, useState } from "react";
import ak from "../api.txt?raw";
import { useNavigate } from "react-router-dom";

function Search({ type = "Movies" }) {
  // const [query, setQuery] = useState("");
  // const [data, setData] = useState([]);
  const searchRef = useRef();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!query.trim()) return;

  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${ak}&query=${query}`,
  //   )
  //     .then((response) => response.json())
  //     .then((d) => {
  //       setData(d.results || []);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [query]);

  return (
    <div className="flex w-full justify-center p-2">
      <input
        type="search"
        className="bg-white w-10/12 md:w-11/12 text-gray-800 p-1 rounded-l-sm focus:outline-0 md:bg-amber-200 lg:bg-red-600"
        placeholder={`Search ${type}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" && searchRef.current.value.trim() !="") {
            // setQuery(e.target.value);
            navigate(`/search/${searchRef.current.value}`);
            searchRef.current.value = "";
          }
        }}
        ref={searchRef}
      />
      <input
        type="button"
        value="Search"
        className="bg-gray-800 p-1 rounded-r-sm hover:bg-gray-900 cursor-pointer"
        onClick={(e) => {
          // setQuery(searchRef.current.value);
          if(searchRef.current.value.trim() === ""){return}
          navigate(`/search/${searchRef.current.value}`);
          searchRef.current.value = "";
        }}
      />
    </div>
  );
}

export default Search;
