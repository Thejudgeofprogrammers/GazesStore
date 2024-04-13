const express = require('express');
const path = require('path');
require('dotenv').config();
const router = require('./src/routers/router.js');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'public', 'static'));

app.use('/', router);

const PORT = process.env.PORT ?? 3030;

app.listen(PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', `Server is located in http://localhost:${PORT}`);
});