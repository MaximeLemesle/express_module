# API Express de Maxime LEMESLE

## À propos

Création d'une API REST réalisée avec Express.js, Prisma, GraphQL, et Swagger UI. Cette API utilise les données d'une base de données MySQL dans Docker.

## Table des matières

- 🪧 [À propos](#à-propos)
- 📦 [Prérequis](#prérequis)
- 🚀 [Installation](#installation)
- 🛠️ [Utilisation](#utilisation)
- 🏗️ [Langages & Frameworks](#langages--frameworks)


## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants :

  **Node.js** : Assurez-vous d'avoir Node.js installé sur votre système. Vous pouvez le télécharger et l'installer à partir du site officiel : [Node.js](https://nodejs.org/).

  **Docker** : Vous aurez besoin de Docker pour exécuter la base de données MySQL dans un conteneur. Si vous n'avez pas Docker installé, vous pouvez le télécharger depuis le site officiel : [Docker](https://www.docker.com/).

Une fois que vous avez Node.js et Docker installés, vous pouvez passer à l'étape d'installation du projet.


## Installation

- Placer le projet zipper dans un dossier, et le dézipper.
- Rendez-vous à la racine du projet.
- Lancez dans le terminal $npm install pour installer les dépendances.
- Une fois le chargement fini effectuez $npm run start pour démarrer le projet.
- Assurez vous d'avoir Docker de lancé pour n'avoir aucun problème avec la BDD à l'adresse: mysql://root:rootpwd@localhost:4000/liveAddict.


## Utilisation

Cette API peut être utilisée de différentes façons:

### Les Routes avec Prisma

J'ai mis en place des routes direct avec Prisma qui sont les suivantes:

**Routes pour les artistes**

- /artists -> Pour récupérer tous les artistes de la base.
- /artists/:id -> Pour récupérer un artiste avec son id.
- /artists/style/:id -> Pour récupérer tous les artistes d'un style avec l'id du style.

**Routes pour les concerts**

- /concerts -> Pour récupérer tous les concerts.
- /concerts/:ville -> Pour récupérer tous les concerts d'une ville.

**Routes pour les styles**

- /styles -> Pour récupérer tous les styles.
- /styles/:id -> Pour récupérer un style avec son id.

### Les Routes depuis GraphiQL

Avec GraphiQL ont retrouve les querys et les mutations suivantes:

**Les querys**

- allArtists { IdArtiste, pseudo, idStyle } -> Pour récupérer tous les artistes, pas besoin de paramètres.
- oneArtist(IdArtiste:13) { IdArtiste, pseudo, idStyle } -> Pour récupérer un artiste, en paramètres, passer l'id de l'artiste souhaité.

**Les mutations**

- createArtist(pseudo:"artistName", idStyle:artistStyleId) { IdArtiste, pseudo, idStyle } -> Pour créer un nouvel artiste, en paramètres, passer le pseudo du nouvel artiste, et l'id de son style musical.
- updateArtist(IdArtiste:4, pseudo:"newArtistName", idStyle:newArtistStyleId) { IdArtiste, pseudo, idStyle } -> Pour modifier un artiste, en paramètres, passer l'id de l'artiste souhaité, puis le nouveau pseudo et/ou le nouvel id de son style.


## Langages & Frameworks

<img src="https://img.shields.io/badge/Code-Node.js-339933?style=flat&logo=node.js&logoColor=whitee" />
<img src="https://img.shields.io/badge/Framework-Express.js-lightgray?style=flat&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/ORM-Prisma-2D3748?style=flat&logo=prisma&logoColor=white" />
<img src="https://img.shields.io/badge/Tools-GraphQL-E10098?style=flat&logo=graphql&logoColor=white" />
<img src="https://img.shields.io/badge/Tools-Swagger-lightgreen?style=flat&logo=swagger&logoColor=white" />
<img src="https://img.shields.io/badge/Tools-Docker-2496ED?style=flat&logo=docker&logoColor=white" />
<img src="https://img.shields.io/badge/Database-MySQL-FFA500?style=flat&logo=mysql&logoColor=white" />
