import React from 'react'
import Micro365landing from '../components/Micro365landing'
import img from '../images/imglanding.avif'
import MicroLanding365two from '../components/MicroLanding365two'
import Microlandingthree from '../components/Microlandingthree'
function Microsoft365() {
  return (<div className='relative'>
    <div className='slider w-full  flex justify-center items-end relative h-[200px] md:h-[500px] sm:h-[300px] lg:h-[600px]'>
<img  className='-z-10 w-full h-full absolute top-0 object-cover'src={img}alt="" />
 <Micro365landing/>
    </div>
    <div className='md:absolute top-[8%] lg:left-[12%] lg:w-[45%]'>

    <MicroLanding365two/>
    </div>
    <Microlandingthree/>
  </div>

  )
}

export default Microsoft365