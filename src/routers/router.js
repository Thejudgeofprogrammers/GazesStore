const express = require('express');
const path = require('path');
const router = express.Router();
// const { title } = require('../content');

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('index', { title : 'GazeSound' });
});

module.exports = router;