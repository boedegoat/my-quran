import { NextApiRequest, NextApiResponse } from 'next'
import { Middleware as NextConnectMiddleware, Options } from 'next-connect'

export interface NextApiRequestExtended extends NextApiRequest {
  user: {
    name?: string
    email?: string
    image?: string
  } | null
}

export type ApiController<T = any> = (
  req: NextApiRequestExtended,
  res: NextApiResponse<T>
) => void | Promise<void>

export type Middleware = NextConnectMiddleware<NextApiRequestExtended, NextApiResponse>
export type ErrorHandlers = Options<NextApiRequestExtended, NextApiResponse>
