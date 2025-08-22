import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='mx-8 sm:mx-16 xl:mx-24 relative'>
      <div className='text-center mt-20 mb-8'>
        <div className='inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm'>
            <p className='font-bold'>New: AI Feature integrated</p>
            <img src={assets.star_icon} draggable='false' className='w-2.5' alt="" />
        </div>

        <h1 className='text-3xl sm:text-6xl font-semibold sm:leading-16 text-white-700'>Most Organised <span className='highlight'> Gaming News</span> <br /> Platform</h1>

        <p className='my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xs text-gray-400'>This is the place where you'll get the most Precise and Organised Gaming News Platform</p>

        <form className='search'>
          <input type="text" name='' id='search' placeholder='Search Gaming News' className='px-3 p-1' required />
          <button type="submit" id='search_btn' className='px-3 p-1 '>Search</button>
        </form>
      </div>
      <img src={assets.gradientBackground} draggable='false' alt=""  className='absolute -top-50 -z-1 opacity-50'/>
    </div>
  )
}

export default Header
