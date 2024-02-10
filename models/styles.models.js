import { PrismaClient } from '../prisma/client/index.js'
const prisma = new PrismaClient()

const getAllStyles = () => {
    return prisma.style.findMany()
}

export { getAllStyles };