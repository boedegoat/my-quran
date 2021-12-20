import BigLink from 'components/BigLink'
import Layout from 'components/Layout'
import { fetchMyApi } from 'lib/utils'

export async function getStaticProps() {
  const allSurah = await fetchMyApi('/surah')
  const firstVerses = await fetchMyApi('/juz')

  return {
    props: { allSurah, firstVerses },
  }
}

export default function ReadQuran({ allSurah, firstVerses }) {
  console.log(firstVerses)
  return (
    <Layout title='Read Quran'>
      <h1>Read quran</h1>
      <div className='grid mt-5 sm:grid-cols-2 sm:grid-rows-2 gap-5'>
        {allSurah.map((surah) => (
          <BigLink
            key={surah.id}
            href={'/read-quran/' + surah.id}
            emoji={<SurahNumber number={surah.id} />}
            label={<SurahName name={surah.name} />}
            description={
              <SurahDescription
                name={surah.name}
                revelation={surah.revelation}
                numberOfVerses={surah.numberOfVerses}
              />
            }
          />
        ))}
      </div>
    </Layout>
  )
}

function SurahNumber({ number }) {
  return (
    <span className='text-sm bg-slate-800 text-slate-100 w-8 h-7 rounded-md inline-grid place-items-center'>
      {number}
    </span>
  )
}

function SurahName({ name }) {
  return (
    <span className='flex'>
      {name.transliteration.id} <span className='opacity-50 ml-auto'>{name.short}</span>
    </span>
  )
}

function SurahDescription({ name, revelation, numberOfVerses }) {
  const origin = revelation.arab === 'مكة' ? '🕋' : '🕌'
  // 🕋 => Makkiyah
  // 🕌 => Madaniyyah
  return (
    <>
      {origin} {name.translation.id} | {numberOfVerses} ayat
    </>
  )
}
