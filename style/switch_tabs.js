$(document).ready(function() {
  $('#biography_content').css('display', 'none');
  $('#phd_content').css('display', 'none');
  $('#msc_content').css('display', 'none');
  $('#opps_content').css('display', 'none');
  $('#teaching_content').css('display', 'none');
  $('#software_content').css('display', 'none');

  function unselect_tabs() {
    $('#research_content').css('display', 'none');
    $('#biography_content').css('display', 'none');
    $('#phd_content').css('display', 'none');
    $('#msc_content').css('display', 'none');
    $('#opps_content').css('display', 'none');
    $('#teaching_content').css('display', 'none');
    $('#software_content').css('display', 'none');
    $('#research_tab').addClass('other_tab');
    $('#biography_tab').addClass('other_tab');
    $('#teaching_tab').addClass('other_tab');
    $('#software_tab').addClass('other_tab');
    $('#phd_tab').addClass('other_tab');
    $('#msc_tab').addClass('other_tab');
    $('#opps_tab').addClass('other_tab');
  }
  $('#research_tab').click(function() {
    unselect_tabs();
    $('#research_content').css('display', 'block');
    $('#research_tab').removeClass('other_tab');
  });
  $('#phd_tab').click(function() {
    unselect_tabs();
    $('#phd_tab').removeClass('other_tab');
    $('#phd_content').css('display', 'block');
  });
  $('#msc_tab').click(function() {
    unselect_tabs();
    $('#msc_tab').removeClass('other_tab');
    $('#msc_content').css('display', 'block');
  });
  $('#opps_tab').click(function() {
    unselect_tabs();
    $('#opps_tab').removeClass('other_tab');
    $('#opps_content').css('display', 'block');
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
