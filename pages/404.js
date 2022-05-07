import React from 'react'
import Navbar from "../components/Navbar"
import Error from '../components/404'
function error() {
  return (
    <div className='error_404 '>
      <div>
        <Navbar/>
      </div>
      <Error/>
    </div>
  )
}

export default error