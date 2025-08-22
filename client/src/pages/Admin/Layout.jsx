import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Admin/Sidebar'

function Layout() {

  const navigate = useNavigate()

  const logout = ()=>{
    navigate('/')
  }
  return (
    <>
      <div className='flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 cursor-pointer'>
        <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-8 sm:w-10' />
        <button onClick={logout} className='sign flex items-center gap-2 rounded-full text-sm cursor-pointer px-10 py-2.5'>
          <span className='font-bold'>Signout</span>
          <img src={assets.arrow} className='w-3' alt="arrow" />
        </button>          
      </div>
      <div className='flex h-[calc(100vh-70px)]'>
        <Sidebar/>
        <Outlet/>
      </div>
    </>
  )
}

export default Layout
