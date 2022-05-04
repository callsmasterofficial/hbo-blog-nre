import React from 'react'
import Navbar from '../components/Navbar'

import Blogmore from '../components/Blogmore'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
function blogmore() {
  return (
    <div className='blogmore'>
      <Navbar/>
      <Banner/>
      <Blogmore/>
      <Footer/>
    </div>
  )
}

export default blogmore