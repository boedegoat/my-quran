import BigLink from 'components/global/BigLink'
import Layout from 'components/global/layout'
import TabGroup from 'components/global/Tab'
import { useRevelation } from 'hooks'
import prisma from 'lib/prisma'

export default function ReadQuran({ allSurah, firstVerses }) {
  const categories = {
    Surah: allSurah,
    Juz: firstVerses,
  }
  return (
    <Layout title='Read Quran'>
      <TabGroup>
        <TabGroup.Head>
          {Object.keys(categories).map((category, idx) => (
            <TabGroup.Tab key={idx}>{category}</TabGroup.Tab>
          ))}
        </TabGroup.Head>
        <TabGroup.Contents>
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
  const revelationEmoji = useRevelation(revelation.arab)
  return (
    <>
      {revelationEmoji} {name.translation.id} | {numberOfVerses} ayat
    </>
  )
}

export async function getStaticProps() {
  const allSurah = await prisma.surah.findMany({
    select: {
      id: true,
      name: true,
      revelation: true,
      numberOfVerses: true,
    },
  })
  const firstVerses = await prisma.verse.findMany({
    where: { firstVerseInJuz: true },
    select: {
      inSurah: true,
      meta: true,
      surah: {
        select: { name: true },
      },
    },
    orderBy: {
      id: 'asc',
    },
  })
  return {
    props: { allSurah, firstVerses },
  }
}
