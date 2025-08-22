import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {

    const {title, description, category, image, _id} = blog;
    const navigate = useNavigate()

  return (
    <div onClick={ ()=> navigate(`/blog/${_id}`)} className='card w-full rounded-lg overflow-hidden shadow hover:scale-102 hover: shadow-primary/25 duration-300 cursor-pointer'>
      <img src={image} alt="" className='aspect-video' />
      <span className='ml-2 mt-4 px-3 py-1 inline-block  rounded-full text-primary text-xs'>{category}</span>
      <div className='p-5'>
        <h5 className='mb-2 font-medium text-gray-400'>{title}</h5>
        <p className='mb-3 text-xs text-gray-400' dangerouslySetInnerHTML={{"__html": description.slice(0,80)}}></p>
      </div>
    </div>
  )
}

export default BlogCard
