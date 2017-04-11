var initialise = function(){
  var container = document.getElementById('main-map');
  var center = {lat: 51.451169, lng: 0.052639};
  var mainMap = new MapWrapper(container, center, 10);
  mainMap.addClickEvent();
  mainMap.addInfoWindow(center, "Welcome to Sunny Eltham!")
}

window.onload = initialise;