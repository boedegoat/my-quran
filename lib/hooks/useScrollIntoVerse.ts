import { getVerseIdFromUrl } from 'lib/quran'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function useScrollIntoVerse() {
  const router = useRouter()

  // Fix Next.js Link Bug : cannot scroll directly into section id
  useEffect(() => {
    const scrollIntoVerse = () => {
      const verseId = getVerseIdFromUrl(router.asPath)
      if (verseId) document.getElementById(verseId).scrollIntoView()
    }
    scrollIntoVerse()
  }, [])
}
