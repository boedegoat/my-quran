import apiHandler from 'lib/api-handler'
import prisma from 'lib/prisma'
import { ILastRead } from 'lib/typings/quran'

export default apiHandler.get(async (req, res) => {
  const { user } = req

  // check if user not logged in
  if (!user) {
    res.status(401).json({ message: 'Unauthorize' })
    return
  }

  const { lastVerse: lastRead } = await prisma.user.findUnique({
    where: {
      email: user.email,
    },
    select: {
      lastVerse: {
        select: { inSurah: true, id: true, surah: { select: { name: true } } },
      },
    },
  })

  res.status(200).json({
    message: `Success get last read of user with email ${user.email}`,
    lastRead: {
      id: lastRead.id,
      // @ts-ignore
      surahName: lastRead.surah.name.transliteration.id,
      verseInSurah: lastRead.inSurah,
    } as ILastRead,
  })
})
