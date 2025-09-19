const express = require('express');
const router = express.Router();
const {getPlataformas} = require('../controllers/controllerPlataforma');

router.get('/', (req, res) => {
    getPlataformas()
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ error: err.message }));
});



module.exports.router=router;