import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log("testing git account push again")
  return (<Layout>
  <Component {...pageProps} />
  </Layout>)
}

export default MyApp
