const express = require('express');
const Sequelize = require('sequelize');

const app = express();
const sequelize = new Sequelize('postres_database', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
});

const postresModel = sequelize.define('postres', {
  id: { type: Sequelize.INTEGER, primaryKey: true },
  nombre: Sequelize.STRING,
  calorias: Sequelize.INTEGER,
});

require('dotenv').config({ path: './.env' });
const port = process.env.PORT || 3000;

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexion a la base de datos OK');
  })
  .catch((err) => {
    console.log('Error ', err);
  });

postresModel
  .findAll({ attributes: ['nombre', 'calorias'] })
  .then((postres) => {
    const resultados = JSON.stringify(postres);
    console.log(resultados);
  })
  .catch((err) => {
    console.log('Error ', err);
  });

app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
