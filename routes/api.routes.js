import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    const id = '';

    res.status(200).render('pages/api', { id, username: res.locals.username });
});

export default router;