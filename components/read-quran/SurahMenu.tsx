import Modal from 'components/global/Modal'
import NextLink from 'components/global/NextLink'
import SearchBar from 'components/global/SearchBar'
import TabGroup from 'components/global/Tab'
import { useSearchSurah } from 'lib/hooks'
import { classNames } from 'lib/utils'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function SurahMenu({ menuOpen, toggleMenuOpen, allSurah }) {
  const router = useRouter()
  const thisSurahId = router.query.id as string
  const { searchSurah, setSearchSurah, searchSurahResults } = useSearchSurah(allSurah)

  useEffect(() => {
    if (!menuOpen) return
    setTimeout(() => {
      document.getElementById(thisSurahId).scrollIntoView()
    }, 0)
  }, [menuOpen])

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
            {/* loop semua ayat di surat ini */}
            loncat ayat
          </TabGroup.Content>
        </TabGroup.Contents>
      </TabGroup>
    </Modal>
  )
}
