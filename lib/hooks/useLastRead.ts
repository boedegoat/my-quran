import { getLastReadInLocal, syncLastRead } from 'lib/quran'
import { useEffect, useState } from 'react'
import { ILastRead } from 'lib/typings/quran'
import { useSession } from 'next-auth/react'
import { useSessionListener } from './useSessionListener'

export function useLastRead() {
  const [lastRead, setLastRead] = useState<ILastRead>(null)
  const { status } = useSession()

  useEffect(() => {
    const lastReadInLocal = getLastReadInLocal()
    if (lastReadInLocal) {
      setLastRead(lastReadInLocal)
    }
  }, [])

  useSessionListener(status, 'authenticated', async () => {
    const syncedLastRead = await syncLastRead()
    if (lastRead?.verseId !== syncedLastRead.verseId) {
      setLastRead(syncedLastRead)
    }
  })

  return lastRead
}
