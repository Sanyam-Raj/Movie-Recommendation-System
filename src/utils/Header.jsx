import React from 'react'
import { Link } from 'react-router-dom';

const Header = ({data}) => {
  // For debugging, can be removed later
  return (
    <div
     style={{background:` linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)),
      url(https://image.tmdb.org/t/p/original/${data.poster_path || data.profile_path})`,
      backgroundPosition:'top 15% center',
      backgroundSize:'cover',
      backgroundRepeat:'no-repeat',
      }}
      className='w-full p-[3%] h-[50vh] flex flex-col items-start justify-end '>
      
      <h1 className=' w-[70%]   text-4xl text-white font-semibold '>{data.name||data.original_name || data.original_title||data.title}</h1>
      <p className='w-[70%] mt-4  text-white'>{data.overview.slice(0,200)}...
        <Link className='text-blue-400'>more</Link>
      </p>
      <p className='text-white font-semibold mt-3'>
        <i class=" text-yellow-300 ri-armchair-line mr-2"></i>{data.release_date|| "no info"}
      </p>
      <Link className='text-white mt-4 p-3 rounded bg-[#6556CD]'>Watch Trailer</Link>

    </div>
    
  )
}

export default Header