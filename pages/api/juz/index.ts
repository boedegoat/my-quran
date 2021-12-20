// /api/juz => GET all first verses in juz
// /api/juz/1 => GET all verses in juz number

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function getAllFirstVerses(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return
  const firstVerses = await prisma.verse.findMany({
    where: {
      firstVerseInJuz: true,
    },
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
  res.status(200).json(firstVerses)
}
