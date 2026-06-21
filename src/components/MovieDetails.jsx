import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Similar from "./Similar";

function MovieDetails() {
  const { movieId } = useParams();
  const ak = import.meta.env.VITE_TMDB_API_KEY;
  const [movieData, setMovieData] = useState({});

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${ak}`)
      .then((res) => res.json())
      .then((data) => setMovieData(data));
  }, [movieId]);

  return (
    <>
    <div className="p-4">
    <div className="mb-4">
      <h2 className="text-amber-200 text-3xl font-bold mb-2 dark:text-amber-500">{`${movieData.title}`}</h2>
      <div className="rounded-md border border-purple-600 p-4">
        <div className="lg:flex lg:gap-10">
          <div className="w-full flex flex-row justify-center lg:justify-center lg:w-fit">
            <img
              src={`https://image.tmdb.org/t/p/w780${movieData.poster_path}`}
              className="rounded-md w-72 shadow-xl md:shadow-2xl mb-3 md:mb-5 shadow-purple-600"
              alt="movie_poster"
            />
          </div>

          <div className="flex flex-col gap-1 md:flex-row md:justify-around lg:flex-col lg:justify-center lg:w-full">
            <h2 className="text-white font-bold text-2xl lg:text-4xl lg:mb-8 dark:text-black">
              {movieData.title}
            </h2>
            <div className="flex flex-col gap-1">
              <p className="text-white font-semibold flex gap-1 lg:text-2xl dark:text-black">
                Status:
                <p
                  className={`${movieData.status === "Released" ? "text-green-600" : "text-red-500"} font-semibold`}
                >
                  {movieData.status}
                </p>
              </p>
              <p className="text-white font-semibold lg:text-2xl dark:text-black">{movieData.release_date!="" ? `🗓️ ${movieData.release_date?.split("-").reverse().join("-")}` : "Not Specified"}</p>
              <p className="text-white font-semibold lg:text-2xl dark:text-black">{`⭐ ${movieData.vote_average}`}</p>
              <p className="text-white font-semibold lg:text-2xl dark:text-black">{`⏱️ ${movieData.runtime} mins`}</p>
            </div>

            <div className="flex flex-col gap-1">
              <ul className="text-white flex gap-2 flex-wrap lg:text-2xl">
                🎭
                {movieData.genres?.map((g) => (
                  <li className="text-gray-500">{`• ${g.name}`}</li>
                ))}
              </ul>
              <p className="text-white font-semibold lg:text-2xl dark:text-black">
                💰 Budget:{" "}
                {movieData.budget !== 0
                  ? `$${movieData.budget?.toLocaleString()}`
                  : "Not Mentioned"}
              </p>

              <p className="text-white font-semibold lg:text-2xl dark:text-black">
                📈 Revenue:{" "}
                {movieData.revenue !== 0
                  ? `$${movieData.revenue?.toLocaleString()}`
                  : "Not Mentioned"}
              </p>

              <ul className="text-white flex gap-2 flex-wrap lg:text-2xl dark:text-black">
                Production Companies:
                {movieData.production_companies?.map((company) => (
                  <li className="text-gray-500">{`• ${company.name}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="text-white font-semibold lg:text-xl lg:mt-2 dark:text-black">
            Tagline:{" "}
            <i className="font-medium">
              {movieData.tagline !== ""
                ? `${movieData.tagline}`
                : "Not Mentioned"}
            </i>
          </p>
          <p className="text-white font-semibold lg:text-xl dark:text-black">
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

    <Similar movieId={movieId} movieName={movieData.title}/>
    </div>
    </>
  );
}

export default MovieDetails;
