import React from 'react'
import Navbar from "../components/Navbar"
import Banner from "../components/Banner"
import Blogimg from '../components/blogimg'
import Footer from "../components/Footer"
function blog() {
  return (
    <div className='blogpage'>
        <Navbar/>
        <Banner/>
        <Blogimg/>
        <Footer/>
        
    </div>
  )
}

export default blog