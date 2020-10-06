$(document).ready(function() {
  $('#biography_content').css('display', 'none');
  $('#fieldwork_content').css('display', 'none');
  $('#teaching_content').css('display', 'none');
  $('#software_content').css('display', 'none');

  function unselect_tabs() {
    $('#research_content').css('display', 'none');
    $('#biography_content').css('display', 'none');
    $('#fieldwork_content').css('display', 'none');
    $('#teaching_content').css('display', 'none');
    $('#software_content').css('display', 'none');
    $('#research_tab').addClass('other_tab');
    $('#biography_tab').addClass('other_tab');
    $('#fieldwork_tab').addClass('other_tab');
    $('#teaching_tab').addClass('other_tab');
    $('#software_tab').addClass('other_tab');
  }
  $('#research_tab').click(function() {
    unselect_tabs();
    $('#research_content').css('display', 'block');
    $('#research_tab').removeClass('other_tab');
  });
  $('#fieldwork_tab').click(function() {
    unselect_tabs();
    $('#fieldwork_tab').removeClass('other_tab');
    $('#fieldwork_content').css('display', 'block');
  });
  $('#teaching_tab').click(function() {
    unselect_tabs();
    $('#teaching_tab').removeClass('other_tab');
    $('#teaching_content').css('display', 'block');
  });
  $('#biography_tab').click(function() {
    unselect_tabs();
    $('#biography_tab').removeClass('other_tab');
    $('#biography_content').css('display', 'block');
  });
  $('#software_tab').click(function() {
    unselect_tabs();
    $('#software_tab').removeClass('other_tab');
    $('#software_content').css('display', 'block');
  });
});
