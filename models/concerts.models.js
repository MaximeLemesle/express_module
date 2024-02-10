import { PrismaClient } from '../prisma/client/index.js'
const prisma = new PrismaClient()

const getAllConcerts = () => {
    return prisma.concert.findMany()
}

const getAllConcertsByCity = async (cityName) => {
    const city = await getCityByName(cityName);
    return prisma.concert.findMany({where: {idVille: city.idVille}})
}

const getCityByName = (cityName) => {
    return prisma.ville.findFirst({
        where: {
            nom: cityName
        },
        select: {
            idVille: true
        }
    });
}

export { getAllConcerts, getAllConcertsByCity };  