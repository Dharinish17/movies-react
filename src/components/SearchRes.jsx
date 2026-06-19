import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ak from "../api.txt?raw";
import Card from "./Card";
import PersonCard from "./PersonCard";

function SearchRes() {
  const { name, type } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (name.trim() === "") {
      return;
    }

    const movie = name.trim();
    fetch(
      type==="Movies"? `https://api.themoviedb.org/3/search/movie?api_key=${ak}&query=${encodeURIComponent(movie)}` : `https://api.themoviedb.org/3/search/person?api_key=${ak}&query=${encodeURIComponent(movie)}`
    )
      .then((Response) => Response.json())
      .then((data) => {
        setData(data.results || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name, type]);

  return (
    <div className="mb-4 p-4">
      <h2 className="text-white text-3xl font-bold mb-2">{`Search for ${name}:`}</h2>

      {data.length > 0 ? (
        type==="Movies" ?
        (<div className="overflow-x-auto mt-2 scrollbar scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-transparent">
          <div className="flex w-max gap-4 p-1">
            {data.map((movie) => (
              <Card
                name={movie.title}
                date={movie.release_date}
                link={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                movieid={movie.id}
              />
            ))}
          </div>
        </div>)
        :
        (<div className="flex flex-row flex-wrap justify-center md:justify-normal border">
        {data.map((person)=> (
            <PersonCard name={person.name} link={`https://image.tmdb.org/t/p/w780${person.profile_path}`} personId={person.id} knownFor={person.known_for} />
        ))}
      </div>)
      ) : (
        <div className="text-red-500 text-2xl">{`Oops! We couldn't find any results matching "${name}".`}</div>
      )}
    </div>
  );
}

export default SearchRes;
