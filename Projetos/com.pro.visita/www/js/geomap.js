/**
 * AppGeolocationMap
 */
var map;
var marker;
var infowindow;
var watchID;
var msg;

$(document).ready(function() {
 document.addEventListener("deviceready", onDeviceReady, false);
 // for testing in Chrome browser uncomment
 // onDeviceReady();
});

// PhoneGap is ready function
function onDeviceReady() {
 $(window).unbind();
 $(window).bind('pageshow resize orientationchange', function(e) {
  max_height();
 });
 max_height();
 google.load("maps", "3.8", {
  "callback" : map,
  other_params : "sensor=true&language=en"
 });
}

function max_height() {
 var h = $('div[data-role="header"]').outerHeight(true);
 var f = $('div[data-role="footer"]').outerHeight(true);
 var w = $(window).height();
 var c = $('div[data-role="content"]');
 var c_h = c.height();
 var c_oh = c.outerHeight(true);
 var c_new = w - h - f - c_oh + c_h;
 var total = h + f + c_oh;
 if (c_h < c.get(0).scrollHeight) {
  c.height(c.get(0).scrollHeight);
 } else {
  c.height(c_new);
 }
}

function map() {
 var latlng = new google.maps.LatLng(-24.9555, -53.4552);
 var myOptions = {
  zoom : 6,
  center : latlng,
  streetViewControl : true,
  mapTypeId : google.maps.MapTypeId.ROADMAP,
  zoomControl : true
 };
 map = new google.maps.Map(document.getElementById("map"), myOptions);

 google.maps.event.addListenerOnce(map, 'tilesloaded', function() {
  // get geoposition once
  // navigator.geolocation.getCurrentPosition(geo_success, geo_error, {
  // maximumAge: 5000, timeout: 5000, enableHighAccuracy: true });
  // watch for geoposition change
  watchID = navigator.geolocation.watchPosition(geo_success, geo_error, {
   maximumAge : 5000,
   timeout : 5000,
   enableHighAccuracy : true
  });
 });
}

function geo_error(error) {
 // comment
 alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

function geo_success(position) {
 map.setCenter(new google.maps.LatLng(position.coords.latitude,
   position.coords.longitude));
 map.setZoom(15);

 var info = ('Latitude: ' + position.coords.latitude + '
'
   + 'Longitude: ' + position.coords.longitude + '
' + 'Altitude: '
   + position.coords.altitude + '
' + 'Accuracy: '
   + position.coords.accuracy + '
' + 'Altitude Accuracy: '
   + position.coords.altitudeAccuracy + '
' + 'Heading: '
   + position.coords.heading + '
' + 'Speed: '
   + position.coords.speed + '
' + 'Timestamp: ' + new Date(
   position.timestamp));

 var point = new google.maps.LatLng(position.coords.latitude,
   position.coords.longitude);
 if (!marker) {
  // create marker
  marker = new google.maps.Marker({
   position : point,
   map : map
  });
 } else {
  // move marker to new position
  marker.setPosition(point);
 }
 if (!infowindow) {
  infowindow = new google.maps.InfoWindow({
   content : info
  });
 } else {
  infowindow.setContent(info);
 }
 google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
 });
}

// exit app
function exitFromApp(buttonIndex) {
 if (buttonIndex === 2) {
  navigator.app.exitApp();
 }
}
// showConfirm exit app
function showConfirm() {
 navigator.notification.confirm('Deseja Realmente Sair?', exitFromApp,
   'Geolocation Map', 'Cancelar,OK' // buttonLabels
 );
}