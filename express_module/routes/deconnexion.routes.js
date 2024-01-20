import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    req.session.isConnected = false;
    req.session.username = null;

    res.status(200).redirect('/');
    console.log(`Vous êtes déconnecté !`);
});

export default router;