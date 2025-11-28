import React, { useEffect, useRef, useState } from 'react'
import Banner from "../assets/banner.webp";
import Marquee from "react-fast-marquee";
import { rye, relay, instant, outline, resend, unthread, circleBack, magicPatterns } from "../assets/marquee-images/index.js";


function Secondary() {
     
     const [ visible, setVisible ] = useState(false);
     const images = [ rye, relay, instant, outline, resend, unthread, circleBack,magicPatterns ];

     useEffect(() => {
          setVisible(true);
     });

  return (
    <div className="max-w-5xl flex flex-col items-center p-4 absolute">
          {/* adding a cover element bg-yellow-200 and see */}
          <div className="absolute left-0 h-full w-px -mt-4 bg-linear-to-b from-neutral-200/50  to-transparent"></div>
          <div className="absolute right-0 h-full w-px -mt-4 bg-linear-to-b from-neutral-200/50 to-transparent"></div>
          <img 
               src={Banner}
               alt={`logo-image`}
               className={`rounded-xl object-cover object-top-left border border-slate-300/60 shadow-md mask-b-from-50% to-100% transition-opacity delay-1500 duration-1000 ease-in ${visible ? "opacity-100" : "opacity-0"}`}
          />

          <div className='text-black text-sm font-medium px-2 tracking-wide mt-5'>Trusted by fast-growing startups</div>

          <div className='border border-transparent mt-8 w-full h-fit relative max-w-5xl'>
               <div className='bg-[#FDFDFF] w-18 absolute h-full left-0 mask-r-from-12% to-100% z-10'></div>
               <div className='bg-[#FDFDFF] w-18 absolute h-full right-0 mask-l-from-12% to-100% z-10'></div>

               <Marquee pauseOnHover>
                    { images.map( (img, ind) => (
                         <div  className='flex flex-row'>
                              <img src={img} alt={ind} className='h-6 cursor-pointer mx-10' />
                         </div>
                    )) }
               </Marquee>
          </div>
     </div>
  )
}

export default Secondary