const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

require('dotenv').config({ path: './.env' });
const port = process.env.PORT || 3000;

// Seteamos el motor de plantillas
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('inicio');
});

app.get('/contacto', (req, res) => {
  res.render('contacto');
});

app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
