const express = require('express');
const router = express.Router();
const {mensaje} = require('../controllers/controllerClient');

router.get('/', (req,res)=>{
//    res.json({"message":"Hola Esta respondiendo a una peticion al router clientes"})
   res.json({"message":mensaje()})
});

router.post('/', (req,res)=>{
    // res.json({"message":"Hola Esta respondiendo a una peticion al router clientes"})
    res.json({"message":mensaje()})
});



module.exports.router=router;