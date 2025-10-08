import express from "express";

const router = express.Router();

// Ruta principal
router.get("/", (req, res) => {
  res.json({ message: "Funcionando" });
});

// Ruta que lanza un error intencional
router.get("/error", (req, res, next) => {
  try {
    throw new Error("Error generado");
  } catch (err) {
    next(err);
  }
});

export default router;
