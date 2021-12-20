import { PrismaClient } from '@prisma/client'
import fetch from 'cross-fetch'
const prisma = new PrismaClient()

async function main() {
  const allSurah = await getAllSurah()
  let allVerses = []
  let currentJuz

  // seed all surah (114)
  await prisma.surah.createMany({
    data: allSurah.map((surah) => {
      const surahId = surah.number

      // get all surah verses, then append to allVerses
      const extendedVerses = surah.verses.map((verse) => {
        const id = verse.number.inQuran
        const inSurah = verse.number.inSurah
        const firstVerseInJuz = verse.meta.juz !== currentJuz
        currentJuz = verse.meta.juz
        delete verse.number
        return {
          id,
          inSurah,
          surahId,
          firstVerseInJuz,
          ...verse,
        }
      })
      allVerses = [...allVerses, ...extendedVerses]

      delete surah.verses
      delete surah.number

      return {
        id: surahId,
        ...surah,
      }
    }),
  })

  // seed all verses (6236)
  await prisma.verse.createMany({ data: allVerses })
}

async function getAllSurah() {
  const res = await fetch('https://api.quran.sutanlab.id/surah')
  const surahs = (await res.json()).data.map(async (surah) => {
    const { preBismillah, verses } = await getSpecificSurah(surah.number)
    return {
      ...surah,
      preBismillah: preBismillah ?? undefined,
      verses,
    }
  })
  return await Promise.all(surahs)
}

async function getSpecificSurah(surahId: number) {
  const res = await fetch('https://api.quran.sutanlab.id/surah/' + surahId)
  return (await res.json()).data
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
