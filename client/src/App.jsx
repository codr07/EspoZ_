import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/Admin/Layout'
import Dashboard from './pages/Admin/Dashboard'
import AddBlog from './pages/Admin/AddBlog'
import Listblog from './pages/Admin/Listblog'
import Login from './components/Admin/Login'
import 'quill/dist/quill.snow.css'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/admin' element={true ? <Layout/> : <Login/>}>
          <Route index element={<Dashboard/>} />
          <Route path='addblog' element={<AddBlog/>}/>
          <Route path='listblog' element={<Listblog/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
