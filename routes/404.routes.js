import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.status(404).render('pages/404');
});
 

export default router;