var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var contactObj;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your Contact List' });
});

router.get('/contactform', function(req, res) {
  res.render('contactForm');
});

router.get('/contactlist', function(req, res) {
  res.render('contactlist');
});

module.exports = router;
