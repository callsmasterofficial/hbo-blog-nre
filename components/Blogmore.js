import React from 'react'
import Link from "next/link"


function Blogmore() {
  
  return (
    <div className='Blogmore'>
       <div className='blogmore-container  w-[80%]  m-auto'>
            {/* map starts here */}
            {data.map((item)=>(  
            <div className='map  backdrop-blur-md backdrop-opacity-5'  key={item.id}>
              <div className='text-box flex items-center  my-4'>
              <h2 className='text-xl font-semibold my-2 primary_text_color'>{item.title}</h2>
              </div>
                <div className='img-box flex items-start justify-start object-contain w-[100%] h-[100%] my-4'>
                  <Link href="/blog">
                   <img className='img rounded-md my-2 cursor-pointer' src={item.img} alt="Batman Image" style={{boxShadow: "0px 0px 4px 4px white"}} />
                  </Link>
                </div>
                <p className='primary_text_color text-base my-4'>
                    {item.description_1}
                </p>

                <div className='title_2 my-3 primary_text_color underline cursor-pointer tracking-wider'>
                    <h2 className='text-xl font-semibold'>{item.title_2}</h2>
                </div>
                <span className='description_2 text-sm primary_text_color'>
                    {item.description_2}
                </span>
                <p className='p1_title2 text-sm primary_text_color my-3'>
                 {item.p1_title2}
                </p>

                <p className='p2_title2 text-sm primary_text_color'>
                 {item.p2_title2}
                </p>

                <p className='p3_title2 text-sm primary_text_color my-3'>
                 {item.p3_title2}
                </p>

                 <h3 className='text-lg primary_text_color font-semibold underline tracking-wide my-3'>
                       {item.title_3}
                 </h3>

               

              <div className='p1_title3 text-sm primary_text_color my-3'>
                {item.p1_title3}
              </div>

               <div className='p2_title3 text-sm primary_text_color my-3'>
                   {item.p2_title3}
               </div>

               <div className='p3_title3 text-sm primary_text_color my-3'>
                 {item.p3_title3}
               </div>
            </div>
            ))}
       </div>
    </div>
  )
}

export default Blogmore


const data =[
    {
        id: 1,
        title: "The Batman Is Coming To Hbo Max Earlier Than We Thought",
        img: "https://www.hbomaxwatchparty.com/wp-content/uploads/2022/04/The-Batman-is-coming-to-HBO-Max-earlier-than-we-thought.jpg",
        description_1: "Batman has given an official HBO Max release date. It’s interesting that it will be released on the streaming channel sooner than people think. However, WarnerMedia, in a press release, confirmed that The Batman would launch on its streaming platform on Monday, April 18. In addition, movie fans who have not subscribed to HBO Max can also watch the Dark Knight’s latest movie conversion in April. Also, Batman will telecast on HBO as well. Still, those wishing to grab the DC Extended Universe (DCEU) click will have to wait a couple of days to do so. Therefore, The Batman won’t air on HBO until Saturday, April 23 at 8 pm EST / 5 pm PST. So if you don’t want to wait, you shall have to sign up to HBO Max to see it before time.",
        
        
        title_2: "Stream on HBO Max Watch Party",
        description_2: "Furthermore, HBO Max Watch Party is a browser extension. That enables users to watch HBO Max content with their friends and family in synchronisation. Although, you shall watch HBO Max movies and TV series in high definition with anyone. And, along with video synchronisation, a unique live chat function allows you to react to the on-screen action in real-time. Then, you can stream the best HBO Max movies and television series wherever HBO Max is available. Moreover, this extension’s new features will undoubtedly improve your binge-watching experience. Hence, setting up the HBO Max Watch Party is a piece of cake.",
        p1_title2: "After several pandemic delays, Batman finally released in cinemas on March 4, 2022. Additionally, the Caped Crusader’s latest movie conversion have with captious honour from fans and journalists alike. Many praised its vibe and tone, cast performances, plot, and aptitude for the operative side of the character’s makeup.",
        p2_title2: "Our spoiler-free review said The Batman was “an amazingly careful and tension-filled DCEU movie that did not lose sight of the iconic vigilante’s comic book roots. Even though, its unique blend of detective noir, horror, psychological thriller, action, and drama. That delivers a luxurious tale that’s full of gritty style, its all-star cast, cinematography, and pulsating score increase the circus.”",
        p3_title2: "As well as, for more content about The Batman. Do check out our private chats with director Matt Reeves and star Colin Farrell. About the movie’s horror-esque influences and Penguin spin-off, respectively. Though, once you’ve completed watching The Batman, read our ending and post-credits scene explainer. Also, which “really cool” scene Reeves left out of the final cut.",
        
        title_3: "Analysis: why The Batman’s HBO Max release date change?",
        p1_title3: "Well, there’s no guarantee that it was. As, we mentioned before, WarnerMedia was likely to have unconsciously leaked The Batman’s HBO Max release. With a technical gap on the official HBO website seemingly confirming as much. In particular, it’s attainable that The Batman’s HBO Max webpage was purely a placeholder. As, that WarnerMedia was still debating when to bring the captiously-praised movie to its streaming platform. Meanwhile, we have seen many online stores use placeholder dates. For particular products in the past earlier they settle on a confirmed launch date. Hence, maybe WarnerMedia was taking a page out of that strategy book, then.",
        p2_title3: "It’s that or, with many big HBO Max hitters including The Flight Attendant season 2 and Barry season 3 returning later this month. WarnerMedia decided to release The Batman earlier. So its subscriber base was not spoiled for choice over what to watch. In other words, add in the prospect that one particular HBO Max show was a significant hit for the streamer over the past fortnight. And Max users are sure to be hit with a bout of ‘choice paralysis’ as April progresses.",
        p3_title3: "Still, it’s good that we’ve received official confirmation of The Batman’s HBO Max release. Simply, at the time of writing, it’s only one week from appearing on our screens at home. Which makes a pleasing change from waiting for ages. For newly released films to make their way to streaming services the world over.",


 
    }
]