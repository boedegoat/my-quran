import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'

export default function AuthButton() {
  const { data: session, status } = useSession()
  if (status === 'loading') {
    return <Skeleton />
  }
  if (session) {
    return (
      <div className='cursor-pointer'>
        <Image src={session.user.image} width={30} height={30} className='rounded-full' />
      </div>
    )
  }
  return (
    <button
      className='px-5 py-1 bg-slate-800 text-white rounded-md'
      onClick={() => signIn()}
    >
      Sign In
    </button>
  )
}

function Skeleton() {
  return <div className='w-20 h-6 bg-slate-100 rounded-md animate-pulse'></div>
}
