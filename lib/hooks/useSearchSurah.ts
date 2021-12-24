import { useEffect, useState } from 'react'

export function useSearchSurah(allSurah) {
  const [searchSurah, setSearchSurah] = useState('')
  const [searchSurahResults, setSearchSurahResults] = useState(null)

  useEffect(() => {
    if (!searchSurah) return setSearchSurahResults(null)
    const results = allSurah.filter((surah) => {
      const surahNameLower = surah.name.transliteration.id.toLowerCase()
      const searchSurahLower = searchSurah.toLowerCase()
      return (
        surahNameLower.includes(searchSurahLower) ||
        surahNameLower.replace('-', ' ').includes(searchSurahLower) ||
        surahNameLower.replace('-', ' ').replace(/'/g, '').includes(searchSurahLower) ||
        surah.id.toString().includes(searchSurah)
      )
    })
    setSearchSurahResults(results)
  }, [searchSurah])

  return { searchSurahResults, setSearchSurah, searchSurah }
}
