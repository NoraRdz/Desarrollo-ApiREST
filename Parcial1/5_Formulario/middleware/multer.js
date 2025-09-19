const path=require("path")
const multer = require('multer');

const folder = path.join(__dirname+'../../archives')
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, folder); // Carpeta donde se guardará
  },
  filename: (req, file, cb) => {
    // Mantener la extensión original (.png, .jpg, etc.)
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, name + "-" + Date.now() + ext);
  }
});

// Crear el middleware con multer
const upload = multer({ storage });

module.exports = {
    upload
};