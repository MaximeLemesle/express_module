# API Express de Maxime LEMESLE

API REST réalisé avec Express.js, Prisma, GraphQL, et Swagger UI.

## Installation

- Installer le projet dezipper dans un dossier.
- Vérifier que vous êtes bien à la racine du projet.
- Lancez dans le terminal $npm install pour installer les dépendances.
- Une fois le chargement fini effectuez $npm run start pour démarrer le projet.
- Assurez vous d'avoir Docker de lancé pour n'avoir aucun probléme avec la BDD à l'adresse: mysql://root:rootpwd@localhost:4000/liveAddict.


## Utilisation

Cette API peut être utilisées de différentes façons:

### Les Routes avec Prisma

J'ai mis en place des routes direct avec Prisma qui sont les suivantes:

<strong>Routes pour les artistes</strong>

- /artists -> Pour récupérer tous les artistes de la base.
- /artists/:id -> Pour récupérer un artiste avec son id.
- /artists/style/:id -> Pour récupérer tous les artistes d'un style avec l'id du style.

<strong>Routes pour les concerts</strong>

- /concerts -> Pour récupérer tous les concerts.
- /concerts/:ville -> Pour récupérer tous les concerts d'une ville.

<strong>Routes pour les styles</strong>

- /styles -> Pour récupérer tous les styles.
- /styles/:id -> Pour récupérer un style avec son id.

### Les Routes depuis GraphiQL

Avec GraphiQL ont retrouve les query et les mutation suivantes:

<strong>Les query</strong>

- allArtists { IdArtiste, pseudo, idStyle } -> Pour récupérer tous les artistes, pas besion de paramêtres.
- oneArtist(IdArtiste:13) { IdArtiste, pseudo, idStyle } -> Pour récupérer un artiste, en paramêtres, passer l'id de l'artiste souhaité.

<strong>Les mutation</strong>

- createArtist(pseudo:"artistName", idStyle:artistStyleId) { IdArtiste, pseudo, idStyle } -> Pour créer un nouvel artiste, en paramêtres, passer le pseudo du nouvel artiste, et l'id de son style musical.
- updateArtist(IdArtiste:4, pseudo:"newArtistName", idStyle:newArtistStyleId) { IdArtiste, pseudo, idStyle } -> Pour modifier un artiste, en paramêtres, passer l'id de l'artiste souhaité, puis le nouveau pseudo et/ou le nouvel id de son style.