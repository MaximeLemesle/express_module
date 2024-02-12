import { PrismaClient } from '../prisma/client/index.js'
const prisma = new PrismaClient()

export default {
    async allArtists() {
        return prisma.artiste.findMany()
    },

    async oneArtist({IdArtiste}) {
        return prisma.artiste.findUnique({where: {IdArtiste}})
    },
 
    async createArtist(user) {
        return prisma.artiste.create({data: user})
    },

    async updateArtist(newArtiste) {
        return prisma.artiste.update({
            where: {IdArtiste: newArtiste.IdArtiste},
            data: newArtiste
        })
    }
}