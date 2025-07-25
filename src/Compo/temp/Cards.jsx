import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  return (
    <div  className='flex flex-wrap  w-full h-full bg-[#1F1E24] px-[5%] '>
        {data.map((c,i)=>(
            <Link className=' relative w-[25vh] mr-[5%] mb-[5%]' key={i}>
                <img
                    className='shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh] object-cover rounded-lg'
                    src={
                        c.poster_path || c.profile_path
                            ? `https://image.tmdb.org/t/p/original/${c.poster_path || c.profile_path}`
                            : 'https://via.placeholder.com/150'
                    }
                    alt={c.name || c.original_name || c.original_title || c.title}
                    ></img>
                <h1 className='text-zinc-300 text-lg font-semibold mt-2'>
                    {c.name || c.original_name || c.original_title || c.title}
                </h1>
               {c.vote_average && (
  <div className="absolute text-sm font-semibold text-black rounded-full w-[5vh] h-[5vh] right-[-10%] bottom-[40%] flex justify-center items-center bg-amber-300">
    {(c.vote_average * 10).toFixed()}<sup>%</sup>
  </div>
)}

                
            </Link>))}

         


    </div>
    
  )
}

export default Cards