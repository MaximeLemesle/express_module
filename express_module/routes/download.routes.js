import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {

    // Récupérer la date actuelle au format YYYYMMDD_HHmmss
    const formatDate = new Date().toISOString().replace(/T/, '_').slice(0,19);

    // Nom du fichier
    const fileName = `${formatDate}.txt`;

    // Contenu du fichier
    const fileContent = `${formatDate}`;

    // Création du fichier
    fs.writeFile(fileName, fileContent, (err) => {
        if (err) throw err;
        console.log('Fichier créé !');
        
        res.status(200).download(fileName, (err) => {
            if (err) throw err;

            // Suppression du fichier
            fs.unlink(path.resolve(fileName),(err) => {
                if (err) throw err;
                console.log('Fichier supprimé !');
            });
        });
    });
});
 

export default router;