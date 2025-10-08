import fs from "fs";
import { parse } from "yaml";
import path from "path";
import { fileURLToPath } from "url";

// Configurar __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta base donde están tus YAML
const dataDir = path.resolve(__dirname, "data");

// Lista de archivos YAML a leer
const archivos = ["arreglo.yml", "arregloObjetos.yml", "objeto.yml", "objetoArreglo.yml"]; // agrega los que tengas

// Leer todos los archivos
for (const nombreArchivo of archivos) {
  const filePath = path.join(dataDir, nombreArchivo);
    const contenido = fs.readFileSync(filePath, "utf8");
    const data = parse(contenido);
    console.log(`${nombreArchivo}:`, data);
}
