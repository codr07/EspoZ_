import React, { useEffect ,useState } from 'react'
import { assets,dashboard_data } from '../../assets/assets'
import BlogTableItem from '../../components/Admin/BlogTableItem'

const Dashboard = () => {

  const [dashboardData , setDashboardData] = useState({
    blogs:0,
    drafts:0,
    recentBlogs:[]
  })

  const fetchdashboardData  = async () => {
    setDashboardData(dashboard_data)
  }

  useEffect(() => {
    fetchdashboardData()
  })
  return (
    <div className='flex-1 p-4 md:p-10'> 
      <div className='flex flex-wrap gap-4'>

        <div className='flex items-center gap-4 p-4 min-w-58 bg-[#4f44e52f] border-1 border-[#5044e5] rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_1} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-300'>{dashboardData.blogs}</p>
            <p className='text-gray-200 font-bold'>Blogs</p>
          </div>
        </div>

        

        <div className='flex items-center gap-4 p-4 min-w-58 bg-[#4f44e52f] border-1 border-[#5044e5] rounded shadow cursor-pointer hover:scale-105 transition-all'>
          <img src={assets.dashboard_icon_3} alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-300'>{dashboardData.drafts}</p>
            <p className='text-gray-200 font-bold'>Drafts</p>
          </div>
        </div>
      </div>
      <div>
          <div className='flex flex-center gap-3 m-4 mt-6 text-gray-300'>
            <img src={assets.dashboard_icon_4} alt="" />
            <p>Latest Blogs</p>
          </div>
          <div className='relative max-w-4xl overflow-x-auto shadow-2 shadow-[#4f44e581] rounded-lg scrollbar-hide border-1 border-[#4f44e581]'>
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
                {dashboardData.recentBlogs.map((blog,index) => {
                  return <BlogTableItem key={blog._id} blog={blog} fetchBlog={fetchdashboardData} index={index + 1} />
                })}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}

export default Dashboard
