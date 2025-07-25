import React from 'react'
import Dropdown from './Dropdown';

const Horizontal = ({data}) => {
  return (
    
      <div className='w-[100%] h-[50vh] flex mb-5 p-5 overflow-y-hidden'>
            {data.map((d,i)=>(
            <div key={i} className='bg-zinc-800 min-w-[15%] mb-5 mr-5 '>
                <img className='w-full h-[55%] object-cover' src={`https://image.tmdb.org/t/p/original/${d.poster_path || d.profile_path}`} alt="" />
                <div className='text-white h-[45%] '>
                    <h1 className=' text-xl  font-semibold mt-2 ml-2 '>{(d.name||d.original_name || d.original_title||d.title).slice(0,15)}</h1>
                    <p className='font-light leading-tight mt-2 ml-2'>{d.overview.slice(0,50)}...
                     <span className='text-blue-400'>more</span>
                    </p>
                    
                </div>
                
            </div>
        ))}
        </div>
   
  )
}

export default Horizontal