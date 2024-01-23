import React from 'react'
import XboxCarousel from '../components/XboxCarousel'
import GamePass from '../components/GamePass'
import GameImp from '../components/GameImp'
import GameLandingPage from '../components/GameLandingPage'

function Xbox() {
  return (
    <div className='w-full '>
      <XboxCarousel/>
      <GamePass/>
      <GameImp/>
      <GameLandingPage/>
    </div>
  )
}

export default Xbox