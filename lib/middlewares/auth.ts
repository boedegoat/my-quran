import { getSession } from 'next-auth/react'
import { Middleware } from 'lib/typings/api'

export default function authMiddleware(): Middleware {
  return async (req, res, next) => {
    req.user = null
    const session = await getSession({ req })
    if (session) {
      req.user = session.user
    }
    next()
  }
}
