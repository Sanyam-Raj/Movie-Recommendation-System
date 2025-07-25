import React, { useEffect, useState } from 'react';
import Sidenav from './temp/sidenav';
import Topnav from './temp/Topnav';
import Header from '../utils/Header';
import axios from '../utils/axios';
import Horizontal from './temp/Horizontal';
import Dropdown from './temp/Dropdown';
import Loader from './Loader';

const Home = () => {
  const [trending, setTrending] = useState(null);
  const[bodyTrending ,setbodyTrending]= useState(null) // ✅ null for clean initial state
  const[category,setCategory]=useState("all")

  const trend = async () => {
    try {
      const { data } = await axios.get('trending/all/day');
      let random = data.results[(Math.random() * data.results.length).toFixed()];
      setTrending(random);
    } catch (error) {
      console.log('Error', error);
    }
  };

   const bodyTrend = async () => {
    try {
      const { data } = await axios.get(`trending/${category}/day`);
          setbodyTrending(data.results);

    } catch (error) {
      console.log('Error', error);
    }
  };

   // ✅ for debugging, can be removed later
  useEffect(() => {
      trend();
     bodyTrend(); // ✅ fetch body trending data
    
  }, [category]);
  console.log(trending, bodyTrending); // ✅ for debugging, can be removed later

  useEffect(() => {
    document.title = 'Recommendation - Home'; // ✅ keep this inside useEffect
  }, []);
 // ✅ for debugging, can be removed later
  return trending && bodyTrending  ? (
    <>
      <Sidenav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <Topnav />
        <Header data={trending} />

       <div className='p-4  flex justify-between'>
              <h1 className='text-2xl font-semibold text-zinc-200'>Trending</h1>
               <Dropdown title="Filter" options={["Movie","Tv","All"]} func ={(e)=>setCategory(e.target.value)}/>
        </div>
     

        <Horizontal data={bodyTrending}/>
      </div>
    </>
  ):(<Loader />); // ✅ render Loader component when data is not ready
};

export default Home;
