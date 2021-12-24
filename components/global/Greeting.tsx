import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { GreetingType } from 'lib/typings/hooks'

export default function Greeting() {
  const [greeting, setGreeting] = useState<GreetingType>('' as GreetingType)
  const { data: session, status } = useSession()
  const me = session?.user.name || 'Guest'

  const handleGreeting = () => {
    const today = new Date()
    const hour = today.getHours()
    if (hour >= 0 && hour < 6) setGreeting('Good Morning')
    else if (hour >= 6 && hour < 12) setGreeting('Good Morning')
    else if (hour >= 12 && hour < 17) setGreeting('Good Afternoon')
    else setGreeting('Good Evening')
  }

  useEffect(() => {
    handleGreeting()
  }, [])

  if (status === 'loading') return <Skeleton />
  return (
    <p className='font-medium text-slate-600 text-lg'>
      👋 {greeting} <span className='text-slate-900 font-bold'>{me}</span>
    </p>
  )
}

function Skeleton() {
  return <div className='h-8 w-3/5 bg-slate-100 animate-pulse rounded-md'></div>
}
