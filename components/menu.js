import Link from 'next/link'
import { useEffect } from 'react'



export default function Menu() {
  
  return (
    <div
      id='menu'
      className='flex flex-col gap-8 items-center text-center h-screen w-screen justify-center bg-cover bg-opacity-25 bg-no-repeat bg-center'
      style={{ backgroundImage: `url(./assets/5.gif` }}
    >
      <canvas class="fireworks"></canvas>
      <Link href='/home'>
        <a className='opacity-80 hover:opacity-100'>
          <h3 className='text-8xl font-bold bg__img'>WORK</h3>
          <p className='italic font-secondary opacity-80 text-xl'>
            Crafted with care, fashioned with elegance
          </p>
        </a>
      </Link>
      <Link href='/about'>
        <a className='opacity-80 hover:opacity-100'>
          <h3 className='text-8xl font-bold bg__img'>ABOUT</h3>
          <p className='italic font-secondary opacity-80 text-xl'>Get to know our culture</p>
        </a>
      </Link>
      <Link href='/contact'>
        <a className='opacity-80 hover:opacity-100'>
          <h3 className='text-8xl font-bold bg__img'>CONTACT</h3>
          <p className='italic font-secondary opacity-80 text-xl'>Feel free to reach out</p>
        </a>
      </Link>
    </div>
  )
}
