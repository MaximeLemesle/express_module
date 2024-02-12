import { buildSchema } from "graphql";

export default buildSchema(`

    type Artiste {
        IdArtiste : ID!
        pseudo : String!
        idStyle : Int!
    }

    type RootQuery {
        allArtists : [Artiste]!
        oneArtist(IdArtiste: Int!) : Artiste!
    }

    type MutationQuery {
        createArtist(pseudo: String!, idStyle: Int!) : Artiste!
        updateArtist(IdArtiste: Int!, pseudo: String, idStyle: Int) : Artiste!
    }

    schema {
        query : RootQuery
        mutation : MutationQuery
    }

`)