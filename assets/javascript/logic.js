$(document).on("click", ".home", function() {
  $("#top").show();
  $("#showProjects").show();

  $("#bottom").hide();
});

$("#bottom").hide();

$("#showProjects").on("click", function() {
  $("#top").hide();
  $("#showProjects").hide();

  $("#bottom").show();

  $("#magic").html(`<button type='button'
  class='btn btn-primary btn-lg btn-block home' id='dynamic'>Home</button>`);
});
