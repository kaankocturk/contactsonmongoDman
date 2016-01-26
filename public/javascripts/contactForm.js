'use strict';

$(document).ready(init);
var id = 0;
var contacts = [];
function init(e){
    $('.addContact').on('click', handleEntry);
}

function handleEntry(e){
  e.preventDefault();
  $.post('/contacts', {name: $('input#name').val(), number: $('input#number').val(), email: $('input#email').val()})
  .success(function(data){
    console.log(data);
  }).fail(function(error){
    console.log('we failed you bruh');
  });
  $('input').val('');
}
