import React from 'react'
import siteConfig from '../siteConfig'

function InstallButton() {
  return (
    <div className="btn">
      <a href={siteConfig.extLink.chrome} target="_blank">
        <div className="button-box primary flex  cursor-pointer rounded-[4px] p-2.5">
          <button className="btn">
            <h2 className="h2 secondary_text_color  pl-2.5 font-bold">
              Install {siteConfig.siteName}
            </h2>
          </button>
        </div>
      </a>
    </div>
  )
}

export default InstallButton
