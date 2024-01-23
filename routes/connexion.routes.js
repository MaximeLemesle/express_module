import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    const isConnected = req.session.isConnected || false;

    res.status(200).render('pages/connexion', { error: '', username: res.locals.username });
});
 
router.post('/', (req, res) => {
    const login = req.body.login;
    const password = req.body.password;

    if (login === 'admin' && password === 'admin') {
        req.session.isConnected = true;
        req.session.username = login;

        res.status(200).redirect('/');
        console.log(`Vous êtes connecté avec le nom d'utilisateur : ${login}, et le mot de passe : ${password}`);
    } else if (login !== 'admin' && password !== 'admin') {
        res.status(401).render('pages/connexion', { error: `Mauvais nom d'utilisateur et mot de passe` });
    } else if (login !== 'admin') {
        res.status(401).render('pages/connexion', { error: `Mauvais nom d'utilisateur` });
    } else {
        res.status(401).render('pages/connexion', { error: `Mauvais mot de passe` });
    };
});

export default router;