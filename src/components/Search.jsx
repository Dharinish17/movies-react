import React, {useRef} from 'react'

function Search({type= 'Movies'}) {
  return (
    <div className="flex w-full justify-center p-2">
        <input
          type="search"
          className="bg-white w-10/12 md:w-11/12 text-gray-800 p-1 rounded-l-sm focus:outline-0 md:bg-amber-200 lg:bg-red-600"
          placeholder={`Search ${type}`}
          />
        <input
          type="button"
          value="Search"
          className="bg-gray-800 p-1 rounded-r-sm hover:bg-gray-900 cursor-pointer"
        />
      </div>
  )
}

export default Search