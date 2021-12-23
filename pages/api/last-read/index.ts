import prisma from 'lib/prisma'
import { getSession } from 'next-auth/react'
import { ILastRead } from 'typings/quran'

export default async function getLastRead(req, res) {
  const session = await getSession({ req })
  if (!session) {
    res.status(401).json({ message: 'Unauthorize' })
  }

  const { lastVerse: lastRead } = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      lastVerse: {
        select: { inSurah: true, id: true, surah: { select: { name: true } } },
      },
    },
  })

  res.status(200).json({
    message: `Success get last read of user with email ${session.user.email}`,
    lastRead: {
      id: lastRead.id,
      // @ts-ignore
      surahName: lastRead.surah.name.transliteration.id,
      verseInSurah: lastRead.inSurah,
    } as ILastRead,
  })
}
