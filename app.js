/*1.- Instanciar Express */
const express = require('express');

/* 2.-Inicializar la función de Express */
const app = express();

/* 3.- Pendiente */

/* 4.- Crear rutas */

app.get('/ruta', (req, res) => {
  res.send('Hola desde la ruta!!')
});

/* 5.- Iniciar servidor */
app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
//* Este archivo va a ser la base de nuestro servidor *//