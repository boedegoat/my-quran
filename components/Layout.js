import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ title, navbarTitle, children }) {
  return (
    <>
      <Head>
        <title>My Quran - {title}</title>
      </Head>
      <div className="grid md:grid-cols-3">
        <Navbar title={navbarTitle} />
        <main className="wrapper md:col-span-2 md:py-6">{children}</main>
      </div>
    </>
  )
}
