import express from 'express';
import { getAllArtists, getArtistById, getArtistByStyle } from '../models/artists.models.js';
const router = express.Router();

router.get('/', (req, res) => {
   getAllArtists().then(artists => res.json(artists))
});

router.get('/:id', (req, res) => {
    getArtistById(+req.params.id).then(artists => res.json(artists))
});

router.get('/style/:id', (req, res) => {
    getArtistByStyle(+req.params.id).then(artists => res.json(artists))
});


export default router;