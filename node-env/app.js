const express = require('express');
const app = express();

require('dotenv').config({ path: './.env' });
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Running in port ${port}`);
});
