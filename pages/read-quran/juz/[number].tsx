import Layout from 'components/global/layout'
import prisma from 'lib/prisma'
import JuzVerses from 'components/read-quran/JuzVerses'
import { useScrollIntoVerse } from 'lib/hooks'

export default function Juz({ juz, juzNumber }) {
  useScrollIntoVerse()

  return (
    <Layout title={`Juz ${juzNumber} (${juz.length} ayat)`}>
      <JuzVerses juz={juz} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const allJuz = await prisma.verse.findMany({
    where: {
      firstVerseInJuz: true,
    },
    select: {
      meta: true,
    },
  })
  const paths = allJuz.map((juz) => ({
    // @ts-ignore
    params: { number: juz.meta.juz.toString() },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const juzNumber = params.number
  const juz = await prisma.verse.findMany({
    where: {
      meta: {
        path: ['juz'],
        equals: Number(juzNumber),
      },
    },
    include: {
      surah: {
        select: {
          id: true,
          name: true,
          preBismillah: true,
          revelation: true,
          numberOfVerses: true,
        },
      },
    },
    orderBy: {
      id: 'asc',
    },
  })

  return {
    props: { juz, juzNumber },
  }
}
