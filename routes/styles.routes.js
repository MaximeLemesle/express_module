import express from 'express';
import { getAllStyles } from '../models/styles.models.js';
const router = express.Router();

router.get('/', (req, res) => {
   getAllStyles().then(styles => res.json(styles))
});


export default router;