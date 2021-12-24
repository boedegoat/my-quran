import apiHandler from 'lib/api-handler'
import prisma from 'lib/prisma'

export default apiHandler.patch(async (req, res) => {
  const { user } = req

  // check if user not logged in
  if (!user) {
    res.status(401).json({ message: 'Unauthorize' })
    return
  }

  const lastVerseId = req.query.id

  const updatedUser = await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      lastVerseId: Number(lastVerseId),
    },
  })

  res.status(201).json({
    message: `Success updated verseId: ${lastVerseId} to ${updatedUser.email}`,
    updatedUser,
  })
})
