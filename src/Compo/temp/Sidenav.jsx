import React from 'react'
import { Link } from 'react-router-dom';

const Sidenav = () => {
  return (
    <div  className='w-[20%] h-full border-r-2 border-zinc-300 p-8'>
        <h1 className='text-2xl font-bold flex items-center justify-center h-10 bg-[#1F1E24] text-white'>
            <i className="ri-tv-fill #6556CD mr-3"></i>
            <span className='font-bold text-white rext-3xl '>MRS</span>
        </h1>
         <nav className='flex flex-col text-zinc-300  text-xl gap-1.5 '>
          <h1 className='text-white font-semibold text-xl mt-5 mb-2 p-5 '>Explore</h1>
 
          <hr className='mt-0 border-none h-[1px] bg-zinc-300' />
          <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5 " > <i className="ri-fire-fill"></i> Trending</Link>
          <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5 " > <i className="ri-film-line"></i> Popular </Link>
          <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5 " ><i className="ri-slideshow-view"></i> Movies</Link>
          <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5 " > <i className="ri-tv-2-line"></i> TV Shows</Link>
          <Link to="/person" className="hover:bg-[#6556CD] hover:text-white duration-200 rounded-lg p-5 " > <i className="ri-arrow-right-up-box-line"></i> People</Link>
         
        </nav>
        <hr className='mt-0 border-none h-[1px] bg-zinc-300' />
         <nav className='flex flex-col text-zinc-300  text-xl gap-1.5 '>
          <h1 className='text-white font-semibold text-xl  mb-.5 p-5 '>Contact</h1>
          <Link  className="hover:bg-[#6556CD] hover:text-white  duration-200 rounded-lg p-1 " > <i className="ri-git-repository-fill ml-3.5"></i>  About</Link>
          <Link className="hover:bg-[#6556CD] hover:text-white  duration-200 rounded-lg p-1 " > <i className="ri-mail-ai-line ml-3.5"></i> gmail</Link>
         
        </nav>
       
    </div>
  )
}

export default Sidenav