import React, { useEffect, useState } from "react";
import Card from "./Card";
import PersonCard from "./PersonCard";

function Person() {
    const [data, setData]= useState([]);
    const ak = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/person/popular?api_key=${ak}`)
        .then((response)=> response.json())
        .then((data)=> setData(data.results))
        .catch((err)=> console.log(err));
    },[])

    return (
    <div className="p-4 mb-4">
      <h1 className="text-white text-3xl font-bold mb-2">Popular People</h1>
      <div className="flex flex-row flex-wrap justify-center border">
        {data.map((person)=> (
            <PersonCard name={person.name} link={`https://image.tmdb.org/t/p/w780${person.profile_path}`} personId={person.id} knownFor={person.known_for} />
        ))}
      </div>
    </div>
  );
}

export default Person;
