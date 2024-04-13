const express = require('express');
const path = require('path');
require('dotenv').config();
const router = require('./src/routers/router');
const logger = require('./middleware/logger');
const error404 = require('./middleware/error-404');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'public', 'static'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.use(logger);
app.use(error404);

const PORT = process.env.PORT ?? 3030;

app.listen(PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', `Server is located in http://localhost:${PORT}`);
});
