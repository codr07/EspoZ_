import React, { useEffect, useState } from 'react'
import { blog_data } from '../../assets/assets';
import BlogTableItem from '../../components/Admin/BlogTableItem';

const Listblog = () => {

const [blogs, setBlogs] = useState([]);

const fetchBlogs = async () => {
  setBlogs(blog_data);
}

useEffect(() => {
  fetchBlogs()
},[])

  return (
    <div className='flex-1 pt-2 px-5 sm:pt-12 sm:pl-16'>
      <h1 className='font-bold text-2xl'>All Blogs</h1>

      <div className='relative h-4.5/5 mt-5 max-w-4xl overflow-x-auto shadow-2 shadow-[#4f44e581] rounded-lg scrollbar-hide border-1 border-[#fff]'>
            <table className='w-full text-sm text-gray-300'>
              <thead className='text-sm text-gray-200 text-left uppercase'>
                <tr>
                  <th scope='col' className='px-2 py-4 xl:px-6'>#</th>
                  <th scope='col' className='px-2 py-4'>Blog Title</th>
                  <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                  <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                  <th scope='col' className='px-2 py-4'>Action</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blogs,index) => {
                  return <BlogTableItem key={blogs._id} blog={blogs} fetchBlog={fetchBlogs} index={index + 1} />
                })}
              </tbody>
            </table>
          </div>
    </div>
  )
}

export default Listblog
