import Link from 'next/link'

export default function Navbar({ title = 'My Quran' }) {
  return (
    <nav className="md:col-span-1 sticky top-0 self-start bg-white">
      <div className="wrapper py-6">
        <Link href="/">
          <a className="font-bold text-3xl">{title}</a>
        </Link>
      </div>

      <div className="wrapper fixed md:static bottom-0 left-0 right-0 h-24 py-4 bg-white">
        <div className="bg-green-300 h-full rounded-lg"></div>
      </div>
    </nav>
  )
}
