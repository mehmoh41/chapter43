import Link from 'next/link'

export default function Footer() {
  return (
    <div
      id='footer'
      className='absolute bottom-12 left-12 right-12 flex items-center justify-between'
    >
      <Link href='/xp'>
        <a>
          <svg className='w-5 h-5 text-white' fill='currentColor' viewBox='0 0 20 20'>
            <path d='M6.803 18.998c-.194-.127 3.153-7.16 3.038-7.469-.116-.309-3.665-1.436-3.838-1.979-.174-.543 7.007-8.707 7.196-8.549.188.158-3.129 7.238-3.039 7.469.091.23 3.728 1.404 3.838 1.979.111.575-7.002 8.676-7.195 8.549z' />
          </svg>
        </a>
      </Link>

      <svg viewBox='0 0 24 24' className='text-white h-5 w-5' fill='currentColor'>
        <path d='M11 6H13V18H11V6Z' fill='currentColor' />
        <path d='M7 13H9V18H7V13Z' fill='currentColor' />
        <path d='M15 9H17V18H15V9Z' fill='currentColor' />
      </svg>
    </div>
  )
}
