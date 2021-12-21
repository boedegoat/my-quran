import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function getSpecificJuz(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return
  const juz = await prisma.verse.findMany({
    where: {
      meta: {
        path: ['juz'],
        equals: Number(req.query.id),
      },
    },
    orderBy: {
      id: 'asc',
    },
    include: {
      surah: { select: { name: true } },
    },
  })
  res.status(200).json(juz)
}
