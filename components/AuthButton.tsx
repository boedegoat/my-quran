import { signIn, signOut, useSession } from 'next-auth/react'
import {
  UserIcon,
  InformationCircleIcon,
  ExternalLinkIcon,
  CurrencyDollarIcon,
  MoonIcon,
} from '@heroicons/react/solid'
import Image from 'next/image'
import Dropdown from './Dropdown'

export default function AuthButton() {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <Skeleton />
  }
  if (session) {
    return (
      <Dropdown
        toggler={
          <Image
            src={session.user.image}
            width={30}
            height={30}
            className='rounded-full'
          />
        }
      >
        <Dropdown.Group>
          <Dropdown.Item type='button' Icon={MoonIcon}>
            Dark Theme
          </Dropdown.Item>
          <Dropdown.Item type='link' href='/profile' Icon={UserIcon}>
            Profile
          </Dropdown.Item>
          <Dropdown.Item type='link' href='/about' Icon={InformationCircleIcon}>
            About
          </Dropdown.Item>
          <Dropdown.Item type='button' Icon={CurrencyDollarIcon}>
            Donate
          </Dropdown.Item>
        </Dropdown.Group>
        <Dropdown.Group>
          <Dropdown.Item
            type='button'
            onClick={() => signOut()}
            danger
            Icon={ExternalLinkIcon}
          >
            Sign Out
          </Dropdown.Item>
        </Dropdown.Group>
      </Dropdown>
    )
  }
  return (
    <button
      className='px-5 py-1 bg-slate-800 text-white rounded-md transition-all hover:scale-105 active:scale-95'
      onClick={() => signIn()}
    >
      Sign In
    </button>
  )
}

function Skeleton() {
  return <div className='w-20 h-6 bg-slate-100 rounded-md animate-pulse'></div>
}
