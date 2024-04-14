const express = require('express');
const path = require('path');
const router = express.Router();
// const { ... } = require('../content');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('index', { title : 'GazeSound' });
});

router.get('/api/login', (req, res) => {
  res.json({id: 4});
});

module.exports = router;