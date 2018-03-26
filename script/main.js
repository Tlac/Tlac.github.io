// This gets the user location
navigator.geolocation.getCurrentPosition(function(location) {
    console.log("im in the function")
    // Save user location
    var userLatLng = new L.LatLng(location.coords.latitude, location.coords.longitude);

    // Set map based on the center being the user location
    var mymap = L.map('mapid', {zoomControl: false}).setView(userLatLng, 16); // old: [43.595213, -79.648730]

    // Set up tile layer
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
        attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        subdomains: 'abcd',
        id: 'mapbox.streets',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
    }).addTo(mymap);

    // Function to remove polylines
    function clearCustomPolyline() {
        for(i in mymap._layers) {
            if(mymap._layers[i].options.userRoute != undefined) {
                try {
                    mymap.removeLayer(mymap._layers[i]);
                }
                catch(e) {
                    console.log("problem with " + e + mymap._layers[i]);
                }
            }
        }
    }

    // Set up info box
    var InfoBox = L.control({position: 'bottomright'});

    InfoBox.onAdd = function(map) {
        var div = L.DomUtil.create('div', 'info legend');
        div.innerHTML = '<p class="Info"><big>Where to GO Bus Platform Routing App</big><br>- Search for your bus in the top left search bar<br>- Scroll to ZOOM</p>';
        return div;
    };
    InfoBox.addTo(mymap);

    // Bind popup to station polygon
    function onEachStation(feature, layer) {
        if (feature.properties) {
            layer.bindPopup(feature.properties.stationName + "<br>Station Webpage: <a href=" + feature.properties.url + " target='_blank'>Click here</a>");
        }
    }

    // STATIONS
    var StationStyle = {
        "color": "#339933",
        "weight": 5,
        "opacity": 0.75
    };

    var StationPolygons = new L.geoJson(StationPolys, {
        onEachFeature: onEachStation,
        style: StationStyle
    }).addTo(mymap);

    // Leaflet search
    var markersLayer = new L.LayerGroup(); //layer contain searched elements
    mymap.addLayer(markersLayer);
    var controlSearch = new L.Control.Search({
        layer: markersLayer,
        initial: false,
        position: 'topleft',
        zoom: 19,
        collapsed: false,
        hideMarkerOnCollapse: true,
        textPlaceholder: 'Bus Route...'
    });
    mymap.addControl(controlSearch);

    controlSearch.on('search:locationfound', function(event) {
        event.layer.openPopup();
        var searchLoc = new L.LatLng( event.layer._latlng.lat, event.layer._latlng.lng);
        var userLat = String(userLatLng.lat);
        var userLng = String(userLatLng.lng);
        var destinationLat = String(searchLoc.lat);
        var destinationLng = String(searchLoc.lng);
        var url = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + userLng + ',' + userLat + ';' + destinationLng + ',' + destinationLat + '?geometries=geojson&access_token=pk.eyJ1IjoidGxhYyIsImEiOiJjamYwY3N6MnYwbG4yMzNvaDlsdzY0NW03In0.cthaFUf4255KncCJn1FmRw';
        var route;
        axios.get(url).then(function (response) {
        var routedata = [response.data.routes[0].geometry.coordinates];
            routedata[0].map(function(data){
                return data.reverse();
            });
            clearCustomPolyline()
            route = L.polyline(routedata, {color: 'red', userRoute: 'userToBus'}).addTo(mymap);
            mymap.fitBounds(route.getBounds());
        });
    });

    // Custom markers
    var busIcon = new L.Icon({
        iconUrl: './images/busIcon.png',
        shadowUrl: './images/marker-shadow.png',
        iconSize: [16, 16], // size of the icon
        shadowSize: [0, 0], // size of the shadow
        iconAnchor: [8, 8], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0], // the same for the shadow
        popupAnchor: [0, -5] // point from which the popup should open relative to the iconAnchor
    });

    var userIcon = new L.Icon({
        iconUrl: './images/userIcon-blue.svg',
        shadowUrl: './images/userIcon.svg',
        iconSize: [26, 26], // size of the icon
        shadowSize: [0, 0], // size of the shadow
        iconAnchor: [0, 13], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 0], // the same for the shadow
        popupAnchor: [13, -7] // point from which the popup should open relative to the iconAnchor
    });

    // populate map with markers from sample data, also formatting lat long, geojson
    var pointArray = PlatformPoints.features;
    for (var i in pointArray) {
        var title = 'Platform Number: ' + String(pointArray[i].properties.platformNum);
        var searchTerm = pointArray[i].properties.area + ' ';
        loc = pointArray[i].geometry.coordinates.reverse(); //position found, this needs to be checked out.
        for (var differentBuses in pointArray[i].properties.busName) {
            title += '<br> Buses: ' + pointArray[i].properties.buses[differentBuses] + ' ' + pointArray[i].properties.busName[differentBuses]; //value searched
            searchTerm += pointArray[i].properties.buses[differentBuses] + ' ' + pointArray[i].properties.busName[differentBuses] + ' ';
        }
        marker = new L.Marker(new L.latLng(loc), {
            title: searchTerm,
            icon: busIcon
        }); //se property searched
        marker.bindPopup(title);
        markersLayer.addLayer(marker);
    }

    $('#textsearch').on('keyup', function(e) {
        controlSearch.searchText(e.target.value);
    });

    // Adding user icon based on geolocation
    var userMarker = new L.Marker(userLatLng, {icon: userIcon}).addTo(mymap);
});
