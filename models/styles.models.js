import { PrismaClient } from '../prisma/client/index.js'
const prisma = new PrismaClient()

const getAllStyles = () => {
    return prisma.style.findMany()
}

const getStyleById = (idStyle) => {
    return prisma.style.findUnique({where: {idStyle}})
}

export { getAllStyles, getStyleById };