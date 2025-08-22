import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
      <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-8 sm:w-10' />
      <button onClick={()=>navigate('/admin')} className='sign flex items-center gap-2 rounded-full text-sm cursor-pointer px-10 py-2.5'>
        <span className='font-bold'>Admin</span>
        <img src={assets.arrow} className='w-3' alt="arrow" />
      </button>
    </div>
  )
}

export default Navbar
