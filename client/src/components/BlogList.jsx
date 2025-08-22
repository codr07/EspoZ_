import { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'


const Bloglist = () => {

  const [menu, setMenu] = useState("All")

  return (
    <div>
      <div className='filter flex justify-center gap-4 sm:gap-8 my-10 relative w-full px-3'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button onClick={()=>setMenu(item)} className={`cursor-pointer p-2 text-gray-500 ${menu == item && 'text-white'}`}>
              {item}
              {menu === item && (<motion.div layoutId='underline' transition={{type:'spring', stiffness:500, damping:30}} className='category absolute left-0 right-0 top-2 h-7 -z-1 rounded-full'></motion.div>)}
              
            </button>
          </div>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-8 sm:mx-16 xl:mx-40'>
        {blog_data.filter((blog)=> menu === "All" ? true : blog.category === menu ).map((blog)=> <BlogCard key={blog._id} blog={blog}/>)}
      </div>
    </div>
  )
}

export default Bloglist
