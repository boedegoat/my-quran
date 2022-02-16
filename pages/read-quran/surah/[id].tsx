import Layout from 'components/global/layout'
import prisma from 'lib/prisma'
import { useSessionListener } from 'lib/hooks'
import { useSession } from 'next-auth/react'
import { getVerseIdFromUrl, syncLastRead } from 'lib/quran'
import SurahVerses from 'components/read-quran/SurahVerses'
import SurahDetails from 'components/read-quran/SurahDetails'
import TopMenu from 'components/read-quran/TopMenu'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Surah({ surah, allSurah }) {
  const { status } = useSession()
  const router = useRouter()
  useSessionListener(status, 'authenticated', syncLastRead)

  // Fix Next.js Link Bug : cannot scroll directly into section id
  useEffect(() => {
    const scrollIntoVerse = () => {
      const verseId = getVerseIdFromUrl(router.asPath)
      if (verseId) document.getElementById(verseId).scrollIntoView()
    }
    scrollIntoVerse()
  }, [])

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
