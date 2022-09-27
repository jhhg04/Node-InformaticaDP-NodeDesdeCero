const express = require('express');
const { body, validationResult } = require('express-validator');
const app = express();

require('dotenv').config({ path: './.env' });
const port = process.env.PORT || 3000;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post(
  '/registrar',
  [
    body('nya', 'Ingrese nombre y apellido').exists().isLength({ min: 5 }),
    body('email', 'Ingrese un Email valido').exists().isEmail(),
    body('edad', 'Ingrese un valor numerico').exists().isNumeric(),
  ],
  (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   res.status(400).json({ errors: errors.array() });
    //   console.log(errors);
    // }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(req.body);
      const valores = req.body;
      const validaciones = errors.array();
      res.render('index', { validaciones: validaciones, valores: valores });
    } else {
      res.send('Validacion Exitosa');
    }
  }
);

app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
