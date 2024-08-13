function initMap() {
    const location = { lat: 42.8615772, lng: 74.6007398 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 32,
        center: location,
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });

    // Fetch the map style data and apply it to the map
    fetch("/js/map-style.json")
        .then(response => response.json())
        .then(data => {
            map.setOptions({ styles: data });
        })
        .catch(error => {
            console.error("Error loading map style:", error);
        });
}

initMap();