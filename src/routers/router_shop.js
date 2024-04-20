const express = require('express');
const path = require('path');
const router = express.Router();
// const { ... } = require('../content');

router.get('/', (req, res) => {
  res.render('shop/index', { title : 'Store' });
});

router.get('/api/login', (req, res) => {
  res.json({id: 4});
});

module.exports = router;