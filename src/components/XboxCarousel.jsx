import React, { useEffect, useState } from 'react'
import img13 from '../images/IMG13.jpg'
import img14 from '../images/IMG14.jpg'
import IMG131 from '../images/IMG131.jpg'
import IMG141 from '../images/IMG141.jpg'
import img15 from '../images/img15.jpg'
import IMG151 from '../images/IMG151.jpg'
import CarouselItems from './CarouselItems'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function XboxCarousel() {
  const [activate, setActivate] = useState(0)
  const items = [
    {
      img1: img13,
      IMG: IMG131,
      h1: 'Indiana Jones and the Great Circle™',
      p: 'Unravel an ancient mystery in a global adventure',
      btn: 'Add To Wish List',

    },
    {
      img1: img14,
      IMG: IMG141,
      h1: 'SAND LAND',
      p: 'Dive into a legendary world from the creator of Dragon Ball',
      btn: 'PRE-ORDER NOW',

    },
    {
      img1: img15,
      IMG: IMG151,
      h1: 'Palworld (Game Preview)',
      p: 'Available now with PC Game Pass or Ultimate',
      btn: 'GET IT NOW',

    }
  ]
  function prev (){
    
    setActivate((activate)=>activate === 0 ? items.length -1 : activate-1)
  }
  function next (){
    setActivate((activate)=>activate ===  items.length -1? 0  : activate+1)

  }
  
  
  return (
   <div className='w-full overflow-hidden'>
<div className='w-full flex transition-all delay-150 ease-in-out' style={{transform :`translateX(-${activate * 100}%)`}}>
  {items.map((item, newIndex) => {
    return <CarouselItems key={newIndex} item={item} />;
  })}
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

export default XboxCarousel