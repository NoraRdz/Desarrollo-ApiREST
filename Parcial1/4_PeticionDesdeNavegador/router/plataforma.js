const express = require('express');
const router = express.Router();
const {getPlataformas} = require('../controllers/controllerPlataforma');

router.get('/', (req, res) => {
    const id = req.query.ID ? parseInt(req.query.ID, 10) : undefined;
    getPlataformas(id)
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
});



module.exports.router=router;