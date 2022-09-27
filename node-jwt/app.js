const express = require('express');
const jwt = require('jsonwebtoken');

const keys = require('./settings/keys');

const app = express();

app.set('key', keys.key);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server run');
});

app.post('/login', (req, res) => {
  if (req.body.usuario == 'admin' && req.body.pass == '12345') {
    const payload = {
      check: true,
    };
    const token = jwt.sign(payload, app.get('key'), {
      expiresIn: '7d',
    });
    res.json({
      message: 'Autenticacion Exitosa',
      token,
    });
  } else {
    res.json({
      message: 'User or Password Inconrrect',
    });
  }
  res.send('Server run');
});

const verificacion = express.Router();

verificacion.use((req, res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  // console.log(token);
  if (!token) {
    res.status(401).send({
      error: 'Es necesario un token de Auth',
    });
    return;
  }
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
    console.log(token);
  }
  if (token) {
    jwt.verify(token, app.get('key'), (error, decoded) => {
      if (error) {
        return res.json({
          message: 'El token no es valido',
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
});

app.get('/info', verificacion, (req, res) => {
  res.json('Info Importante entregada');
});

app.listen(3000, () => {
  console.log('Server run on port 3000');
});
