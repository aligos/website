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
      <main>
        <section className="flex flex-col justify-center items-center overflow-hidden relative z-10 min-h-screen container-large mx-auto">
          <div className="text-5xl md:text-8xl font-cinetype font-bold text-center">
            <p>👋 I am a frontend programmer</p>
            <p>
              who loves{' '}
              <span
                className="italic hover:text-blue-700 cursor-pointer"
                onMouseEnter={() => setCursorType('focus')}
                onMouseLeave={() => setCursorType('default')}>
                functional programming
              </span>
            </p>
            <p>— based in Tasikmalaya.</p>
          </div>
        </section>
      </main>
      <div className="fixed left-0 top-0 h-full w-full flex justify-center items-center overflow-hidden bg-neutral-100">
        <span className="text-[60rem] font-timmons text-white">ALIGOS</span>
      </div>
    </div>
  )
}

export default Home
