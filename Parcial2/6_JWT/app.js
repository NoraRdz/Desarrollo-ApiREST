const express = require('express');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bearerToken = require('express-bearer-token');
const path = require('path');

const app = express();
app.use(express.json());
app.use(bearerToken());

let PRIVATE_KEY, PUBLIC_KEY;
try {
    PRIVATE_KEY = fs.readFileSync(path.join(__dirname, 'llaves', 'privada.pem'), 'utf8');
    PUBLIC_KEY = fs.readFileSync(path.join(__dirname, 'llaves', 'publica.pem'), 'utf8');
} catch (error) {
    console.error('Error loading keys:', error);
    process.exit(1);
}

app.post('/login', (req, res) => {
    const { usuario, password } = req.body;
    console.log(req.body);
    if (!usuario || !password) {
        return res.status(400).json({ error: 'Usuario y contraseña son requeridos' });
    }

    
    const token = jwt.sign(
        { usuario },
        PRIVATE_KEY,
        { algorithm: 'RS256', expiresIn: '1h' }
    );

    res.json({
        mensaje: 'Token generado con clave privada',
        token
    });
});

const verifyToken = (req, res, next) => {
    const token = req.token;
    if (!token) {
        return res.status(401).json({ error: 'Token no proporcionado' });
    }
    
    try {
        const decoded = jwt.verify(token, PUBLIC_KEY, { 
            algorithms: ['RS256']
        });
        req.user = decoded;
        next();
    } catch (err) {
        console.error('Error al verificar token:', err.message);
        return res.status(403).json({ 
            error: 'Token inválido o expirado',
            details: err.message 
        });
    }
};

// Uso:
app.get('/auth', verifyToken, (req, res) => {
    res.json({
        mensaje: 'Token válido',
        datos: req.user
    });
});

app.listen(8080, () => {
  console.log('Servidor escuchando en http://localhost:8080');
});
