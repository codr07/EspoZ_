import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex  flex-col gap-4 items-center justify-center px-4 pb-6'>
      <h1 className='text-6xl font-bold'>Never Miss Any News!</h1>
      <p className='md:text-lg text-gray-500 bp-8 font-semibold'>Subscribe to get notified about news regarding gaming world.</p>
      <form id='newsletter' className='w-full flex items-center justify-center px-10 gap-2'>
          <input type="text" name='' placeholder='expamle@mail.com' className='border border-gray-300 rounded-md h-20 sd:h-10  outline-none w-full  px-3' required />
          <button  type="submit"className='md:px-12 px-8 h-10 text-white  cursor-pointer w-full sd:h-6 rounded-md'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetter
