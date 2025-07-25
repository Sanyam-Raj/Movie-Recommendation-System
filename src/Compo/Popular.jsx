import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Cards from './temp/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './temp/Dropdown';
import Topnav from './temp/Topnav';


const Popular = () => {
    
    const navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

  const GetPopular = async () => {
  try {
    const { data } = await axios.get(`${category}/popular?page=${page}`);
  
    if(data.results.length >0) {
          setPopular((prev) => [...prev, ...data.results]);
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
    if(popular.length === 0) {
      GetPopular();
    }
    else{
      setPage(1);
      setPopular([]);  
      GetPopular();
    }
  }
 
   useEffect(() => {
   refreshHandler();
}, [category]);

return  popular.length>0 ? (
    <div className=' w-screen h-screen  '>
        <div className='px-[5%] w-full flex items-center justify-between'>
            <h1 className='text-3xl font-bold text-zinc-400'>
                 <i
                    onClick={()=>navigate(-1)}
                    className="p-4 gap-5 hover:text-blue-300 text-2xl ri-arrow-left-line"></i>
                    Popular 
            </h1>
            <div className='flex items-center w-[80%] gap-2'>
                 <Topnav />
                <Dropdown
                   title="Filter"
                   options={["Movie", "TV"]}
                   value={category}
                     func={(e) => setCategory(e.target.value)} />
                     <div className='w-[2]%'></div>
                     
            </div>
          </div>

        
       <InfiniteScroll
  dataLength={popular.length}
  next={GetPopular}
  hasMore={hasMore} // optional: stop if totalResults known
  loader={<h1>Loading...</h1>}
>
  <Cards data={popular} title={category} />
</InfiniteScroll>

    </div>
    ):<Loader />
}

export default Popular