var initialise = function(){
  var container = document.getElementById('main-map');
  var center = {lat: 51.451169, lng: 0.052639};
  var mainMap = new MapWrapper(container, center, 10);
  var tokyoButton = document.getElementById('tokyo-button');
  mainMap.addClickEvent();
  mainMap.addInfoWindow(center, "Welcome to Sunny Eltham!")

  var tokyo = function(){
    var tokyo = {lat: 35.689487, lng: 139.691706};
    mainMap.googleMap.setCenter(tokyo);
    mainMap.addInfoWindow(tokyo, "Tokyo");
  }

  tokyoButton.onclick = tokyo;

}



window.onload = initialise;