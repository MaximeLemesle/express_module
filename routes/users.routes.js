import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    const id = '';

    res.status(200).render('pages/users', { id, username: res.locals.username });
});

router.get('/:id([0-9]+)', (req, res) => {
    const id = parseInt(req.params.id);

    res.status(200).render('pages/users',{ id });
});

export default router;