import { useEffect } from 'react'

type StatusType = 'authenticated' | 'loading' | 'unauthenticated'

export function useSessionListener(
  sessionStatus: StatusType,
  on: StatusType,
  callback: () => void
) {
  useEffect(() => {
    if (sessionStatus === on) callback()
  }, [sessionStatus])
}
