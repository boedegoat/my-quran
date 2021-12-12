import Head from 'next/head'
import Link from 'next/link'
import Navbar from './Navbar'

export default function Layout({ title, children }) {
  return (
    <div className=''>
      <Head>
        <title>My Quran - {title}</title>
      </Head>

      <header className='py-4 sticky top-0 bg-white border-b shadow-sm'>
        <div className='wrapper'>
          <Link href='/'>
            <a className='font-bold text-2xl'>My Quran</a>
          </Link>
        </div>
      </header>

      <main className='grid sm:grid-cols-3 max-w-5xl mx-auto mt-5 sm:mt-8'>
        <Navbar />
        <div className='px-5 sm:pl-0 sm:col-span-2'>{children}</div>
      </main>
    </div>
  )
}
