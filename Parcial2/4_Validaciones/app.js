const express = require("express");
const { query, validationResult } = require("express-validator");

const app = express();

app.post(
  "/usuario",
  query("person").notEmpty().withMessage("El parámetro 'person' es obligatorio").escape(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errores: errors.array() });
    }

    const { person } = req.query;

    res.status(200).json({ mensaje: `Usuario recibido: ${person}` });
  }
);

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});
