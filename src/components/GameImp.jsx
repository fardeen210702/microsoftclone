import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import img16 from '../images/img16.jpg'
import img17 from '../images/img17.jpg'
import img18 from '../images/img18.jpg'
import img19 from '../images/img19.jpg'
import img20 from '../images/img20.jpg'
import img21 from '../images/img21.jpg'
import { FaChevronRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger)
function GameImp() {
    const component  = useRef(0)
    useLayoutEffect(() => {
      const ctx = gsap.context(()=>{
        let tl = gsap.timeline()
        tl.from('.second .two',{
            y:200,
            duration:3,
           scrollTrigger:{
            trigger:'.second',
            // markers:true,
            start:'top 30%',
            end:'top 10%',
            scrub:true,
           }

        })
        tl.from('.prince .detailss',{
            y:200,
            duration:3,
            scrollTrigger:{
                trigger:'.prince',
                start:'top 70%',
                // markers:true,
            end:'top 20%',
            scrub:true,

            }
        })
        tl.from('.three .elder',{
            y:200,
            duration:3,
            delay:1,
            scrollTrigger:{
                trigger:'.three',
                // markers:true,
                start:'top 70%',
                end:'bottom 50%',
                scrub:true,
            }
        })
      },component)
      return () => ctx.revert()
    }, [])
    

    return (
        <div className='main w-full flex flex-col gap-1 lg:flex-row p-2 ' ref={component}>
            {/* left div */}
            <div className="frst w-full flex flex-col gap-1 lg:w-1/2 ">
                <div className="one sm:relative lg:w-full ">
                    <div className="img h-[30%] lg:h-[100%] w-full ">
                        <img src={img16} className='h-full w-full ' alt="" />
                    </div>
                    <div className="detail sm:absolute top-[75%] lg:top-[70%] sm:h-min sm:bg-transparent sm:px-6 bg-gray-800 h-[50%] pt-5 text-white w-full flex flex-col gap-5 items-start px-2 py-6">
                        <h1 className='text-3xl sm:text-4xl font-bold'>WWE 2K24</h1>
                        <p>Finish your story</p>
                        <button className='flex items-center gap-3 font-bold'> PRE-ORDER NOW <FaChevronRight /></button>
                    </div>
                </div>
                {/* div two */}
                <div className='prince flex flex-col w-full gap-1'>
                    <div className="detailss flex flex-col lg:flex-row">
                        <div className="img h-[30%] lg:h-full w-full overflow-hidden ">
                            <img src={img19} className='h-full w-full hover:scale-110 -z-10 transition-all delay-75 ease-in-out ' alt="" />
                        </div>
                        <div className="details  w-full bg-[#107c10] text-white space-y-8 p-2">
                            <h1 className='text-3xl  font-bold'>Prince of Persia The Lost Crown</h1>
                            <p>Dive into a thrilling platformer set in a mythological Persian world.</p>
                            <button className='font-bold flex items-center gap-3'> GET IT NOW <FaChevronRight /></button>
                        </div>

                    </div>
                    <div className="three">
                        <div className="elder flex flex-col lg:flex-row-reverse">
                            <div className="img h-[30%] lg:h-[260px] w-full overflow-hidden  ">
                                <img src={img20} className='h-full w-full hover:scale-110 -z-10 transition-all delay-75 ease-in-out ' alt="" />
                            </div>
                            <div className="details  w-full bg-[#107c10] text-white space-y-5 p-2">
                                <h1 className='text-3xl  font-bold'>The Elder Scrolls Online: Gold Road</h1>
                                <p>Pre-order to get a new mount and pet now plus bonus items at launch</p>
                                <button className='font-bold flex items-center gap-3'> PRE-ORDER NOW <FaChevronRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----------------------------------- */}
            {/* right div */}

            <div className="second w-full flex flex-col gap-1 lg:w-1/2">
                <div className="one w-full lg:flex ">
                    <div className="img w-full h-[30%] lg:h-[240px] overflow-hidden ">
                        <img src={img17} className='w-full h-full hover:scale-110 -z-10 transition-all delay-75 ease-in-out lg:object-cover' alt="" />
                    </div>
                    <div className="details  w-full bg-[#107c10] text-white space-y-5 p-2">
                        <h1 className='text-3xl  font-bold'>Discover your next favourite game</h1>
                        <p>Play hundreds of games for one low monthly price</p>
                        <button className='font-bold flex items-center gap-3'> JOIN NOW <FaChevronRight /></button>
                    </div>
                </div>


                <div className="two sm:relative ">
                    <div className="img h-[30%] lg:h-full  w-full ">
                        <img src={img18} className='h-full w-full  ' alt="" />
                    </div>
                    <div className="detail sm:absolute top-[75%] lg:top-[70%] sm:h-min sm:bg-transparent sm:px-6 bg-white h-[50%] pt-5 text-black w-full flex flex-col gap-5 items-start px-2 py-6">
                        <h1 className='text-3xl sm:text-4xl font-bold'>Refine your game</h1>
                        <p>Shine with Xbox Wireless Controller – Gold Shadow Special Edition</p>
                        <button className='flex items-center gap-3 font-bold'> LEARN MORE <FaChevronRight /></button>
                    </div>
                </div>
                <div className="Forza w-full lg:flex lg:flex-row-reverse">
                    <div className="img w-full h-[30%]  lg:h-full overflow-hidden ">
                        <img src={img21} className='w-full lg:h-[245px]  hover:scale-110 -z-10 transition-all delay-75 ease-in-out ' alt="" />
                    </div>
                    <div className="forza  w-full bg-[#107c10] text-white space-y-5 p-2">
                        <h1 className='text-3xl  font-bold'>Forza Motorsport Update 4.0</h1>
                        <p>Experience Daytona in the new free update.</p>
                        <button className='font-bold flex items-center gap-3'> GET IT NOW <FaChevronRight /></button>
                    </div>
                </div>

            </div>

        </div >
    )
}

export default GameImp