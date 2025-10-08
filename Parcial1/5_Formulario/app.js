const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

const { upload } = require('./middleware/multer');

const port = 3001

// app.use(upload.single('archivo'))
// app.use(upload.none())
app.use(cors())


const clientes = require('./router/clientes');
const proveedores = require('./router/proveedores');
const subirArchivo = require('./router/subirArchivo');

app.use(morgan('tiny'))
app.use('/subirArchivo',upload.single('archivo'),subirArchivo)
app.use('/clientes',clientes.router)
app.use('/proveedores',proveedores.router)


app.listen(port, ()=>{
    console.log(`Server corriendo en http://localhost:${port}`)
})