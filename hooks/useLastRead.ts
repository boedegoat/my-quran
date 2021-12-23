import { getLastRead, getLastReadInLocal } from 'lib/quran'
import { useEffect, useState } from 'react'
import { ILastRead } from 'typings/quran'

export function useLastRead() {
  const [lastRead, setLastRead] = useState<ILastRead>(null)
  useEffect(() => {
    async function run() {
      setLastRead(getLastReadInLocal() || (await getLastRead()))
    }
    run()
  }, [])
  return lastRead
}
