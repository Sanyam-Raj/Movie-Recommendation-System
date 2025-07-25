import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from './temp/Dropdown';
import Topnav from './temp/Topnav';
import axios from '../utils/axios';
import { useEffect } from 'react';
import Cards from './temp/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const Trending = () => {
  document.title = 'Trending | MyPro';
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

  const getTrending = async () => {
  try {
    const { data } = await axios.get(`/trending/${category}/day?page=${page}`);
    if(data.results.length >0) {
          setTrending((prev) => [...prev, ...data.results]);
          setPage(page+1);
    }
    else{
      setHasMore(false);
    }
   
  } catch (error) {
    console.log("Error", error);
  }
};
  
  const refreshHandler = () => {
    if(trending.length === 0) {
      getTrending();
    }
    else{
      setPage(1);
      setTrending([]);  
      getTrending();
    }
  }
  console.log(trending);

  useEffect(() => {
   refreshHandler();
}, [category]);

// Fetch when trending or page changes (for initial + scroll)
useEffect(() => {
  getTrending();
}, [page, category]);


  return trending.length>0 ? (
    <div className='bg-[#1F1E24] p-[2%] w-screen h-screen overflow-x-hidden'>
        <div className='w-full flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-zinc-400'>
                 <i
                    onClick={()=>navigate(-1)}
                    class="p-4 gap-5 hover:text-blue-300 text-2xl ri-arrow-left-line"></i>
                    Trending
            </h1>
            <div className='flex items-center w-[80%] gap-2'>
                 <Topnav />
             <Dropdown
  title="Filter"
  options={["Movie", "TV", "All"]}
  value={category}
  func={(e) => {
    setTrending([]);
    setPage(1);
    setCategory(e.target.value);
  }}
/>
                 
            </div>
            
        </div>

        
       <InfiniteScroll
  dataLength={trending.length}
  next={getTrending}
  hasMore={hasMore} // optional: stop if totalResults known
  loader={<h1>Loading...</h1>}
>
  <Cards data={trending} title={category} />
</InfiniteScroll>

    </div>
    ):(<Loader />)
}

export default Trending