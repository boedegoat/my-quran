import { getSession } from 'next-auth/react'
import prisma from 'lib/prisma'

export default async function updateLastReadById(req, res) {
  const session = await getSession({ req })
  if (!session) {
    res.status(401).json({ message: 'Unauthorize' })
  }

  const lastVerseId = req.query.id

  const updatedUser = await prisma.user.update({
    where: {
      email: session.user.email,
    },
    data: {
      lastVerseId: Number(lastVerseId),
    },
  })

  res.status(201).json({
    message: `Success updated verseId: ${lastVerseId} to ${updatedUser.email}`,
    updatedUser,
  })
}
