import Layout from 'components/global/layout'
import prisma from 'lib/prisma'
import { useScrollIntoVerse, useSessionListener } from 'lib/hooks'
import { useSession } from 'next-auth/react'
import { syncLastRead } from 'lib/quran'
import SurahVerses from 'components/read-quran/SurahVerses'
import SurahDetails from 'components/read-quran/SurahDetails'
import TopMenu from 'components/read-quran/TopMenu'

export default function Surah({ surah, allSurah }) {
  const { status } = useSession()

  useSessionListener(status, 'authenticated', syncLastRead)
  useScrollIntoVerse()

  return (
    <Layout title={surah.name.transliteration.id}>
      <TopMenu allSurah={allSurah} />
      <SurahDetails surah={surah} />
      <SurahVerses surah={surah} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const surahIds = await prisma.surah.findMany({
    select: { id: true },
  })
  const paths = surahIds.map(({ id }) => ({
    params: { id: id.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { id: surahId } = params

  const surah = await prisma.surah.findUnique({
    where: { id: Number(surahId) },
    include: {
      verses: { orderBy: { inSurah: 'asc' } },
    },
  })

  const allSurah = await prisma.surah.findMany({
    select: { id: true, name: true },
  })

  return {
    props: { surah, allSurah },
  }
}
