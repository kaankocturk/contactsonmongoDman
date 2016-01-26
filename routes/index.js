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

// router.post('/contact', function(req, res) {
//   console.log(req.body);
//   res.render('contact', {name:req.body.name, number:req.body.number ,email:req.body.email});
// });

router.get('/contact/:id', function(req, res){
  fs.readFile('./contacts.json', function(err, data) {
    if (err) throw err;
    var arr = JSON.parse(data);
    contactObj = arr[req.params.id];
    console.log(contactObj);
  });
  console.log(contactObj);
  res.render('contact', contactObj);
});
module.exports = router;
