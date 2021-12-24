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
        select: {
          inSurah: true,
          id: true,
          surah: { select: { name: true, id: true } },
        },
      },
    },
  })

  // check if user doesn't have last read yet
  if (!lastRead) {
    res.status(404).json({ message: `User with email ${user.email} doesn't have any lastRead yet` })
    return
  }

  res.status(200).json({
    message: `Success get last read of user with email ${user.email}`,
    lastRead: {
      verseId: lastRead.id,
      surahId: lastRead.surah.id,
      // @ts-ignore
      surahName: lastRead.surah.name.transliteration.id,
      verseInSurah: lastRead.inSurah,
    } as ILastRead,
  })
})
