import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function getSpecificSurah(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') return
  const surah = await prisma.surah.findUnique({
    where: {
      id: Number(req.query.id),
    },
    include: {
      verses: { orderBy: { inSurah: 'asc' } },
    },
  })
  res.status(200).json(surah)
}
