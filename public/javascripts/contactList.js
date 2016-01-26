$(document).ready(init);
function init(){
  $('tbody').on('click', '.trash',function(e){
      e.stopPropagation();
      var $row = $(this).closest('tr');
      var rowid = $row.attr('id').slice(-1);
      $.post('/contacts', {remindex: rowid});
      $row.remove();
  });

  $('tbody').on('click', 'tr',function(e){
    var $row = $(this).closest('tr');
    var rowid = $row.attr('id').slice(-1);
    $.get('/contact/' + rowid);
    window.location = "http://localhost:3000/contact/"+rowid;
  });

  $.get('/contacts')
    .success(function(data){
      var domstuff = data.map(function(input, index){
        var $button = $('<button>').addClass('btn btn-default trash btn-sm').attr('aria-label', 'Left Align').append('Remove contact');
        var $tr = $('#template').clone().attr('id', 'contact'+index);
        $tr.find('.name').text(input.name);
        $tr.find('.number').text(input.number);
        $tr.find('.email').text(input.email);
        $tr.find('.remove').append($button);
        return $tr;
      });
      $('tbody').append(domstuff);
    })
    .fail(function(err) {
      console.error(err);
    });
}
