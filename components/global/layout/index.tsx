import Head from 'next/head'
import AuthButton from './AuthButton'
import MotionContainer from './MotionContainer'
import Navbar from './Navbar'
import NextLink from 'components/global/NextLink'

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>My Quran - {title}</title>
      </Head>

      <header className='py-4 sticky top-0 bg-white border-b shadow-sm z-40'>
        <div className='wrapper flex justify-between items-center'>
          <NextLink href='/'>
            <h1 className='text-slate-900 font-bold text-2xl'>My Quran</h1>
          </NextLink>
          <AuthButton />
        </div>
      </header>

      <main className='wrapper flex my-5 pb-20 sm:mt-10 sm:pb-0 sm:space-x-5'>
        <Navbar />
        <MotionContainer className='flex-grow'>{children}</MotionContainer>
      </main>
    </>
  )
}
