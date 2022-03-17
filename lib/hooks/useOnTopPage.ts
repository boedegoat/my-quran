import { useEffect, useState } from 'react'

export const useOnTopPage = () => {
  const [onTop, setOnTop] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const { scrollY } = window
      if (scrollY === 0) {
        setOnTop(true)
      } else {
        setOnTop(false)
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return onTop
}
