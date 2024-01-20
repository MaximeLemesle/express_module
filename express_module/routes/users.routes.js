import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    const id = '';

    res.status(200).render('pages/users', { id, username: res.locals.username });
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);

    if (!Number.isInteger(id)) {
        res.status(404).render('pages/404');
    }

    res.status(200).render('pages/users',{ id });
});

export default router;