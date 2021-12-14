import { useEffect, useState } from 'react'

export function useTimeGreeting() {
  const [greeting, setGreeting] = useState('')

  useEffect(() => {
    const today = new Date()
    const hour = today.getHours()
    if (hour >= 0 && hour <= 6) setGreeting('Good Midnight')
    else if (hour >= 6 && hour <= 12) setGreeting('Good Morning')
    else if (hour >= 12 && hour <= 17) setGreeting('Good Afternoon')
    else setGreeting('Good Evening')
  }, [])

  return greeting
}
