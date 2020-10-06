$(document).ready(function() {
  $('.lowlight').css('display', 'none');
  $('#PublicationsA').click(function () {
  if ($('#PublicationsH').html() == ('All Publications')) {
    $('#PublicationsH').html('Selected Publications');
    $('#PublicationsA').html('[Show all]');
    $('.lowlight').css('display', 'none');
  } else {
    $('#PublicationsH').html('All Publications');
    $('#PublicationsA').html('[Show fewer]');
    $('.lowlight').css('display', 'block');
  } 
});
});
