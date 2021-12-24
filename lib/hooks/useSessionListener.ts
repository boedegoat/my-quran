import { useSkipEffect } from './useSkipEffect'

type StatusType = 'authenticated' | 'loading' | 'unauthenticated'

export function useSessionListener(
  sessionStatus: StatusType,
  on: StatusType,
  callback: () => void
) {
  useSkipEffect(() => {
    if (sessionStatus === on) callback()
  }, [sessionStatus])
}
