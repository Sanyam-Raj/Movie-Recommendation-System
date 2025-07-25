import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Cards from './temp/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './temp/Dropdown';
import Topnav from './temp/Topnav';


const TvShows = () => {
    document.title = 'TV Shows | MyPro';
    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tv, setTv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

  const GetTv = async () => {
  try {
    const { data } = await axios.get(`/tv/${category}?page=${page}`);
  
    if(data.results.length >0) {
          setTv((prev) => [...prev, ...data.results]);
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
    if(tv.length === 0) {
      GetTv();
    }
    else{
      setPage(1);
      setTv([]);  
      GetTv();
    }
  }
 
   useEffect(() => {
   refreshHandler();
}, [category]);



  return tv.length>0 ? (
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
                   options={["on_the_air","popular", "top_rated", "airing_today"]}
                   value={category}
                     func={(e) => setCategory(e.target.value)} />
                     <div className='w-[2]%'></div>
                     
            </div>
          </div>

        
       <InfiniteScroll
  dataLength={tv.length}
  next={GetTv}
  hasMore={hasMore} // optional: stop if totalResults known
  loader={<h1>Loading...</h1>}
>
  <Cards data={tv} title={category} />
</InfiniteScroll>

    </div>
    ):(<Loader />)
}

export default TvShows