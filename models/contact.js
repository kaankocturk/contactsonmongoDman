'use strict';

var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
  name: String,
  number: Number,
  email: String
});

var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
