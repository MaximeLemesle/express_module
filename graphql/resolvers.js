import { PrismaClient } from '../prisma/client/index.js'
const prisma = new PrismaClient()

export default {
    async allArtists() {
        return prisma.artiste.findMany()
    }
}