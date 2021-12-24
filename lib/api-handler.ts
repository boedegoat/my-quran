import { NextApiResponse } from 'next'
import nextConnect, { Options } from 'next-connect'
import { NextApiRequestExtended } from 'typings/api'
import authMiddleware from 'middlewares/auth'

const errorHandlers: Options<NextApiRequestExtended, NextApiResponse> = {
  // handle server errors
  onError(error, req, res) {
    res.status(501).json({ error: error.message })
  },
  // handle not allowed http method
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method ${req.method} not allowed` })
  },
}

export default nextConnect(errorHandlers).use(authMiddleware())

// Usage :
/*
(pages/api/test.ts)

import handler from 'lib/api-handler'

export default handler
  .get((req, res) => {
  res.json({
    user: req.user,
    message: 'this is get route',
  })
})
.post((req, res) => {
  res.json({
    user: req.user,
    message: 'this is post route',
  })
})
*/
