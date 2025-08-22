import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Moment from 'moment'
import { FacebookShareButton , TwitterShareButton , EmailShareButton } from 'react-share'
import Loader from '../components/Loader'

const Blog = () => {
  const {id} = useParams()
  const [data, setData] = useState(null)
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  const fetchBlogData = async()=>{
    const data = blog_data.find(item => item._id === id)
    setData(data)
  }


  useEffect (()=>{
    fetchBlogData()
  },[])

  return data ?  (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-50'/>
      <Navbar/>

      <div className='text-center mt-20 text-gray-100 flex flex-col items-center px-5 md:px-2'>
        <p className='date text-primary py-2 px-5 font-medium'>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='text-2xl sm:text-4xl font-bold max-w-2xl mx-auto text-gray-300'>{data.title}</h1>
        <h2 className='subtitle my-5 truncate mx-auto'>{data.subTitle}</h2>
        <p className='author text-sm sm:text-l cursor-pointer'>{data.author}</p>
      </div>

      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
        <img src={data.image} alt="" className='rounded-3xl mb-5' draggable="false"/>

        <div className='rich-text pt-10 max-w-3xl mx-auto' dangerouslySetInnerHTML={{__html: data.description}}></div>


        {/* share */}
        <div className='my-24 max-w-3xl mx-auto'>
          <p className='font-bold my-4 font-xl'>Share directly</p>
          <div className='flex'>
            <FacebookShareButton url='espoz.netlify.app'> <img src={assets.facebook_icon} width={50} alt="" /></FacebookShareButton>
            <TwitterShareButton url='espoz.netlify.app'> <img src={assets.twitter_icon} width={50} alt="" /></TwitterShareButton>
            <EmailShareButton url='espoz.netlify.app'><img src={assets.googleplus_icon} width={50} alt="" /></EmailShareButton>
          </div>
        </div>
        

      </div>
      <Footer/>

    </div>
  ) : <Loader/>
}

export default Blog
