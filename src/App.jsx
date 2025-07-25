import React from 'react'
import Home from './Compo/Home'
import { Route, Routes } from 'react-router-dom'
 import Trending from './Compo/Trending'
import Popular from './Compo/Popular'
import Movies from './Compo/Movies'
import TvShows from './Compo/TvShows'
import People from './Compo/People'

const App = () => {
  return (
    <div className='bg-[#1F1E24] w-full h-screen flex'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/movie' element={<Movies />} />
        <Route path='/tv' element={<TvShows />} />
         <Route path='person' element={<People />} />
      </Routes>

    </div>
  )
}

export default App