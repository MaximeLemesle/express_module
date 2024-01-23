import express from 'express';
const router = express.Router();
import { Server } from 'socket.io';

router.get('/', (req, res) => {
    res.status(200).render('pages/chat');
});
 
const chatServer = (server) => {
    // Création du chat
    const io = new Server(server);

    // Tableau des messages
    const messageTable = [];

    // Connexion au chat
    io.sockets.on('connection', (socket) => {
        console.log(`Un utilisateur est connecté`);

        socket.emit('user_info', 'Vous êtes connecté !');
        socket.emit('new_message', messageTable);

        // Enregistrer le nom d'utilisateur
        socket.on('get_username', (info) => {
            if (info.username){
                socket.client.username = info.username
                response(`${socket.client.username} est connecté !`);
            }
        })

        // Envoyer le message reçu
        socket.on('new_message', (message) => {
            response(message, socket.client.username);
        });


        // Création de la réponse
        const response = (texte, username='serveur') => {

            // Création de l'heure à afficehr
            const time = new Date();
            const heures = time.getHours();
            const minutes = time.getMinutes();
            const secondes = time.getSeconds();
            const newTime = `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secondes.toString().padStart(2, '0')}`;

            const message = {
                time : newTime,
                username,
                content : texte.replace('merde','*****'), 
            }

            console.log(`${message.username}: ${message.content} `);
            messageTable.push(message)
            io.emit('new_message', message)
        }

        // Déconnexion du chat
        socket.on('disconnect', () => {
        console.log(`Un utilisateur s'est déconnecté`);
        });
    });
}


export { router, chatServer };
