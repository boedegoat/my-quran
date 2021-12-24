import { resolver } from 'lib/utils'
import { ILastRead } from 'lib/typings/quran'

export async function updateLastRead(verseId) {
  const res = await fetch('/api/last-read/' + verseId, {
    method: 'PATCH',
  })
  return resolver(res)
}

export function setLastReadInLocal({ verseId, surahName, verseInSurah }) {
  localStorage.setItem(
    'lastRead',
    JSON.stringify({
      id: verseId,
      surahName,
      verseInSurah,
    } as ILastRead)
  )
}

export function getLastReadInLocal() {
  const lastRead = JSON.parse(localStorage.getItem('lastRead')) as ILastRead
  if (lastRead) updateLastRead(lastRead.id)
  return lastRead
}

export async function getLastRead() {
  const res = await fetch('/api/last-read')
  const { lastRead }: { lastRead: ILastRead } = await res.json()
  if (!lastRead) return null
  setLastReadInLocal({ verseId: lastRead.id, ...lastRead })
  return lastRead as ILastRead
}

export async function syncLastRead() {
  const lastReadInLocal = getLastReadInLocal()
  if (lastReadInLocal) {
    console.log('updating user last read (local storage -> cloud)...')
    await updateLastRead(lastReadInLocal.id)
  }
  if (!lastReadInLocal) {
    console.log('updating user last read (cloud -> local storage)...')
    const lastRead = await getLastRead()
    setLastReadInLocal({ verseId: lastRead.id, ...lastRead })
  }
  console.log('updated user last read')
}
