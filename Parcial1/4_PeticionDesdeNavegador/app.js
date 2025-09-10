const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const port = 3000

const clientes = require('./router/clientes');
const proveedores = require('./router/proveedores');
app.use(morgan('tiny'))
// app.use(cors())

app.use('/clientes',clientes.router)
app.use('/proveedores',proveedores.router)


app.listen(port, ()=>{
    console.log("server corriendo en http://localhost:3000")
})