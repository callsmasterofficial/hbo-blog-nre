import React from 'react'
import siteConfig from '../siteConfig'
import Chrome from './icons/Chrome'

function InstallButton() {
  return (
    <div className="btn">
      <a href={siteConfig.extLink.chrome} target="_blank">
          <button className="Add-to-chrome button-box primary flex  cursor-pointer rounded-[4px] p-2.5">
          <Chrome />  
            <h2 className="h2 secondary_text_color  pl-2.5 font-bold text-white">
             Add to Chrome <span style={{fontSize:"12px",color: "rgb(255 255 255)",fontWeight: "600"}}>it's free</span>
            </h2>
          </button>
      </a>
    </div>
  )
}

export default InstallButton
