import React from 'react'
import game1 from '../images/game1.svg'
import game2 from '../images/game2.svg'
import game3 from '../images/game3.svg'
import game4 from '../images/game4.svg'
import game5 from '../images/gmae5.svg'
import game6 from '../images/game6.svg'
function GamePass() {
  return (
    <div className='  flex flex-wrap text-green-700 justify-center gap-4 my-10 '>
        <div className="img w-[120px]  hover:border-b-4 hover:border-green-700  flex flex-col items-center my-2  ">
        <img className='w-[50px] h-[50px] ' src={game1} alt="" />
        <h1 className='text-lg font-semibold'>GAME PASS</h1>
        </div>
        <div className="img w-[120px]  hover:border-b-4 hover:border-green-700  flex flex-col items-center my-2 ">
        <img className='w-[50px] h-[50px] ' src={game2} alt="" />
        <h1 className='text-lg font-semibold'>GAMES</h1>
        </div>
        <div className="img w-[120px]  hover:border-b-4 hover:border-green-700  flex flex-col items-center my-2 ">
        <img className='w-[50px] h-[50px] ' src={game3} alt="" />
        <h1 className='text-lg font-semibold'>CONSOLES</h1>
        </div>
        <div className="img w-[120px]  hover:border-b-4 hover:border-green-700  flex flex-col items-center my-2 ">
        <img className='w-[50px] h-[50px] ' src={game4} alt="" />
        <h1 className='text-lg font-semibold'>ACCESSORIES</h1>
        </div>
        <div className="img w-[120px]  hover:border-b-4 hover:border-green-700  flex flex-col items-center my-2 ">
        <img className='w-[50px] h-[50px] ' src={game5} alt="" />
        <h1 className='text-lg font-semibold'>DEALS</h1>
        </div>
        <div className="img w-[120px]  hover:border-b-4 hover:border-green-700  flex flex-col items-center my-2 ">
        <img className='w-[50px] h-[50px] ' src={game6} alt="" />
        <h1 className='text-lg font-semibold'>SIGN IN</h1>
        </div>
    </div>
  )
}

export default GamePass