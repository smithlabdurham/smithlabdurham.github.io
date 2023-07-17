"use strict";

$(document).ready(function() {
  $("#team_content").css("display", "none");
  $("#masters_content").css("display", "none");
  $("#phd_content").css("display", "none");
  $("#opportunities_content").css("display", "none");
  $("#teaching_content").css("display", "none");
  $("#software_content").css("display", "none");

  function select_tab(id) {
    unselect_tabs();
    $("#" + id + "_content").css("display", "block");
    $("#" + id + "_tab").removeClass("other_tab");
    let prefix = "";
    switch(id) {
      case "phd": prefix = "PhD Opportunities"; break;
      case "masters": prefix = "Masters' by Research"; break;
      case "team": prefix = "Group members"; break;
      default: prefix =  id.charAt(0).toUpperCase() + id.slice(1);
    }
    document.title = prefix == "" ? "Smith Lab, Durham University" :
    (prefix + " | Smith Lab, Durham University")
    location.hash = "#!" + id;
  }

  function unselect_tab(id) {
    $("#" + id + "_content").css("display", "none");
    $("#" + id + "_tab").addClass("other_tab");
  }

  function unselect_tabs() {
    unselect_tab("research");
    unselect_tab("teaching");
    unselect_tab("team");
    unselect_tab("masters");
    unselect_tab("phd");
    unselect_tab("opportunities");
    unselect_tab("software");
  }

  $("#research_tab").click(function() { select_tab("research")});
  $("#team_tab").click(function() {select_tab("team")});
  $("#masters_tab").click(function() {select_tab("masters")});
  $("#phd_tab").click(function() {select_tab("phd")});
  $("#opportunities_tab").click(function() {select_tab("opportunities")});
  $("#teaching_tab").click(function() {select_tab("teaching")});
  $("#software_tab").click(function() {select_tab("software")});

  if (location.hash) {
    select_tab(location.hash.replace(/#!?/, "").toLowerCase());
  }

});
