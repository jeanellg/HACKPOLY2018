
var showMap = $('#show-map');

function addMarker(map, mark) // marker object {deed: " ", lat: , long};
{
  newMark = new google.maps.Marker
  ({
    map: map,
    position: mark.gps,
    title: mark.deed,
    animation: google.maps.Animation.DROP
  });
}

function drop(map, markArray)
{
  for (var i =0; i < markArray.length; i++)
  {
    setTimeout(addMarker(map, markArray[i]), i * 200);
  }
}
function initMap()
{
  var center = {lat: -8, lng: -78};
  var m1 = {deed: "opened a door for someone", gps: {lat: 37, lng: -121}};
  var m2 = {deed: "gave someone a compliment", gps: {lat:-33, lng: 151}};
  var m3 = {deed: "paid for someone's coffee", gps: {lat: 51, lng: -.012}};
  var markArray = [m1, m2, m3];
  //console.log(marks[0].gps);
  var map = new google.maps.Map(document.getElementById('map'),
  {
    zoom: 1,
    center: center
  });
  drop(map, markArray); // will this put them on map
}

<script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCb7xmy4_719uyUnLCPDoacQc2_tUlsFkI"> <!--&callback=initMap-->
  </script>


$(userhome.html).ready(intiMap(){
    $('#show-map').on('onclick',initialize)
