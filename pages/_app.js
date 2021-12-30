
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../styles/globals.css";
import "../styles/swiper.scss"
import "../styles/hover.scss"


import '../styles/globals.css'
import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'
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
  const [menu, setMenu] = useState(false)

  const changeContent = () => {
    let i = 0
    if (content) {
      if (content.id !== contents.length) {
        i = content.id
      }
    }
    setContent(contents.find((x) => x.id === i + 1))
  }
  
  if (typeof global.navigator === 'undefined') global.navigator = {};
  
  return (
    <AppContext.Provider value={{ content, changeContent, menu, setMenu }}>
      <div className='bg-black text-white  overflow-hidden relative '>
        <Header />
        {
          menu ? <Menu /> :  <Component {...pageProps} />
        }
        {/* <Footer /> */}
      </div>
    </AppContext.Provider>
  )
}

export default MyApp
