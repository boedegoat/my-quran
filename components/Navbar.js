import Link from 'next/link'
import { HomeIcon, BookOpenIcon, BookmarkIcon, CogIcon } from '@heroicons/react/outline'
import {
  HomeIcon as HomeIconSolid,
  BookOpenIcon as BookOpenIconSolid,
  BookmarkIcon as BookmarkIconSolid,
  CogIcon as CogIconSolid,
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'

export default function Navbar() {
  return (
    <nav className='pl-5 fixed bottom-0 left-0 right-0 h-24 py-4 sm:py-0 sm:col-span-1 sm:max-w-max sm:sticky sm:top-[105px] lg:min-w-[18rem]'>
      <div className='bg-slate-900 h-full rounded-lg p-4 flex items-center sm:flex-col sm:h-auto sm:items-stretch sm:space-y-2 sm:p-3'>
        <NavbarLink href='/' label='Home' Logo={HomeIcon} Active={HomeIconSolid} />
        <NavbarLink
          href='/read-quran'
          label='Read Quran'
          Logo={BookOpenIcon}
          Active={BookOpenIconSolid}
        />
        <NavbarLink
          href='/bookmark'
          label='Bookmark'
          Logo={BookmarkIcon}
          Active={BookmarkIconSolid}
        />
        <NavbarLink
          href='/settings'
          label='Settings'
          Logo={CogIcon}
          Active={CogIconSolid}
        />
      </div>
    </nav>
  )
}

function NavbarLink({ Logo, href, Active, label }) {
  const router = useRouter()
  const isActive = router.pathname === href
  const logoClassName = 'w-8 h-8'

  return (
    <Link href={href}>
      <a className='text-white rounded-md flex-grow flex items-center justify-center sm:justify-start sm:p-2 sm:hover:bg-slate-800'>
        {isActive ? (
          <Active className={logoClassName} />
        ) : (
          <Logo className={logoClassName} />
        )}
        <p className='hidden lg:block lg:ml-4'>{label}</p>
      </a>
    </Link>
  )
}
