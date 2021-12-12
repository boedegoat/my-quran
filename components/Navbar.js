import Link from 'next/link'
import { HomeIcon, BookOpenIcon, BookmarkIcon, CogIcon } from '@heroicons/react/outline'
import {
  HomeIcon as HomeIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  CogIcon as CogIconSolid,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'

export default function Navbar({ title = 'My Quran' }) {
  return (
    <nav className='md:col-span-1 sticky top-0 self-start bg-white'>
      <div className='wrapper py-6'>
        <Link href='/'>
          <a className='font-bold text-3xl'>{title}</a>
        </Link>
      </div>

      <div className='wrapper fixed md:static bottom-0 left-0 right-0 h-24 py-4 bg-white'>
        <div className='bg-slate-900 h-full rounded-lg p-4 flex items-center'>
          <NavbarLink href='/' Logo={HomeIcon} Active={HomeIconSolid} />
          <NavbarLink href='/read-quran' Logo={BookOpenIcon} Active={BookOpenIconSolid} />
          <NavbarLink href='/bookmark' Logo={BookmarkIcon} Active={BookmarkIconSolid} />
          <NavbarLink href='/settings' Logo={CogIcon} Active={CogIconSolid} />
        </div>
      </div>
    </nav>
  )
}

function NavbarLink({ Logo, href, Active }) {
  const router = useRouter()
  const isActive = router.pathname === href
  const logoClassName = 'w-8 h-8'

  return (
    <Link href={href}>
      <a className='text-white flex-grow flex justify-center'>
        {isActive ? (
          <Active className={logoClassName} />
        ) : (
          <Logo className={logoClassName} />
        )}
      </a>
    </Link>
  )
}
