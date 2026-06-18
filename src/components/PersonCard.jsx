import React from 'react'

function PersonCard({name, link, personId, knownFor}) {
  return (
    <div className='w-50 h-80 p-1 mr-1 mb-6 rounded-md border border-purple-600 shadow-lg shadow-purple-600 cursor-pointer'>
        <div className="border-b border-purple-600" id={personId}>
        <img
          src={link}
          alt="person_Img"
          className="w-50 h-60 object-cover rounded-md border-2 hover:scale-105 cursor-pointer"
        />
      </div>
      <h2 className={`text-white font-semibold text-2xl pl-1`} title={name}>{name.length>30 ? `${name.slice(0,30)+"..."}` : name}</h2>
    </div>
  )
}

export default PersonCard