import { buildSchema } from "graphql";

export default buildSchema(`

    type Artiste {
        IdArtiste : ID!
        pseudo : String!
        idStyle : Int!
    }

    type RootQuery {
        allArtists : [Artiste]!
    }

    schema {
        query : RootQuery
    }

`)