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
       <div className='heading container flex items-center justify-center pl-[90px]'>
            <h3 className='primary_text_color text-xl md:text-3xl font-bold'>{siteConfig.footer.title}</h3>
       </div>
       
       <div className='btn-box flex items-center justify-center m-10 border-b-2 border-white w-auto'>
          <div className='install_btn -mt-6 md:mt-0 mr-10 justify-center items-center mb-5'>
            <InstallButton/>
          </div>
          
         <button className='bg-red-700 rounded-[4px] mb-5 -mt-6 md:mt-0 p-2 w-auto text-xl flex items-center justify-center' >
           <span className='font-bold px-2 text-base text-white ' onClick={()=>router.push("/blog")}>Blog</span>
         </button>
         
       </div>
          <div className='popu_search_container mb-4'>
              <div className='popu_search_box  p-2 flex items-center justify-center -mt-6 '>
                 <span className='span  flex items-center'><img className='w-8 h-8 pr-2 object-contain' src="https://img.icons8.com/ios-glyphs/344/ffffff/right3.png" alt="side_icon" />
                 <h2 className='text-white font-bold mr-1'>Popular Searches</h2><span className='mr-1 text-white'>:</span><p className='font-semibold text-base text-white'>HBO Watch Party, Watch Party HBO Max, HBO Go Watch Party, HBO Max Watch Party, HBO Party, HBO Max Party
                 </p></span>
              </div>

              <div className='popu_search_box  p-2 flex items-center justify-center'>
                 <span className='span  flex items-center'>
                 <h2 className='text-white font-bold mr-1 text-base'>Disclaimer</h2><span className='mr-1 text-white'>:</span><p className='font-semibold text-base text-white'>HBO is a trademark of Home Box Office, Inc.. This website & extension hold no association or affiliation with HBO Max or any third-party companies.
                 </p></span>
              </div>

    
          </div>
    </div>
  )
}

export default Footer