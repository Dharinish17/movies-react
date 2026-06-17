import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ak from "../api.txt?raw";

function MovieDetails() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${ak}`)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, [movieId]);

  return (
    <div className="mb-4 p-4">
      <h2 className="text-amber-200 text-3xl font-bold mb-2">{`${movieData.title} ${movieData.id}`}</h2>
      <div className="rounded-md border border-purple-600 p-4">
        <div className="lg:flex lg:justify-around">
          <div className="w-full flex flex-row justify-center lg:justify-start lg:inline-block lg:w-fit">
            <img
              src={`https://image.tmdb.org/t/p/w780${movieData.poster_path}`}
              className="rounded-md w-72 shadow-lg md:shadow-2xl mb-3 md:mb-5 shadow-purple-600"
              alt="movie_poster"
            />
          </div>

          <div className="flex flex-col gap-1 md:flex-row md:justify-around lg:bg-red-400">
            <h2 className="text-white font-bold text-2xl">{movieData.title}</h2>
            <div className="flex flex-col gap-1">
              <p className="text-white font-semibold flex gap-1">
                Status:
                <p
                  className={`${movieData.status === "Released" ? "text-green-600" : "text-red-500"} font-semibold`}
                >
                  {movieData.status}
                </p>
              </p>
              <p className="text-white font-semibold">{`🗓️ ${movieData.release_date?.split("-").reverse().join("-")}`}</p>
              <p className="text-white font-semibold ">{`⭐ ${movieData.vote_average}`}</p>
              <p className="text-white font-semibold">{`⏱️ ${movieData.runtime} mins`}</p>
            </div>

            <div className="flex flex-col gap-1">
              <ul className="text-white flex gap-2 flex-wrap">
                🎭
                {movieData.genres?.map((g) => (
                  <li>{`• ${g.name}`}</li>
                ))}
              </ul>
              <p className="text-white font-semibold">
                💰 Budget:{" "}
                {movieData.budget !== 0
                  ? `$${movieData.budget?.toLocaleString()}`
                  : "Not Mentioned"}
              </p>

              <p className="text-white font-semibold">
                📈 Revenue:{" "}
                {movieData.revenue !== 0
                  ? `$${movieData.revenue?.toLocaleString()}`
                  : "Not Mentioned"}
              </p>

              <ul className="text-white flex gap-2 flex-wrap">
                Production Companies:
                {movieData.production_companies?.map((company) => (
                  <li>{`• ${company.name}`}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <p className="text-white font-semibold">
              Tagline:{" "}
              <i className="font-light">
                {movieData.tagline !== ""
                  ? `${movieData.tagline}`
                  : "Not Mentioned"}
              </i>
            </p>
            <p className="text-white font-semibold">
              Overview:{" "}
              <i className="font-medium text-gray-500">
                {movieData.overview !== ""
                  ? `${movieData.overview}`
                  : "Not Mentioned"}
              </i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
