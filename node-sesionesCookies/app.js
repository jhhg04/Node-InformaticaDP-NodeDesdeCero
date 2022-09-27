const express = require('express');
const session = require('express-session');
const mySqlStore = require('express-mysql-session');
const app = express();

require('dotenv').config({ path: './.env' });
const port = process.env.PORT || 3000;

const options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '123456',
  database: 'test_session',
};

const sessionStore = new mySqlStore(options);

app.use(
  session({
    key: 'cookie_usuario',
    secret: '1231231231232',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
);
// app.use(
//   session({
//     secret: '1234546456',
//     resave: true,
//     saveUninitialized: true,
//   })
// );

app.get('/', (req, res) => {
  req.session.usuario = 'John Herrera';
  req.session.rol = 'Admin';
  req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
  res.send(`El user <strong>${req.session.usuario}</strong>
  con rol <strong>${req.session.rol}</strong>
  ha visitado esta pagina <strong>${req.session.visitas}</strong> veces`);
});

app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
