export function getCafes(location) {
    var currentLocation = new google.maps.LatLng(location);
  
    map = new google.maps.Map(document.getElementById('map'), {
        center: currentLocation,
        zoom: 15
      });
  
    var request = {
      location: currentLocation,
      radius: '500',
      type: ['cafe']
    };
  
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
    console.log(service);
  }
  
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        createMarker(results[i]);
      }
    }
  }