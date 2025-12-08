const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();

// Configuración de certificados SSL
const options = {
    key: fs.readFileSync(path.join(__dirname, 'certificados', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'certificados', 'cert.pem'))
};

// Puerto para HTTPS
const HTTPS_PORT = 8443;

// Crear servidor HTTPS
const httpsServer = https.createServer(options, app);

// Iniciar servidor
httpsServer.listen(HTTPS_PORT, () => {
    console.log(`Servidor HTTPS corriendo en https://localhost:${HTTPS_PORT}`);
});

// Middleware y rutas de Express aquí
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando en HTTPS! ');
});