const express = require('express');
const app = express();

const port = 3000

function middlewareValidador(req, res, next) {

    const contentType = req.headers["content-type"];
    
    if (!contentType || !contentType.includes("application/json")) {
      return res.status(415).json({ 
        error: "El Content-Type debe ser application/json" 
      });
    }

  next();
}


app.get('/', (req,res)=>{
    res.json({"message":"Hola mundo"})
});

app.post('/',middlewareValidador, (req,res)=>{
   res.json({"message":"Hola mundo"})
});

app.put('/', (req,res)=>{
    res.json({"message":"Hola mundo"})
});

app.delete('/', (req,res)=>{
    res.json({"message":"Hola mundo"})
});


app.listen(port, ()=>{
    console.log("server corriendo en http://localhost:3000")
})