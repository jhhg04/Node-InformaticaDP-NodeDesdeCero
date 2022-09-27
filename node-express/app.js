const express = require('express');

// Instacia express
const app = express();

// crear ruta = app - metodo - ruta - handler
app.get('/', (req, res) => {
  res.send('Ruta Inicio');
});

// crear ruta = app - metodo - ruta - handler
app.get('/contacto', (req, res) => {
  res.send('Ruta Contacto');
});

app.listen(3000, () => console.log('Server run on port 3000'));
