import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'components/Link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Rahmat Aligos - Frontend Engineer</title>
      </Head>
      {/* Nav Header */}
      <div className="p-6 z-20 fixed left-0 top-0 w-full flex justify-between items-cente">
        <Link href="/projects">
          <span className="text-lg font-cinetype font-bold">work</span>
        </Link>
        <Link href="/info">
          <span className="text-lg font-cinetype font-bold">info</span>
        </Link>
      </div>
      {/* Hero / Main Content */}
      <main>
        <section className="flex flex-col justify-center items-center overflow-hidden relative z-10 min-h-screen container-large mx-auto">
          <div className="text-xl md:text-8xl font-cinetype font-bold text-center">
            <p>👋 I am a frontend programmer</p>
            <p>
              who loves{' '}
              <Link href="">
                <a className="italic hover:text-blue-700">functional programming</a>
              </Link>
            </p>
            <p>— based in Tasikmalaya.</p>
          </div>
        </section>
      </main>
      {/* Background Text */}
      <div className="fixed left-0 top-0 h-full w-full flex justify-center items-center overflow-hidden bg-neutral-100">
        <span className="text-[16rem] md:text-[60rem] font-timmons text-white">ALIGOS</span>
      </div>
      {/* Social Link */}
      <ul className="fixed left-6 bottom-8 flex flex-row gap-4 z-10">
        <li>
          <Link href="https://github.com/aligos">
            <Image src="/icons/github.svg" alt="github" height={32} width={32} />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/rahmat-aligos-10658888/">
            <Image src="/icons/linkedin.svg" alt="linkedin" height={32} width={32} />
          </Link>
        </li>
        <li>
          <Link href="https://dribbble.com/aligos">
            <Image src="/icons/dribbble.svg" alt="Dribbble" height={32} width={32} />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Home
