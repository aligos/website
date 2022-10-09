import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cursor from '../components/Cursor'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Cursor />
    </>
  )
}

export default MyApp
