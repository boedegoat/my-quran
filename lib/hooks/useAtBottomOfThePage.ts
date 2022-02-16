import { useEffect } from 'react'

export default function useAtBottomOfThePage(callback: () => void, deps?: any[]) {
  const handleScroll = (e) => {
    // scrollTop : the amount we scroll
    // window.innerHeight : height of the visible screen
    // scrollHeight : total scroll height
    const scrollAmount = e.target.documentElement.scrollTop
    const visibleScreenHeight = window.innerHeight
    const totalHeight = e.target.documentElement.scrollHeight

    const atTheBottomOfThePage = scrollAmount + visibleScreenHeight === totalHeight
    if (atTheBottomOfThePage) callback()
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, deps || [])
}
