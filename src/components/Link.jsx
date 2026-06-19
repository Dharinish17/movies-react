import React, { useState, useEffect } from "react";
import Card from "./Card";

function Link({heading, selected}) {
  const [res, setRes] = useState([]);
  const ak = import.meta.env.VITE_TMDB_API_KEY;
  let link= "";

  if (heading === "Trending") {
    link= `trending/movie/${selected==='today'? 'day': 'week'}`;
  } else if (heading === "Popular") {
    link= `movie/popular`;
  } else if (heading === "Top Rated") {
    link= `movie/top_rated`;
  } else if (heading === "Upcoming") {
    link= `movie/upcoming`;
  } else if (heading === "Now Playing") {
    link= `movie/now_playing`;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${link}?api_key=${ak}`)
      .then((response) => response.json())
      .then((data) => {
        setRes(data.results  || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [link]);

  return(
    <>
    {res.map((movie) => (
        <Card name= {movie.title} date= {movie.release_date} link={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} movieid= {movie.id}/>
    ))}
    </>
  );
}

export default Link;
