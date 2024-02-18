import express from 'express';
import { getAllStyles, getStyleById } from '../models/styles.models.js';
const router = express.Router();

router.get('/', (req, res) => {
   getAllStyles().then(styles => res.json(styles))
});

router.get('/:id', (req, res) => {
   getStyleById(+req.params.id).then(styles => res.json(styles))
});


export default router;