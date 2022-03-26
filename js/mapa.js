function initMap() {
  const directionsRenderer = new google.maps.DirectionsRenderer();
  const directionsService = new google.maps.DirectionsService();
  var coord = { lat: 10.141323, lng: -84.194666 };
  const map = new google.maps.Map(document.getElementById("mapa"), {
    zoom: 5,
    center: coord,
    disableDefaultUI: true,
  });

  new google.maps.Marker({
    position: coord,
    map: map
  });

  directionsRenderer.setMap(map);
  calculateAndDisplayRoute(directionsService, directionsRenderer);

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);
  });
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  const start = { lat: 9.995379, lng: -84.252260 };
  const end = { lat: 10.141323, lng: -84.194666 };

  directionsService
    .route({
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + status));
}