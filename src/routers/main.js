const express= require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {title: 'Gazes | Store'});
});

module.exports = router;