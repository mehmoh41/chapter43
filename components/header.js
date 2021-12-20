import React, { useContext } from 'react'
import { AppContext } from './context'

export default function Header() {
  const { menu, setMenu } = useContext(AppContext)

  return (
    <div id='header' className='absolute top-12 left-12 right-12 flex items-center justify-between'>
      <svg
        id='Logo-main'
        role='img'
        aria-label='HKI.PARIS Logo'
        width='60'
        height='33'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 60 33'
      >
        <path
          className='Logo-color1 text-white'
          fill='currentColor'
          d='M44.2 32.2L30.7 15.5 25 21.6l8.2 10.6h11zm.9-31.1v16l9.7-16h-9.7z'
          style={{ opacity: 0.7 }}
        ></path>
        <path
          className='Logo-color2 text-white'
          fill='currentColor'
          d='M44.1 1.1H32.4L15.1 19.7v12.5l29-31.1zm1 10.4v20.7h9.7V1.1l-9.7 10.4zM31 1.1H19.3L2 19.7v12.5z'
        ></path>
      </svg>
      <span className='cursor-pointer text-xs font-bold group' onClick={() => setMenu(!menu)}>
        {menu ? 'X' : 'MENU'}
      </span>
    </div>
  )
}
