import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Cursor from 'components/Cursor'
import AppContext, { CursorType } from 'context/appContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [cursorType, setCursorType] = useState<CursorType>('default')
  return (
    <AppContext.Provider value={{ cursorType, setCursorType }}>
      <Component {...pageProps} />
      <Cursor />
    </AppContext.Provider>
  )
}

export default MyApp
