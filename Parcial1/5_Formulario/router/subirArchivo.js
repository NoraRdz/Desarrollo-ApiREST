const express = require('express');
const router = express.Router();

router.post('/', (req,res)=>{
    res.json({"message":"Se subio el archivo correctamente"})
});

module.exports = router;