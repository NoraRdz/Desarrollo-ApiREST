const pool = require('../utils/Postgre');

exports.getPlataformas=async ()=>{
  // Ruta de ejemplo: obtener todos los usuarios

  try {
    const result = await pool.query('SELECT * FROM "Platform"');

    console.table(result.rows); // Muestra los usuarios en la consola
    return result.rows;
  } catch (err) {
    console.error(err);
    return "Error en el servidor";
  }
}