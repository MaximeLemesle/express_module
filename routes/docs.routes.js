import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).render('pages/docs');
});
 

export default router;