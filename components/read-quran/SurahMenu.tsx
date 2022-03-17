import Modal from 'components/global/Modal'
import NextLink from 'components/global/NextLink'
import SearchBar from 'components/global/SearchBar'
import TabGroup from 'components/global/Tab'
import { useSearchSurah } from 'lib/hooks'
import { classNames } from 'lib/utils'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function SurahMenu({ menuOpen, toggleMenuOpen, allSurah }) {
  const router = useRouter()
  const thisSurahId = router.query.id as string
  const { searchSurah, setSearchSurah, searchSurahResults } = useSearchSurah(allSurah)
  const thisSurahName = (searchSurahResults || allSurah).find((surah) => surah.id == thisSurahId)
    ?.name.transliteration.id
  const [verse, setVerse] = useState('')

  useEffect(() => {
    if (!menuOpen) {
      setVerse('')
      return
    }
    setTimeout(() => {
      document.getElementById(thisSurahId)?.scrollIntoView()
    }, 0)
  }, [menuOpen])

  const goToVerse = (choosenVerse: string) => {
    toggleMenuOpen(false)
    router.replace({ hash: `${thisSurahName}-${choosenVerse}` })
  }

  return (
    <Modal title='Menu' isOpen={menuOpen} closeModal={() => toggleMenuOpen(false)}>
      <TabGroup className='mt-5'>
        <TabGroup.Head>
          <TabGroup.Tab>Ganti Surat</TabGroup.Tab>
          <TabGroup.Tab>Loncat Ayat</TabGroup.Tab>
        </TabGroup.Head>
        <TabGroup.Contents>
          <TabGroup.Content>
            <SearchBar
              placeholder='Cari Nama atau No. Surat'
              value={searchSurah}
              onChange={(e) => setSearchSurah(e.target.value)}
            />
            {/* surah list */}
            <div className='mt-5 p-2 border space-y-3 rounded-lg max-h-80 overflow-y-auto'>
              {(searchSurahResults || allSurah).map((surah) => (
                <div key={surah.id} id={surah.id}>
                  <NextLink
                    href={'/read-quran/surah/' + surah.id}
                    onClick={() => {
                      toggleMenuOpen(false)
                      setSearchSurah('')
                    }}
                    className={classNames(
                      'block p-4 rounded-md font-medium',
                      surah.id == thisSurahId
                        ? 'bg-slate-700 text-slate-200'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-700/80 hover:text-slate-200'
                    )}
                  >
                    {surah.id}. {surah.name.transliteration.id}
                  </NextLink>
                </div>
              ))}
            </div>
          </TabGroup.Content>
          <TabGroup.Content>
            <div className='flex flex-col items-center mt-20'>
              <h3 className='font-bold'>Masukkan ayat</h3>
              <input
                type='number'
                maxLength={3}
                className='w-44 text-center text-5xl mt-4 border border-gray-300 focus:outline-none rounded-md'
                value={verse}
                onChange={(e) => setVerse(e.target.value)}
              />
              {verse && (
                <button
                  onClick={() => goToVerse(verse)}
                  className='mt-8 bg-slate-300 text-slate-800 font-medium px-5 py-2 rounded-md'
                >
                  Loncat ke ayat {verse}
                </button>
              )}
            </div>
          </TabGroup.Content>
        </TabGroup.Contents>
      </TabGroup>
    </Modal>
  )
}
