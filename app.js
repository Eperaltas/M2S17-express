/*1.- Instanciar Express */
const express = require('express');

/* 2.-Inicializar la función de Express */
const app = express();

/* 3.- Middleware */
app.use(express.json());


/* 4.- Crear rutas */
app.get('/', (req, res) => {
  res.send('Instrucciones')
  });

  app.get('/mensaje', (req, res) => {
    res.send(
    {
        mensaje: 'Hola desde /mensaje'
    }
    )
    });

app.get('/ruta/:uno/:dos/:tres/:mas', (req, res) => {
  console.log(req.params.uno)
  const { uno, dos, tres } = req.params
  res.json({
    mensaje: `${uno} ${dos} ${tres}`
  })
});

//* Ejercicio: Añadir una ruta que reciba como parámetro un nombre y un apellido query string o parámetros en la ruta y devuelva como respuesta un mensaje usando el nombre y apellido //*
//* Ejemplo: http://localhost:3000/mensaje/Edgar/Peralta o http://localhost:3000/mensaje?nombre=Edgar&apellido=Peralta *//
//* Respuesta { mensaje: "Hola, Edgar Peralta"}





app.get('/body', (req, res) => {
  console.log(req.body)
  const param1 = req.body.hola || 'No existe ningún parámetro';
  res.json({
    mensaje: param1
  });
});

app.get('/mensaje', (req, res) => {
  console.log(req.query)
  const nombre = req.query.nombre || 'No existe ningún parámetro';
  const apellido = req.query.apellido || 'No existe ningún parámetro';
  res.json({
    mensaje: `${nombre} ${apellido}`
  })
});

//* Esto es por query string *//

app.get('/:id', (req, res) =>{
  res.send(
    {
      mensaje: `${req.params.id} desde /:id`
    }
  )
});

app.get('ruta/:nombre/:apellido', (req,res) =>  {
  const {nombre,apellido} = req.params
  res.json({
    mensaje: `Hola, ${nombre} ${apellido}`
  });
}); 

//* Esto es por ruta *//

/* 5.- Iniciar servidor */
app.listen(3000, ()=> {
    console.log('listening on port 3000');
});
//* Este archivo va a ser la base de nuestro servidor *//