import React, { useLayoutEffect, useRef } from 'react'
import img22 from '../images/img22.jpg'
import IMG222 from '../images/IMG222.jpg'
import { FaChevronRight } from "react-icons/fa";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


function GameLandingPage() {
  const cont = useRef(0)
  useLayoutEffect(() => {
    const ctx = gsap.context(()=>{
      const tl = gsap.timeline()
      tl.from('.MAin .main',{
        y:200,
        opacity:0,
        scrollTrigger:{
          trigger:'.main',
          // markers:true,
          start:'top 90%',
          end : 'bottom center',

          scrub:true
        }

      })
    },cont)
  
    return () =>ctx.revert()
  }, [])
  return (
    <div className="MAin" ref={cont}>

    
    <div className='main w-full lg:relative lg:p-2' >
        <div className="one w-full
         h-[20%]">
            <img src={IMG222} className='w-full h-full lg:hidden' alt="" />
            <img src={img22} className='hidden lg:flex w-full h-full ' alt="" />
        </div>
        <div className=" py-10 px-5 w-full flex flex-col  items-start gap-4 lg:absolute lg:top-[25%] lg:right-10 lg:w-1/3 ">
            <h1 className='font-bold text-2xl xl:text-4xl'>Xbox Series S – Starter Bundle</h1>
            <p>Get an Xbox Series S and 100s of games with 3 months of Game Pass Ultimate</p>
            <button className=" py-2 px-5 bg-[#9bf00b] font-extrabold text-green-950 flex items-center gap-4 sm:text-lg  sm:p-2">LEARN MORE<FaChevronRight/> </button>


        </div>
        
    </div>
    </div>
  )
}

export default GameLandingPage