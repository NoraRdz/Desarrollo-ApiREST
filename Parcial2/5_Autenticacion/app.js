const express = require('express');
const app=express()

const bearerToken = require('express-bearer-token');

app.use(bearerToken());

app.use(function (req, res) {
  res.send('Token '+req.token);
});


app.listen(8080, ()=>{
    console.log("Express escuchando en http://localhost:8080")
})