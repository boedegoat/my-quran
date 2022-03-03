import { getLastReadInLocal, syncLastRead } from 'lib/quran'
import { useEffect, useRef, useState } from 'react'
import { ILastRead } from 'lib/typings/quran'
import { useSession } from 'next-auth/react'
import { useSessionListener } from './useSessionListener'

export function useLastRead() {
  const [lastRead, setLastRead] = useState<ILastRead>(null)
  const lastReadInLocalRef = useRef<ILastRead>()
  const [showPrompt, setShowPrompt] = useState(false)
  const { status } = useSession()

  useEffect(() => {
    const lastReadInLocal = getLastReadInLocal()
    if (lastReadInLocal) {
      setLastRead(lastReadInLocal)
      lastReadInLocalRef.current = lastReadInLocal
    }
  }, [])

  useSessionListener(status, 'authenticated', async () => {
    const syncedLastRead = await syncLastRead()
    const lastReadInLocal = lastReadInLocalRef.current || getLastReadInLocal()

    // if synced and local last read are different, ask the user
    if (lastReadInLocal && syncLastRead) {
      if (syncedLastRead.verseId !== lastReadInLocal.verseId) {
        console.log('synced and local last read are different')
        setShowPrompt(true)
      } else {
        console.log('synced and local last read are not different')
        if (showPrompt) setShowPrompt(false)
      }
    }

    if (lastRead?.verseId !== syncedLastRead?.verseId) {
      setLastRead(syncedLastRead)
    }
  })

  return {
    lastRead,
    showPrompt,
    lastReadInLocal: lastReadInLocalRef.current,
    setShowPrompt,
    setLastRead,
  }
}
