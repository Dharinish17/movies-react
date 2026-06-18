import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ak from "../api.txt?raw";
import Card from "./Card";

function PersonDetails() {
  const { personId } = useParams();
  const [data, setData] = useState({});
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/person/${personId}?api_key=${ak}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [personId]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${ak}`,
    )
      .then((res) => res.json())
      .then((data) => setMovie(data.cast))
      .catch((err) => console.log(err));
  }, [personId]);

  return (
    <div className="p-4 mb-4 w-full">
      <h2 className="text-3xl text-white font-bold mb-2">
        {data?.name}
      </h2>
      <div className="border w-full border-purple-600 rounded-md p-4">
        <div className="md:flex md:gap-3">
          <div className="">
            <img
              src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
              alt="person_img"
              className="rounded-md w-72 inline-block shadow-xl md:shadow-2xl mb-3 md:mb-5 shadow-purple-600"
            />
          </div>

          <div className="md:w-fit">
            <h2 className="text-amber-200 font-bold text-2xl md:text-4xl">
              {data?.name}
            </h2>
            <p className="text-white mb-2 font-bold text-2xl md:text-4xl">
              {`Birth: ${data?.birthday !== "" ? data.birthday?.split("-").reverse().join("-") : "Not-Specified"}`}
            </p>
            <i className="text-gray-400 font-medium md:text-xl">
              {data?.biography || "Biography not available."}
            </i>
          </div>
        </div>
        <div className="mt-3">
          <h2 className="text-white font-bold text-2xl mb-1 md:text-4xl">
            🎬 Notable Works
          </h2>
        <div className="overflow-x-auto scrollbar scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-transparent">
          <div className="flex w-max gap-4 p-1">
            {movie.map((m) => (
              <Card
                name={m.title}
                date={m.release_date}
                link={`https://image.tmdb.org/t/p/w780${m.poster_path}`}
                movieid={m.id}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default PersonDetails;
