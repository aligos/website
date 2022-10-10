import type { NextPage } from 'next'
import Head from 'next/head'
import { useContextSelector } from 'use-context-selector'
import AppContext from 'context/appContext'

const Home: NextPage = () => {
  const setCursorType = useContextSelector(AppContext, (s) => s.setCursorType)

  return (
    <div>
      <Head>
        <title>Rahmat Aligos - Frontend Engineer</title>
      </Head>
      <h1
        className="text-5xl font-timmons cursor-pointer"
        onMouseEnter={() => setCursorType('focus')}
        onMouseLeave={() => setCursorType('default')}>
        RAHMAT ALIGOS
      </h1>
    </div>
  )
}

export default Home
