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
            <a>
              <h1 className='text-slate-900 font-bold text-2xl'>My Quran</h1>
            </a>
          </Link>
        </div>
      </header>

      <main className='grid mx-auto my-5 pb-20 max-w-5xl sm:grid-cols-3 sm:mt-10 sm:pb-0'>
        <Navbar />
        <div className='px-5 sm:pl-0 sm:col-span-2'>{children}</div>
      </main>
    </div>
  )
}
