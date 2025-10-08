const pool = require('../utils/Postgre');

exports.getPlataformas=async (id)=>{
  // Ruta de ejemplo: obtener todos los usuarios
  console.log(id)
  let consultSql;
  if(id == undefined){
    consultSql='SELECT * FROM "Platform"'
  }
  else{
    consultSql=`SELECT * FROM "Platform" WHERE id=${id}`
  }

  console.log(consultSql)
  try {
    const result = await pool.query(consultSql);

    console.table(result.rows); // Muestra los usuarios en la consola
    return result.rows;
  } catch (err) {
    console.error(err);
    return "Error en el servidor";
  }
}