import { PrismaClient } from '../prisma/client/index.js'
const prisma = new PrismaClient()

const getAllArtists = () => {
    return prisma.artiste.findMany()
}

const getArtistById = (IdArtiste) => {
    return prisma.artiste.findUnique({where: {IdArtiste}})
}

const getArtistByStyle = (idStyle) => {
    return prisma.artiste.findMany({where: {idStyle}})
}

export { getAllArtists, getArtistById, getArtistByStyle };