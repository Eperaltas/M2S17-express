/*1.- Instanciar Express */
const express = require('express');

/* 2.-Inicializar la función de Express */
const app = express();

/* 3.- Pendiente */

/* 4.- Crear rutas */
app.get('/', (req, res) => {
  res.send('Instrucciones')
  });

app.get('/ruta/:uno/:dos/:tres/:mas', (req, res) => {
  console.log(req.params.uno)
  const { uno, dos, tres } = req.params
  res.json({
    mensaje: `${uno} ${dos} ${tres}`
  })
});

app.get('/query', (req, res) => {
  console.log(req.query)
  const param1 = req.query.hola || 'No existe ningún parámetro';
  res.json({
    mensaje: `${param1}`
  })
});

/* 5.- Iniciar servidor */
app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
//* Este archivo va a ser la base de nuestro servidor *//