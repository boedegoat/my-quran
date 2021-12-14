import Head from 'next/head'
import Link from 'next/link'
import AuthButton from './AuthButton'
import Navbar from './Navbar'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>My Quran - {title}</title>
      </Head>

      <header className='py-4 sticky top-0 bg-white border-b shadow-sm'>
        <div className='wrapper flex justify-between items-center'>
          <Link href='/'>
            <a>
              <h1 className='text-slate-900 font-bold text-2xl'>My Quran</h1>
            </a>
          </Link>
          <AuthButton />
        </div>
      </header>

      <main className='wrapper flex my-5 pb-20 sm:mt-10 sm:pb-0 sm:space-x-5'>
        <Navbar />
        <div className='flex-grow'>{children}</div>
      </main>
    </>
  )
}
