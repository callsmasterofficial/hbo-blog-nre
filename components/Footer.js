import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import InstallButton from './InstallButton'
import siteConfig from '../siteConfig'


function Footer() {
  const router = useRouter()
 
  return (
    <div className='footer-container mt-[20%] w-screen md:mt-[10%]'>
       <div className='footer-box border-t-2 border-white -mt-14'></div>
       
       <div className=' mt-8 flex items-center  justify-center'>
           <p className='primary_text_color text-xl font-semibold pb-5'>{siteConfig.footer.subheading}</p>
       </div>
       <div className='heading container flex items-center justify-center'>
            <h3 className='primary_text_color text-xl md:text-3xl font-bold'>{siteConfig.footer.title}</h3>
       </div>
       
       <div className='btn-box flex items-center justify-center m-10 border-b-2 border-white w-auto'>
          <div className='install_btn -mt-6 md:mt-0 mr-10 justify-center items-center mb-5'>
            <InstallButton/>
          </div>
          
         <button className='btn mb-5 -mt-6 md:mt-0 p-2 w-auto text-xl flex items-center justify-center' >
           <span className='font-semibold px-2' onClick={()=>router.push("/blog")}>Blog</span>
         </button>
         
       </div>

        <div className='select-box flex items-center justify-center'>
          <select name="" id="">
            <option value="">English</option>
          </select>
        </div>
    </div>
  )
}

export default Footer