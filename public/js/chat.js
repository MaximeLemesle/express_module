window.onload = () => {
    const socket = io();
    const chat = document.querySelector('#chat');
    const message = document.querySelector('#message');
    let username= "";

    // Demander le nom d'utilisateur
    socket.on('user_info', (msg) => {
        console.log('serveur: ' + msg);
        username = prompt('Quel est ton nom ?');
        if (!username) username = prompt(`Attention, si tu ne mets pas de nom, je vais choisir pour toi !`);
        if (!username) username = 'Toto';
        console.log(`Bienvenue ${username}`);

        socket.emit('get_username', {
            username
        });
    });

    // Afficher le nouveau message
    socket.on('new_message',(messages)=>{
        if (!Array.isArray(messages)) messages = [messages];
        messages.forEach((message) => {
            message.time = message.time;
            chat.innerHTML += 
            `<span ${message.username == "serveur" ? ' class="message__server" ' : ""}>
                <span class='message__username ${message.username == username ? "message__username--auteur" : ""}'>${message.username}</span>:
                <span class='message__content'>${message.content}</span>
                <span class='message__time'>${message.time}</span>
            </span>`;
        });
    })

    // Récupérer le message écrit par l'utilisateur
    document.querySelector('#form__message').addEventListener('submit',(event) => {
        event.preventDefault();
        socket.emit('new_message', message.value);
        message.value = '';
    })
}