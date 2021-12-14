import { useTimeGreeting } from 'hooks'
import { useSession } from 'next-auth/react'

export default function Greeting() {
  const greeting = useTimeGreeting()
  const { data: session, status } = useSession()
  const me = session?.user.name || 'Guest'
  return (
    <>
      {status === 'loading' ? (
        <Skeleton />
      ) : (
        <p className='font-medium text-slate-600 text-lg'>
          👋 {greeting} <span className='text-slate-900 font-bold'>{me}</span>
        </p>
      )}
    </>
  )
}

function Skeleton() {
  return <div className='h-10 w-3/5 bg-slate-100 animate-pulse rounded-md'></div>
}
