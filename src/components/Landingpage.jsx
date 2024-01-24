import React, { useState } from 'react'
import landingimg from '../images/landingimg.avif'
import img23 from '../images/img23.avif'
import IMG232 from '../images/IMG232.jpeg'
import IMG233 from '../images/IMG233.avif'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Landingpageinnercont from './Landingpageinnercont'

function Landingpage() {
  const [activate, setActivate] = useState(0)
 
  const items = [
    {
      title: 'Surface Pro 9',
      img: landingimg,
      p: 'Tablet versatility and laptop power — all in one ultra-portable device',
      btn: 'Learn More',
      IMG:IMG233,
      
    },
    {
      title: 'Get more from Copilot ',
      img: img23,
      p: 'See how your everyday AI companion can help enhance life and work ',
      btn: ' For individuals',
      IMG:IMG232,

    }
  ]
  function prev() {
    setActivate((activate)=>activate === 0 ? items.length -1 :activate -1)
    
  }
  function next() {
    setActivate((activate)=>activate === items.length -1  ? 0 :activate +1)
    
  }

  return (
    <div className='w-full overflow-hidden border-b shadow '>
      <div className="inner flex w-full  transition-all delay-75 ease-in-out" style={{transform : `translateX(-${activate * 100}%)`}}>
        {
          items.map((item,index)=>{
            return <Landingpageinnercont key={index} item={item}/>
          })
        }
      </div>
      <div className="btns  w-full flex justify-center gap-6 items-center py-5" >
        <button onClick={prev} className='text-3xl active:text-xl' ><FaChevronLeft/></button>
        {
          items.map((_,index)=>{
            return <div key={index} className={`dots  bg-gray-500 active:bg-black rounded-full h-1  w-1  ${activate === index ?' transition-all ease-in-out delay-75 p-2 bg-gray-600' : 'p-1'}`}></div>
          })
        }
        <button onClick={next} className='text-3xl active:text-xl'  ><FaChevronRight/></button>
      </div>

    </div>
  )
}

export default Landingpage