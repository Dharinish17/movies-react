import React, { useEffect, useState } from 'react'
import ak from "../api.txt?raw";
import Card from './Card';

function Similar({movieId, movieName}) {
  const [data, setData]= useState([]);
  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${ak}`)
    .then((response)=> response.json())
    .then((d)=> setData(d.results))
    .catch((err)=> console.log(err));
  }, [movieId]);
  
  return (
    <div className='p-4 border border-purple-600 rounded-md'>
        <p className='text-white font-bold text-3xl'>Similar to {movieName}</p>
        <div className='overflow-x-auto mt-2 scrollbar scrollbar-thumb-gray-500 scrollbar-thin scrollbar-track-transparent'>
            <div className='flex w-max gap-4 p-1'>
                {data.length>0 ? (data.map((movie)=> (
                    <Card name={movie.title} date={movie.release_date} link={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} movieid={movie.id} />
                ))) : <p className='text-gray-400 text-lg md:text-2xl'>No Similar movies found</p>}
            </div>
        </div>
    </div>
  )
}

export default Similar