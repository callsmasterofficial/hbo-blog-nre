import React from 'react'
import Navbar from '../components/Navbar'

import Blogmore from '../components/Blogmore'
import Footer from '../components/Footer'
function blogmore() {
  return (
    <div className='blogmore'>
      <Navbar/>
      <Blogmore/>
      <Footer/>
    </div>
  )
}

export default blogmore