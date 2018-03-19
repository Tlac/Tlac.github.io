var mymap = L.map('mapid', {
    zoomControl: false
}).setView([43.595213, -79.648730], 18);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
}).addTo(mymap);


var InfoBox = L.control({position: 'topright'});

InfoBox.onAdd = function(map){
    var div = L.DomUtil.create('div', 'info legend');
    div.innerHTML = '<p class="Info"><big>GO Bus Platform Routing App</big><br>- Scroll to ZOOM<br>- blah blah blah</p>'
    return div;
};
InfoBox.addTo(mymap);

function onEachStation(feature, layer) {
    if (feature.properties) {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight
        });
        layer.bindPopup(feature.properties.stationName)
    }
};

function onEachPlatform(feature, layer) {
    if (feature.properties) {
        layer.bindPopup("Platform: " + String(feature.properties.platformNum));
    }
};

function highlightFeature(x) {
    var layer = x.target;
    layer.setStyle({
        weight: 7,
        color: '#000000',
        dashArray: '',
        fillOpacity: 0.8
    });
};

function resetHighlight(x) {
    StationPolys.resetStyle(x.target);
};

// STATIONS
var StationStyle = {
    "color": "#339933",
    "weight": 5,
    "opacity": 0.75
};

var StationPolys = new L.geoJson(StationPolys, {
    onEachFeature: onEachStation,
    style: StationStyle
}).addTo(mymap);

// Leaflet search
var markersLayer = new L.LayerGroup();	//layer contain searched elements
mymap.addLayer(markersLayer);
var controlSearch = new L.Control.Search({layer: markersLayer, initial: false, position:'topleft'});
mymap.addControl( controlSearch );

// populate map with markers from sample data, also formatting lat long, geojson
var pointArray = PlatformPoints.features
for(i in pointArray) {
    loc = pointArray[i].geometry.coordinates.reverse()		//position found, this needs to be checked out.
    for (differentBuses in pointArray[i].properties.busName) {
        var title = String(pointArray[i].properties.buses[differentBuses] + ' ' + pointArray[i].properties.busName[differentBuses]),	//value searched

            marker = new L.Marker(new L.latLng(loc), {title: title} );//se property searched
        marker.bindPopup(title);
        markersLayer.addLayer(marker);
    }
}

$('#textsearch').on('keyup', function(e) {
    controlSearch.searchText( e.target.value );
});
/*
// PLATFORMS
var PlatformPoints = new L.geoJson(PlatformPoints, {
    onEachFeature: onEachPlatform
}).addTo(mymap);
*/