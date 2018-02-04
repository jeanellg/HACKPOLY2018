$( "#header-plugin" ).load( "https://vivinantony.github.io/header-plugin/", function() {
	$("a.back-to-link").attr("href", "http://blog.thelittletechie.com/2014/06/how-to-make-button-disappear-onclick.html#tlt")
});

$(document).ready(function() {
  $("#show-button").click(function () {
   $("#hide-button").show()
   $("#show-button").hide()
  });
  $("#hide-button").click(function () {
   $("#show-button").show()
   $("#hide-button").hide()
  });
 });
