import React, { useContext } from 'react'
import { AppContext } from '../components/context'

export default function Xp() {
  const { content, changeContent } = useContext(AppContext)

  return (
    <>
      <div
        onClick={changeContent}
        className='flex items-center h-screen w-screen justify-center bg-cover bg-opacity-25 bg-no-repeat bg-center'
        style={{ backgroundImage: `url(./assets/${content && content.bg})` }}
      >
        <h2 className='text-6xl text-center font-bold animate-type animate-fadeIn overflow-hidden'>
          W<span className='opacity-90 font-semibold font-secondary text-7xl italic'>e</span>
          <br /> TRANS
          <span className='opacity-90 font-medium font-secondary text-7xl italic'>form</span>
        </h2>
      </div>
      <div className='absolute bottom-12 left-12 right-12 text-center'>
        <span className='italic text-lg font-secondary'>Click to transform</span>
      </div>
    </>
  )
}
