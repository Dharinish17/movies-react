import React from 'react'
import { useNavigate } from 'react-router-dom'
import no_img from "../assets/no_img.png";

function PersonCard({name, link, personId, knownFor}) {
  const navigate= useNavigate();

  return (
    <div className='w-50 h-80 p-1 mr-1 mb-6 rounded-md border border-purple-600 shadow-lg shadow-purple-600 cursor-pointer'
        onClick={()=> {
            navigate(`/personDetails/${personId}`)
        }}
    >
        <div className="border-b border-purple-600" id={personId}>
        <img
          src={link.includes(null) ? no_img : link}
          alt="person_Img"
          className="w-50 h-60 object-cover rounded-md border-2 hover:scale-105 cursor-pointer"
        />
      </div>
      <h2 className={`text-white font-semibold text-2xl pl-1`} title={name}>{name.length>30 ? `${name.slice(0,30)+"..."}` : name}</h2>
    </div>
  )
}

export default PersonCard