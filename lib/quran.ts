import { resolver } from 'lib/utils'
import { ILastRead } from 'lib/typings/quran'

export async function updateLastRead(verseId) {
  const res = await fetch('/api/last-read/' + verseId, {
    method: 'PATCH',
  })
  return resolver(res)
}

export function setLastReadInLocal({ verseId, surahId, surahName, verseInSurah }) {
  localStorage.setItem(
    'lastRead',
    JSON.stringify({
      verseId,
      surahId,
      surahName,
      verseInSurah,
    } as ILastRead)
  )
}

export function getLastReadInLocal() {
  const lastRead = JSON.parse(localStorage.getItem('lastRead')) as ILastRead
  if (lastRead) updateLastRead(lastRead.verseId)
  return lastRead
}

export async function getLastRead() {
  const res = await fetch('/api/last-read')
  const { lastRead }: { lastRead: ILastRead } = await res.json()
  if (!lastRead) return null
  setLastReadInLocal(lastRead)
  return lastRead as ILastRead
}

export async function syncLastRead() {
  const lastRead = await getLastRead()
  const lastReadInLocal = getLastReadInLocal()

  if (lastRead) {
    console.log('updating user last read (cloud -> local storage)...')
    setLastReadInLocal(lastRead)
    console.log('updated user last read')
    return lastRead
  } else {
    if (!lastReadInLocal) return null
    console.log('updating user last read (local storage -> cloud)...')
    await updateLastRead(lastReadInLocal.verseId)
    console.log('updated user last read')
    return lastReadInLocal
  }
}
