// /api/surah => GET all surah
// /api/surah/1 => GET surah by id

import { NextApiRequest, NextApiResponse } from 'next'
import prisma from 'lib/prisma'

export default async function getAllSurah(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return

  const select = req.query.select as string
  const customSelect = select?.split(',').reduce((prev, curr) => {
    return { ...prev, [curr]: true }
  }, {})

  const defaultSelect = {
    id: true,
    name: true,
    revelation: true,
    numberOfVerses: true,
  }

  const allSurah = await prisma.surah.findMany({
    select: select ? customSelect : defaultSelect,
  })

  res.status(200).json(allSurah)
}
