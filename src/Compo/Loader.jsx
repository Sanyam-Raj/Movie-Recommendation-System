import React from 'react'
import infinite from '../utils/infinite.webp' 

const Loader = () => {
  return (
    <div className='w-full h-full bg-black flex justify-center items-center'>
      <img className='object-cover' src={infinite} alt="" />
    </div>
  )
}

export default Loader