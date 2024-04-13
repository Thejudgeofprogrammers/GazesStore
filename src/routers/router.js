const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;