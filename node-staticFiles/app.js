const express = require('express');
const app = express();

require('dotenv').config({ path: './.env' });
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/recursos', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
