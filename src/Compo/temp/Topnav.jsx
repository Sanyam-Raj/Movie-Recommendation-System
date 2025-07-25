import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from '../../utils/axios';
import noimg from '../../utils/noimg.jpg';


const Topnav = () => {
  
   const[search, setSearch] = useState("");
   const [searchData, setSearchData] = useState([]);

const getSearch = async ()=>{
    try {
         const {data} = await axios.get(`search/multi?query=${search}`);
         setSearchData(data.results);
         
  }
   catch(error) {
         console.log("Error ", error);

   }
  }
  useEffect(()=>{
    getSearch();

  },[search]);

  console.log(search);
  return (
    <div className='w-[70%] h-16 bg-[#1F1E24] relative flex justify-center gap-1 items-center px-10 text-white'>

  <i className="ri-search-2-line"></i>

  <input
    onChange={(e) => setSearch(e.target.value)}
    value={search}
    type="text"
    placeholder='Search for movies, shows, etc.'
    className='w-[50%] h-10 rounded-lg outline-none border-none bg-transparent pl-3 text-zinc-300'
  />

  {search.length > 0 && (
    <i onClick={() => setSearch("")} className="absolute right-14 text-zinc-300 ri-close-line cursor-pointer"></i>
  )}

  {search.length > 0 && searchData.length > 0 && (
    <div className='p-4 bg-zinc-200 absolute top-[90%] w-[50%] max-h-[50vh] overflow-auto rounded z-50'>
      {searchData.map((s, i) => (
        <Link
          key={i}
          to={`/details/${s.id}`}
          className='flex items-start gap-3 p-3 hover:bg-[#6556CD] hover:text-black duration-200 rounded border-b border-zinc-300'
        >
          <img
            src={
              s.poster_path || s.profile_path
                ? `https://image.tmdb.org/t/p/original/${s.poster_path || s.profile_path}`
                : noimg
            }
            alt="poster"
            className="w-10 h-14 object-cover rounded"
          />
          <span>{s.name || s.original_name || s.original_title || s.title}</span>
        </Link>
      ))}
    </div>
  )}
</div>

  )
}

export default Topnav