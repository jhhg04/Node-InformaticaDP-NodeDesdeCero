const express = require('express');
const app = express();

require('dotenv').config({ path: './.env' });
const port = process.env.PORT || 3000;

const modeloCategoria = require('./models').Categoria;
const modeloProducto = require('./models').Producto;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Alta Categoria
app.post('/crearcategoria', (req, res) => {
  modeloCategoria
    .create(req.body)
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((err) => {
      res.json({ err });
    });
});

// Alta Producto
app.post('/crearproducto', (req, res) => {
  modeloProducto
    .create(req.body)
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((err) => {
      res.json({ err });
    });
});

// Mostrar Productos
app.get('/mostrarproductos', (req, res) => {
  modeloProducto
    .findAll({
      include: [{ model: modeloCategoria }],
    })
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((err) => {
      res.json({ err });
    });
});

// Eliminar Producto
app.delete('/borrarproducto/:id', (req, res) => {
  modeloProducto
    .destroy({
      where: { id: req.params.id },
    })
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((err) => {
      res.json({ err });
    });
});

// Editar Producto
app.put('/editarproducto/:id', (req, res) => {
  modeloProducto
    .update(req.body, {
      where: { id: req.params.id },
    })
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((err) => {
      res.json({ err });
    });
});

app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
