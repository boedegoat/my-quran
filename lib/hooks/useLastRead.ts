import { getLastRead, getLastReadInLocal, syncLastRead } from 'lib/quran'
import { useEffect, useState } from 'react'
import { ILastRead } from 'lib/typings/quran'
import { useSession } from 'next-auth/react'
import { useSessionListener } from '.'

export function useLastRead() {
  const [lastRead, setLastRead] = useState<ILastRead>(null)
  const { status } = useSession()
  useSessionListener(status, 'authenticated', async () => {
    const syncedLastRead = await syncLastRead()
    setLastRead(syncedLastRead)
  })

  useEffect(() => {
    async function run() {
      setLastRead(lastRead || getLastReadInLocal() || (await getLastRead()))
    }
    run()
  }, [lastRead])
  return lastRead
}
