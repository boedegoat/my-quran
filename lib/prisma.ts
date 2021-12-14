import { PrismaClient } from '@prisma/client'

let prisma: PrismaClient

const inProduction = process.env.NODE_ENV === 'production'

if (inProduction) {
  prisma = new PrismaClient()
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  prisma = global.prisma
}

export default prisma
