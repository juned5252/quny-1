var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('layout');
});

router.get('/main', (req, res) => {
  res.render('main');
});

module.exports = router;
