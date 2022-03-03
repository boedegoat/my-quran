import { resolver } from 'lib/utils'
import { ILastRead } from 'lib/typings/quran'

const lastReadKey = 'lastRead'

export async function updateLastRead(verseId) {
  const res = await fetch('/api/last-read/' + verseId, {
    method: 'PATCH',
  })
  return resolver(res)
}

export function setLastReadInLocal(options: ILastRead) {
  localStorage.setItem(lastReadKey, JSON.stringify(options))
}

export function getLastReadInLocal() {
  const lastRead = JSON.parse(localStorage.getItem(lastReadKey)) as ILastRead
  return lastRead
}

export async function getLastRead() {
  const res = await fetch('/api/last-read')
  const { lastRead }: { lastRead: ILastRead } = await res.json()
  if (!lastRead) return null
  return lastRead as ILastRead
}

export async function syncLastRead() {
  const lastRead = await getLastRead()
  const lastReadInLocal = getLastReadInLocal()

  if (lastRead?.verseId === lastReadInLocal?.verseId) {
    return lastRead
  }

  // if cloud last read exist, use it
  if (lastRead) {
    console.log('updating user last read (cloud -> local storage)...')
    if (!lastReadInLocal) {
      setLastReadInLocal(lastRead)
    }
    return lastRead
  }
  // otherwise, use local last read then use it to update the cloud last read
  else {
    if (!lastReadInLocal) return null
    console.log('updating user last read (local storage -> cloud)...')
    await updateLastRead(lastReadInLocal.verseId)
    return lastReadInLocal
  }
}

export function getVerseIdFromUrl(url) {
  var match = url.match(/#.+/)
  return match ? match[0].replace('#', '') : null
}
