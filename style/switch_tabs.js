$(document).ready(function() {
  $('.lowlight').css('display', 'none');
  $('#PublicationsA').click(function () {
    $('#PublicationsH').html('Selected Papers');
    $('#PublicationsH').addClass('other_tab');
    $('#PublicationsA').html('All');
    $('#PublicationsA').removeClass('other_tab');
    $('.lowlight').each(function(index) {$(this).slideDown();})
  });
  $('#PublicationsH').click(function () {
    $('#PublicationsH').html('Selected Papers');
    $('#PublicationsH').removeClass('other_tab');
    $('#PublicationsA').html('All');
    $('#PublicationsA').addClass('other_tab');
    $('.lowlight').each(function(index) {$(this).slideUp();})
  });
  
  $('#biography_content').css('display', 'none');
  $('#fieldwork_content').css('display', 'none');
  $('#teaching_content').css('display', 'none');
    
  function unselect_tabs() {
    $('#research_content').css('display', 'none');
    $('#biography_content').css('display', 'none');
    $('#fieldwork_content').css('display', 'none');
    $('#teaching_content').css('display', 'none');
    $('#research_tab').addClass('other_tab');
    $('#biography_tab').addClass('other_tab');
    $('#fieldwork_tab').addClass('other_tab');
    $('#teaching_tab').addClass('other_tab');        
  }
  $('#research_tab').click(function() {
    unselect_tabs();
    $('#research_content').css('display', 'block');
    $('#research_tab').removeClass('other_tab');
    $('#contact_details').after($('#publications'));
  });
  $('#fieldwork_tab').click(function() {
    unselect_tabs();
    $('#fieldwork_tab').removeClass('other_tab');
    $('#fieldwork_content').css('display', 'block');
    $('#fieldwork_content').after($('#publications'));
  });
  $('#teaching_tab').click(function() {
    unselect_tabs();
    $('#teaching_tab').removeClass('other_tab');
    $('#teaching_content').css('display', 'block');
    $('#teaching_content').after($('#publications'));
  });
  $('#biography_tab').click(function() {
    unselect_tabs();
    $('#biography_tab').removeClass('other_tab');
    $('#biography_content').css('display', 'block');
    $('#biography_content').after($('#publications'));
  });
});
