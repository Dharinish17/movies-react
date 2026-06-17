import React from 'react'
import { useParams } from 'react-router-dom'

function SearchRes() {
  const {movieName}= useParams();
  return (
    <div className='text-white font-bold text-4xl'>{`searchRes: ${movieName}`}</div>
  )
}

export default SearchRes