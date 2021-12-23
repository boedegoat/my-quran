import { resolver } from 'lib/utils'

export async function updateLastRead(verseId) {
  const res = await fetch('/api/mark-last-read/' + verseId)
  return resolver(res)
}

export async function syncLastRead() {
  console.log('updating user last read from local storage to cloud...')
  const lastReadId = localStorage.getItem('lastReadId')
  if (lastReadId) {
    await updateLastRead(lastReadId)
    console.log('updated user last read')
  }
}
