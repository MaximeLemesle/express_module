import express from 'express';
import http from 'http';


// Création du serveur
const app = express();
const port = 8080;
const server = http.createServer(app);


// Utilisation du template ejs
app.set('view engine', 'ejs');


// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Middleware pour créer une session
import session from 'express-session';
app.use(session({
    secret: 'session',
    resave: false,
    saveUninitialized: true
}));
app.use((req, res, next) => {
    res.locals.username = req.session.username || null;
    res.locals.isConnected = req.session.isConnected || null;
    next();
});


// Middleware pour récupérer l'URL actuelle
app.use((req, res, next) => {
    res.locals.currentUrl = req.url;
    next();
});


// Page accueil
app.get('/', (req, res) => {
    res.status(200).render('pages/home');
});


// Téléchargement du fichier YYYYMMDD_HHmmss.txt
import download from './routes/download.routes.js';
app.use('/download', download);


// Page utilisateurs
import users from './routes/users.routes.js';
app.use('/users', users);


// Page connexion
import connexion from './routes/connexion.routes.js';
app.use('/connexion', connexion);


// Page déconnexion
import deconnexion from './routes/deconnexion.routes.js';
app.use('/deconnexion', deconnexion);


// Page 404
import page_404 from './routes/404.routes.js';
app.use('/404', page_404);


// Page du chat
import { router as chat, chatServer } from './routes/chat.routes.js';
app.use('/chat', chat);
chatServer(server);

// Page api
import api from './routes/api.routes.js';
app.use('/api', api);


// Appel artistes
import artists from './routes/artists.routes.js';
app.use('/artists', artists);


// Appel styles
import styles from './routes/styles.routes.js';
app.use('/styles', styles);


// Appel concerts
import concerts from './routes/concerts.routes.js';
app.use('/concerts', concerts);


// Graphql
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))


// Page documentation
import docs from './routes/docs.routes.js';
app.use('/docs', docs);


// Gestion des erreurs
app.use('*', page_404);


// Démarage du serveur
server.listen(port, () => {
    console.log(`Le serveur est en ligne sur le port ${port} !`);
});