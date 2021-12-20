
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../styles/globals.css";
import "../styles/swiper.css"

import '../styles/globals.css'
import React, { useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { AppContext } from '../components/context'


function MyApp({ Component, pageProps }) {
  const contents = [
    {
      id: 1,
      bg: '1.gif'
    },
    {
      id: 2,
      bg: '2.gif'
    }
  ]
  const [content, setContent] = useState(contents[0])

  const changeContent = () => {
    let i = 0
    if (content) {
      if (content.id !== contents.length) {
        i = content.id
      }
    }
    setContent(contents.find((x) => x.id === i + 1))
  }

  return (
    <AppContext.Provider value={{ content, changeContent }}>
      <div className='bg-black text-white h-screen w-screen overflow-hidden relative '>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </AppContext.Provider>
  )
}

export default MyApp
