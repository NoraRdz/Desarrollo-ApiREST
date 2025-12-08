import express from 'express'
import cache from 'cache-express'
const app = express();


app.get('/saludo', cache(10), (req, res) => {
  console.log("Ejecuta lógica"); // Solo se verá cada 10s
  res.json({ msg: "Hola mundo", timestamp: Date.now() });
})

app.listen(3000,()=>{
    console.log(`http://localhost:3000`)
})