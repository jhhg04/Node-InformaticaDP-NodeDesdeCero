const express = require('express');
const app = express();

require('dotenv').config({ path: './.env' });
const port = process.env.PORT || 3000;

const bcrypt = require('bcryptjs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/login', async (req, res) => {
  const user = req.body.user;
  const password = req.body.password;
  if (user == 'admin' && password == '12345') {
    let passwordHash = await bcrypt.hash(password, 8);
    res.json({
      message: 'Authenticacion Successs',
      passwordHash,
    });
  } else {
    res.json({
      message: 'Password or User Incorrect',
    });
  }
});

app.get('/compare', (req, res) => {
  let hashSaved =
    '$2a$08$lTPxAlLk8fUCIN.1mXPsAeJE3y4r0AMR9UV.hmtWLLFFuega8e4tG';
  let compare = bcrypt.compareSync('12345', hashSaved);
  if (compare) {
    res.json('OK');
  } else {
    res.json('NO son iguales');
  }
});

app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
