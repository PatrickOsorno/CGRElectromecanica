function iniciarMapa() {
  var coord = { lat: 10.141323, lng: -84.194666 };
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer();
  var map = new google.maps.Map(document.getElementById('mapa'), {
    zoom: 15,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });

  directionsRenderer.setMap(map);
  calcularYMostarRuta(directionsService, directionsRenderer);
}

function calcularYMostarRuta(directionsService, directionsRenderer) {
  directionsService
    .route({
      origin: { lat: 9.995415, lng: 9.995415 },
      destination: { lat: 10.141323, lng: -84.194666 },
      travelMode: 'DRIVING'
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + e));
}