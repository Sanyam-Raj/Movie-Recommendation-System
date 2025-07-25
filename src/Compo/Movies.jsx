import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Cards from './temp/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './temp/Dropdown';
import Topnav from './temp/Topnav';

const Movies = () => {
 const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

  const GetMovie = async () => {
  try {
    const { data } = await axios.get(`/movie/${category}?page=${page}`);
  
    if(data.results.length >0) {
          setMovie((prev) => [...prev, ...data.results]);
          setPage(page+ 1);
    }
    else{
      setHasMore(false);
    }
   
  } catch (error) {
    console.log("Error", error);
  }
};
  
  const refreshHandler = () => {
    if(movie.length === 0) {
      GetMovie();
    }
    else{
      setPage(1);
      setMovie([]);  
      GetMovie();
    }
  }
 
   useEffect(() => {
   refreshHandler();
}, [category]);
  return movie.length>0 ? (
    <div className=' w-screen h-screen  '>
        <div className='px-[5%] w-full flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-zinc-400'>
                 <i
                    onClick={()=>navigate(-1)}
                    className="p-4 gap-5 hover:text-blue-300 text-2xl ri-arrow-left-line"></i>
                    Movie<small className='ml-2  text-sm text-zinc-600'>({category})</small>
            </h1>
            <div className='flex items-center w-[80%] gap-2'>
                 <Topnav />
                <Dropdown
                   title="Filter"
                   options={["popular", "Top_rated", "upcoming", "now_playing"]}
                   value={category}
                     func={(e) => setCategory(e.target.value)} />
                     <div className='w-[2]%'></div>
                     
            </div>
          </div>

        
       <InfiniteScroll
  dataLength={movie.length}
  next={GetMovie}
  hasMore={hasMore} // optional: stop if totalResults known
  loader={<h1>Loading...</h1>}
>
  <Cards data={movie} title={category} />
</InfiniteScroll>

    </div>
    ):(<Loader />)
}

export default Movies