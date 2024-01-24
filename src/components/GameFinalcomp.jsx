import React from 'react'
import game1 from '../images/game1.jpg'
import game2 from '../images/game2.jpg'
import game3 from '../images/game3.jpg'
import game4 from '../images/game4.jpg'
import game5 from '../images/game5.jpg'
import game6 from '../images/game6.jpg'
import { FaChevronRight } from "react-icons/fa";


function GameFinalcomp() {
  return (
    <div className='w-full flex flex-col gap-1 lg:flex-row p-2 '>
            {/* left div */}
            <div className="frst w-full flex flex-col gap-1 lg:w-1/2 ">
                <div className="one sm:relative lg:w-full ">
                    <div className="img h-[30%] lg:h-[100%] w-full ">
                        <img src={game5} className='h-full w-full ' alt="" />
                    </div>
                    <div className="detail sm:absolute top-[75%] lg:top-[70%] sm:h-min sm:bg-transparent sm:px-6 bg-gray-800 h-[50%] pt-5 text-white w-full flex flex-col gap-5 items-start px-2 py-6">
                        <h1 className='text-3xl sm:text-4xl font-bold'>Far Cry 6</h1>
                        <p>Join a modern-day guerrilla. Play with PC Game Pass or Ultimate. </p>
                        <button className='flex items-center gap-3 font-bold'> GET IT NOW <FaChevronRight /></button>
                    </div>
                </div>
                {/* div two */}
                <div className='flex flex-col w-full gap-1'>
                    <div className="two flex flex-col lg:flex-row">
                        <div className="img h-[30%] lg:h-full w-full overflow-hidden ">
                            <img src={game1} className='h-full w-full hover:scale-110 -z-10 transition-all delay-75 ease-in-out ' alt="" />
                        </div>
                        <div className="details  w-full text-black space-y-8 p-2">
                            <h1 className='text-3xl  font-bold'>Sea of Thieves: Season 11</h1>
                            <p>Adventure, on demand! Choose a Voyage and dive straight into action.</p>
                            <button className='font-bold flex items-center gap-3'> GET IT NOW <FaChevronRight /></button>
                        </div>

                    </div>
                    <div className="three">
                        <div className="two flex flex-col lg:flex-row-reverse">
                            <div className="img h-[30%] lg:h-[260px] w-full overflow-hidden  ">
                                <img src={game2} className='h-full w-full hover:scale-110 -z-10 transition-all delay-75 ease-in-out ' alt="" />
                            </div>
                            <div className="details  w-full text-black space-y-5 p-2">
                                <h1 className='text-3xl  font-bold'>F1® 23</h1>
                                <p>Be the last to brake. Play with PC Game Pass or Ultimate.</p>
                                <button className='font-bold flex items-center gap-3'> GET IT NOW <FaChevronRight /></button>
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
                        <img src={game3} className='w-full h-full hover:scale-110 -z-10 transition-all delay-75 ease-in-out lg:object-cover' alt="" />
                    </div>
                    <div className="details  w-full text-black space-y-5 p-2">
                        <h1 className='text-3xl  font-bold'>SAND LAND</h1>
                        <p>Dive into a legendary world from the creator of Dragon Ball</p>
                        <button className='font-bold flex items-center gap-3'> PRE-ORDER NOW <FaChevronRight /></button>
                    </div>
                </div>


                <div className="two sm:relative  ">
                    <div className="img h-[30%] lg:h-full  w-full ">
                        <img src={game4} className='h-full w-full  ' alt="" />
                    </div>
                    <div className="detail sm:absolute top-[75%] lg:top-[70%] sm:h-min sm:bg-transparent sm:px-6  h-[50%]  pt-5 lg:text-white w-full flex flex-col gap-5 items-start px-2 py-6">
                        <h1 className='text-3xl sm:text-4xl font-bold'>Assassin’s Creed Valhalla</h1>
                        <p>Play with Xbox Game Pass Ultimate</p>
                        <button className='flex items-center gap-3 font-bold'> GET IT NOW <FaChevronRight /></button>
                    </div>
                </div>
                <div className="three w-full lg:flex lg:flex-row-reverse">
                    <div className="img w-full h-[30%]  lg:h-full overflow-hidden ">
                        <img src={game6} className='w-full lg:h-[245px]  hover:scale-110 -z-10 transition-all delay-75 ease-in-out ' alt="" />
                    </div>
                    <div className="details  w-full text-black space-y-5 p-2">
                        <h1 className='text-3xl  font-bold'>Cyberpunk 2077: Ultimate Edition</h1>
                        <p>Immerse yourself in the ultimate Cyberpunk 2077 experience</p>
                        <button className='font-bold flex items-center gap-3'> GET IT NOW <FaChevronRight /></button>
                    </div>
                </div>

            </div>

        </div >
  )
}

export default GameFinalcomp