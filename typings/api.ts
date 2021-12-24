import { NextApiRequest, NextApiResponse } from 'next'
import { Middleware as NextConnectMiddleware } from 'next-connect'

export interface NextApiRequestExtended extends NextApiRequest {
  user: {
    name?: string
    email?: string
    image?: string
  } | null
}

export type Middleware = NextConnectMiddleware<NextApiRequestExtended, NextApiResponse>
