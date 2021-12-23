import { useEffect, useRef } from 'react'

export function useSkipEffect(callback, deps) {
  const firstRender = useRef(true)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    callback()
  }, deps)
}
