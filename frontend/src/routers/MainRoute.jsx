import React, { Suspense } from 'react'
import {Router, Route, BrowserRouter, Routes} from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Loader from '../components/Loader'

const Home = React.lazy(() => import('../pages/Home'));
const News = React.lazy(() => import('../pages/News'));
const Learn = React.lazy(() => import('../pages/Learn'));
const About = React.lazy(() => import('../pages/About'));

const MainRoute = () => {
  return (
   <React.Fragment>
     <BrowserRouter>
    <Navbar />
    <Suspense fallback={<Loader />}>
     <Routes>
      <Route index path='/' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/News' element={<News/>}></Route>
      <Route path='/Learn' element={<Learn/>}></Route>
     </Routes>
    </Suspense>
    <WhatsAppButton />
     <Footer/>
    </BrowserRouter>
   </React.Fragment>
  )
}

export default MainRoute