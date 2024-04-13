const express = require('express');
const path = require('path');
require('dotenv');
// const router = require('./src/routers/router');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'static'));

app.get('/', (req, res) => {
  res.render('index.ejs');
});

const PORT = process.env.PORT ?? 3030;

app.listen(PORT, () => {
  console.log(`Server is located in http://localhost:${PORT}`);
});