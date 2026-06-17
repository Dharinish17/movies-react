import React, { useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import ak from "../api.txt?raw";
import Card from "./Card";

function SearchRes() {
  const { movieName } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (movieName.trim() === "") {
      return;
    }

    const movie = movieName.trim();
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${ak}&query=${encodeURIComponent(movie)}`,
    )
      .then((Response) => Response.json())
      .then((data) => {
        setData(data.results || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [movieName]);

  return (
    <div className="mb-4 p-4">
      <h2 className="text-white text-3xl font-bold mb-2">{`Search for ${movieName}:`}</h2>

      {data.length > 0 ? (
        <div className="overflow-x-auto mt-2 scrollbar scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-transparent">
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
        </div>
      ) : (
        <div className="text-red-500 text-2xl">{`Oops! We couldn't find any movies matching "${movieName}".`}</div>
      )}
    </div>
  );
}

export default SearchRes;
