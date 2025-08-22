import React from 'react'
import { assets} from '../assets/assets'
import { div, li, link } from 'motion/react-client'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lx:px-32'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'>
            <div className='flex flex-col items-center justify-center'>
                <img src={assets.logo} alt="" className='w-34 sm:w-44'/>
                <p className='max-w-[410px] mt-6 text-white font-bold text-7xl'>EspoZ</p>
            </div>
            <div className='flex flex-wrap justify-center w-full md:w-[45%] gap-5 text-center items center'>
                <h2 className='text-gray-200 text-2xl'>Subscription Plans for Market Analysis is coming Soon</h2>
            </div>
        </div>      
        <p className='py-4 text-center text-sm md:text-base text-gray-500//80'> Copyright 2025 © EspoZ : All rights are reserved.</p>
    </div>
  )
}

export default Footer
