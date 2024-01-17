import React from 'react'
import Micro365landing from '../components/Micro365landing'
import img from '../images/imglanding.avif'
import MicroLanding365two from '../components/MicroLanding365two'
import Microlandingthree from '../components/microlandingthree'

function Microsoft365() {
  return (<>
    <div className='slider w-full  flex justify-center items-end relative h-[200px]'>
<img  className='-z-10 h-full absolute top-0 object-cover'src={img}alt="" />
 <Micro365landing/>
    </div>
    <MicroLanding365two/>
    <Microlandingthree/>
  </>

  )
}

export default Microsoft365