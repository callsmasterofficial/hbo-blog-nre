import React from 'react'
import siteConfig from '../siteConfig'

function Textques() {
return(
  <div className="accordion secondary" id="accordionExample" >
  {siteConfig.section.three.accordian.map(item=>(
  
  <div className="accordion-item border border-white secondary" key={item.id}>
    <h2 className="accordion-header mb-0 secondary" id={`heading-${item.id}`}>
      <button
        className="
          accordion-button
          relative
          flex
          w-full
          items-center
          rounded-none
          border-0
          secondary py-4 px-5
          text-left
          text-base
          primary_text_color
          transition
          focus:outline-none
        "
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={`#collapse${item.id}`}
        aria-expanded="true"
        aria-controls={`collapse${item.id}`}
        style={{backgroundColor: "black", color: "white"}}
        >
        {item.question}
      </button>
    </h2>
    <div
      id={`collapse${item.id}`}
      className="collapse accordion-collapse secondary"
      aria-labelledby={`heading-${item.id}`}
      data-bs-parent="#accordionExample"
    >
      <div className="accordion-body py-4 px-5 primary_text_color">
        {item.answer}
      </div>
    </div>
  </div>
  ))}
  
  
</div>

)}




export default Textques
