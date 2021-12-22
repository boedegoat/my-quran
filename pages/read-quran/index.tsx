import Layout from 'components/global/layout'
import TabGroup from 'components/global/Tab'
import JuzBigLinks from 'components/read-quran/JuzBigLinks'
import SurahBigLinks from 'components/read-quran/SurahBigLinks'
import prisma from 'lib/prisma'

export default function ReadQuran({ allSurah, firstVerses }) {
  return (
    <Layout title='Read Quran'>
      <TabGroup>
        <TabGroup.Head>
          <TabGroup.Tab>Surah</TabGroup.Tab>
          <TabGroup.Tab>Juz</TabGroup.Tab>
        </TabGroup.Head>
        <TabGroup.Contents>
          <TabGroup.Content>
            <SurahBigLinks allSurah={allSurah} />
          </TabGroup.Content>
          <TabGroup.Content>
            <JuzBigLinks firstVerses={firstVerses} />
          </TabGroup.Content>
        </TabGroup.Contents>
      </TabGroup>
    </Layout>
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
