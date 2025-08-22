import React from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='w-full max-w-sm p-6 max-ms:m-6 border shadow-xl rounder-lg border-[#5044e5] shadow-[#4f44e52f]'>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='w-full py-6 text-center'>
            <h1 className='text-5xl font-bold'> <span className='text-[#5044e5]'>Admin</span> Login</h1>
            <p className='text-xl font-light'>Enter your login creds to access to admin panel</p>
          </div>
          <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-300'>
            <div className='flex flex-col '>
              <label htmlFor="">Email</label>
              <input onChange={e=> setEmail(e.target.value)} value={email} type="email" name="" id="" placeholder='example@espoz.com' className='border-b-2 borer-gray300 p-2 outline-none mb-6'/>
            </div>
            <div className='flex flex-col '>
              <label htmlFor="">Password</label>
              <input onChange={e=> setPassword(e.target.value)} value={password} type="password" name="" id="" placeholder='Enter password' className='border-b-2 borer-gray300 p-2 outline-none mb-6'/>
            </div>
            <button type="submit" className='w-full py-3 font-medium bg-[#5044e5] text-white rounded cursor-pointer hover:bg-[#4f44e52f] transition-all'>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
