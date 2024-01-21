import React, { useState } from 'react'
import img13 from '../images/IMG13.jpg'
import img14 from '../images/IMG14.jpg'
import IMG131 from '../images/IMG131.jpg'
import IMG141 from '../images/IMG141.jpg'
import CarouselItems from './CarouselItems'

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

    }
  ]
  return (
    <div className=' w-full border-2 border-black '>
      <div className="inner flex border-4 border-green-500 w-full">

      {
        items.map((item,index) => {
          return <div key={index} className='border-4 border-white flex' >
            <CarouselItems item={item} />
          </div>
        })
      }

      </div>

    </div>
  )
}

export default XboxCarousel