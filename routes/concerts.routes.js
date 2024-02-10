import express from 'express';
import { getAllConcerts, getAllConcertsByCity } from '../models/concerts.models.js';
const router = express.Router();

router.get('/', (req, res) => {
   getAllConcerts().then(concerts => res.json(concerts))
});

router.get('/:cityName', (req, res) => {
    getAllConcertsByCity(req.params.cityName).then(ville => res.json(ville))
});

export default router;