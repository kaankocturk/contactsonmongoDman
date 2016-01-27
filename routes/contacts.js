'use strict';

var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

router.get('/', function(req, res, next) {
  Contact.find({}, function(err, contacts) {
    console.log('errgettingcontacts:', err);
    console.log('contacts:', contacts);
    res.send(contacts);
  });
});

router.post('/rem', function(req, res, next) {
  console.log(req.body);
  Contact.remove(req.body, function(err) {
    if (!err) {
      console.log('removed!');
        res.send('err!');
      }
      else {
        console.log('cant remove!');
        res.send('success!');
      }
  });
});

router.get('/show', function(req, res) {
  Contact.find(req.body, function(err, contact) {
    res.render('contact', contact[0]);
  });
});

router.post('/', function(req, res) {
  var contact = new Contact(req.body);
  console.log('contact:', contact);
  contact.save(function(err, savedcontact) {
    console.log('errsavingcontact:', err);
    console.log('savedcontact:', savedcontact);
    res.send(savedcontact);
  });
});


module.exports = router;
