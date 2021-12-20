// /api/surah => GET all surah
// /api/surah/1 => GET surah by id

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function getAllSurah(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return
  const allSurah = await prisma.surah.findMany({
    select: {
      id: true,
      name: true,
      revelation: true,
      numberOfVerses: true,
    },
  })
  res.status(200).json(allSurah)
}
