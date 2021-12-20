import BigLink from 'components/BigLink'
import Layout from 'components/Layout'
import TabGroup from 'components/Tab'
import { classNames, fetchMyApi } from 'lib/utils'

export async function getStaticProps() {
  const allSurah = await fetchMyApi('/surah')
  const firstVerses = await fetchMyApi('/juz')
  return {
    props: { allSurah, firstVerses },
  }
}

export default function ReadQuran({ allSurah, firstVerses }) {
  console.log(firstVerses)
  const categories = {
    Surah: allSurah,
    Juz: firstVerses,
  }
  return (
    <Layout title='Read Quran'>
      <TabGroup>
        <TabGroup.Head className='flex p-1 space-x-1 bg-slate-300/50 rounded-xl'>
          {Object.keys(categories).map((category) => (
            <TabGroup.Tab
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium rounded-lg',
                  'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-200 focus:ring-slate-400',
                  selected
                    ? 'bg-slate-900 text-slate-100 shadow'
                    : 'text-slate-900 hover:bg-slate-300/70'
                )
              }
            >
              {category}
            </TabGroup.Tab>
          ))}
        </TabGroup.Head>
        <TabGroup.Contents className='mt-5'>
          {Object.entries(categories).map(([category, contents], idx) => {
            return (
              <TabGroup.Content
                key={idx}
                className='grid sm:grid-cols-2 sm:grid-rows-2 gap-5'
              >
                {category === 'Surah' ? (
                  <SurahContents contents={contents} />
                ) : (
                  <JuzContents contents={contents} />
                )}
              </TabGroup.Content>
            )
          })}
        </TabGroup.Contents>
      </TabGroup>
    </Layout>
  )
}

function SurahContents({ contents }) {
  return contents.map((surah) => (
    <BigLink
      key={surah.id}
      href={'/read-quran/surah/' + surah.id}
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
  ))
}

function JuzContents({ contents }) {
  return contents.map((verse) => (
    <BigLink
      key={verse.meta.juz}
      href={'/read-quran/juz/' + verse.meta.juz}
      label={`Juz ${verse.meta.juz}`}
      description={`▶ Mulai dari ${verse.surah.name.transliteration.id} ayat ${verse.inSurah}`}
    />
  ))
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
