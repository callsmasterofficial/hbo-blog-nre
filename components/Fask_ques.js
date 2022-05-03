import siteConfig from "../siteConfig"

function Fask_question() {
  return (
    <>


      <div className="f-ask-container m-auto mt-14 w-[80%]">
        {/* text section */}
        <div className="f-ask-box  mb-10 flex items-center justify-center border-b-2  border-white">
          <h4 className="mb-5 p-2 text-2xl md:text-3xl font-semibold primary_text_color">
            Frequently Asked Questions
          </h4>
        </div>
         <div className="accordion secondary" id="accordionExample" >
    {siteConfig.faq.accordian.map(item=>(
    
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
        <div className='steps primary_text_color py-4 px-5'>
           <p>{item.p1}</p>
           <p>{item.p2}</p>
           <p>{item.p3}</p>
           <p>{item.p4}</p>
           <p>{item.p5}</p>
        </div>
      </div>
    </div>))}
    
    
  </div>

        
      </div>
    </>
  )
}


export default Fask_question