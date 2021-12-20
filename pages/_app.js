import Layout from '../components/Layout'
import '../styles/globals.css'
// import '../styles/slider.css'
import '../styles/app.scss'
import '../styles/music-wave.scss'
// import '../components/slider'
// At the top of _app.tsx or your individual page:


function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
