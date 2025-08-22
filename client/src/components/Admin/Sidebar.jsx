import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 w-[12vw] sm:w-[20vw] '>

      <NavLink end={true} to={'/admin'} className={({isActive})=> `flex items-center gap-5 py-3.5 px-3 md:px-7 md-min-w-64 cursor-pointer ${isActive && "bg-[#4f44e52f] border-r-3 border-[#5044e5]"}`}>
        <img src={assets.home_icon} className='min-w-4 w-5' alt="" />
        <p className='hidden md:inline-block'>Dashboard</p>
      </NavLink>

      <NavLink to={'/admin/addBlog'} className={({isActive})=> `flex items-center gap-5 py-3.5 px-3 md:px-7 md-min-w-64 cursor-pointer ${isActive && "bg-[#4f44e52f] border-r-3 border-[#5044e5]"}`}>
        <img src={assets.add_icon} className='min-w-4 w-5' alt="" />
        <p className='hidden md:inline-block'>Add Blogs</p>
      </NavLink>
      
      <NavLink to={'/admin/listBlog'} className={({isActive})=> `flex items-center gap-5 py-3.5 px-3 md:px-7 md-min-w-64 cursor-pointer ${isActive && "bg-[#4f44e52f] border-r-3 border-[#5044e5]"}`}>
        <img src={assets.list_icon} className='min-w-4 w-5' alt="" />
        <p className='hidden md:inline-block'>Blog List</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
