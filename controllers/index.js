var express = require('express');
var router = express.Router();

/* GET index page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Friendly Stuff'});
});

/* GET index page. */
router.get('/signup', function(req, res) {
  res.render('signup', { title: 'Sign Up'});
});

module.exports = router;
