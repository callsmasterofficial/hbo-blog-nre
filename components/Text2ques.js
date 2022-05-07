import React from 'react'
import siteConfig from '../siteConfig'

function Textques() {
return(
  <div className="accordion" id="accordionExample" >
  {siteConfig.section.three.accordian.map(item=>(
  
  <div className="accordion-item" key={item.id}>
  <h2 className="accordion-header" id={`heading-${item.id}`}>
    <button
      className="
        accordion-button
        relative
        flex
        w-full
        items-center
        rounded-none
        border-b-2
        border-white
        secondary py-4 px-5
        text-left
        text-base
        text-white
        transition
        focus:outline-none
        mt-2
        collapsed
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
    className="collapse accordion-collapse"
    aria-labelledby={`heading-${item.id}`}
    data-bs-parent="#accordionExample"
    style={{backgroundColor: "#303030"}}
  >
    <div className="accordion-body py-4 px-5 primary_text_color ">
      {item.answer}
    </div>
  </div>
</div>
  ))}
  
  
</div>

)}




export default Textques
