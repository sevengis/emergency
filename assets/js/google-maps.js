'use strict';
/*****************************************************
 ** google-maps.js
 ** 
 ** Javascript for Google Map Config.
 ** Developer: Ranpariya - The Development Lab - India
 *****************************************************/
$(document).ready(function() {

  function initMap() {
    var map = new google.maps.Map(document.getElementById('cluster-map'), {
        zoom: 3,
        center: {lat: -28.024, lng: 140.887}
      }),
      labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    /**************
     * Cluster Map
     **************/
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
          position: location,
          label: labels[i % labels.length]
        });
      }),
      markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    /*************
     * Styled Map
     *************/
    var styledMapType = new google.maps.StyledMapType([
      {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
      {
        featureType: 'administrative',
        elementType: 'geometry.stroke',
        stylers: [{color: '#c9b2a6'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'geometry.stroke',
        stylers: [{color: '#dcd2be'}]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{color: '#ae9e90'}]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#93817c'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{color: '#a5b076'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#447530'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#f5f1e6'}]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [{color: '#fdfcf8'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#f8c967'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#e9bc62'}]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry',
        stylers: [{color: '#e98d58'}]
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [{color: '#db8555'}]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{color: '#806b63'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.fill',
        stylers: [{color: '#8f7d77'}]
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#ebe3cd'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{color: '#dfd2ae'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [{color: '#b9d3c2'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#92998d'}]
      }
    ],{name: 'Styled Map'});
    var styledmap = new google.maps.Map(document.getElementById('styled-map'), {
      center: {lat: 55.647, lng: 37.581},
      zoom: 11,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
            'styled_map']
        }
    });
    styledmap.mapTypes.set('styled_map', styledMapType);
    styledmap.setMapTypeId('styled_map');

    /**************
     * Traffic Map
     **************/
    var map = new google.maps.Map(document.getElementById('traffic-map'), {
        zoom: 13,
        center: {lat: 34.04924594193164, lng: -118.24104309082031}
      }),
      trafficLayer = new google.maps.TrafficLayer();
      trafficLayer.setMap(map);

    /**********
     * KML Map
     **********/
    var map = new google.maps.Map(document.getElementById('kml-map'), {
        zoom: 11,
        center: {lat: 41.876, lng: -87.624}
      }),
      ctaLayer = new google.maps.KmlLayer({
        url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
        map: map
      });

    /***********
     * Night Map
     ***********/
    var map = new google.maps.Map(document.getElementById('night-map'), {
      center: {lat: 40.674, lng: -73.945},
      zoom: 12,
      styles: [
        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
        {
          featureType: 'administrative.locality',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#263c3f'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#6b9a76'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#38414e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry.stroke',
          stylers: [{color: '#212a37'}]
        },
        {
          featureType: 'road',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9ca5b3'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#746855'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry.stroke',
          stylers: [{color: '#1f2835'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#f3d19c'}]
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [{color: '#2f3948'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'labels.text.fill',
          stylers: [{color: '#d59563'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#17263c'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#515c6d'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.stroke',
          stylers: [{color: '#17263c'}]
        }
      ]
    });
  }

  /*********************
   * Cluster Map Option
   *********************/
  var locations = [
    {lat: -31.563910, lng: 147.154312},
    {lat: -33.718234, lng: 150.363181},
    {lat: -33.727111, lng: 150.371124},
    {lat: -33.848588, lng: 151.209834},
    {lat: -33.851702, lng: 151.216968},
    {lat: -34.671264, lng: 150.863657},
    {lat: -35.304724, lng: 148.662905},
    {lat: -36.817685, lng: 175.699196},
    {lat: -36.828611, lng: 175.790222},
    {lat: -37.750000, lng: 145.116667},
    {lat: -37.759859, lng: 145.128708},
    {lat: -37.765015, lng: 145.133858},
    {lat: -37.770104, lng: 145.143299},
    {lat: -37.773700, lng: 145.145187},
    {lat: -37.774785, lng: 145.137978},
    {lat: -37.819616, lng: 144.968119},
    {lat: -38.330766, lng: 144.695692},
    {lat: -39.927193, lng: 175.053218},
    {lat: -41.330162, lng: 174.865694},
    {lat: -42.734358, lng: 147.439506},
    {lat: -42.734358, lng: 147.501315},
    {lat: -42.735258, lng: 147.438000},
    {lat: -43.999792, lng: 170.463352}
  ]

  /***********
   * Road Map
   ***********/
  var apiKey = 'AIzaSyDAXSWhz-HI_CDj5OuSYNM_81_n5sbCgek',
    map,
    drawingManager,
    placeIdArray = [],
    polylines = [],
    snappedCoordinates = [];

  function initialize() {
    var mapOptions = {
      zoom: 17,
      center: {lat: -33.8667, lng: 151.1955}
    };
    map = new google.maps.Map(document.getElementById('road-map'), mapOptions);
    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(
      document.getElementById('bar'));
    var autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autoc'));
    autocomplete.bindTo('bounds', map);
    autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
      if(place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17);
      }
    });
    drawingManager = new google.maps.drawing.DrawingManager({
      drawingMode: google.maps.drawing.OverlayType.POLYLINE,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.POLYLINE
        ]
      },
      polylineOptions: {
        strokeColor: '#696969',
        strokeWeight: 2
      }
    });
    drawingManager.setMap(map);
    drawingManager.addListener('polylinecomplete', function(poly) {
      var path = poly.getPath();
      polylines.push(poly);
      placeIdArray = [];
      runSnapToRoad(path);
    });
    $('#clear').on("click", function(ev){
      for(var i = 0; i < polylines.length; ++i) {
        polylines[i].setMap(null);
      }
      polylines = [];
      ev.preventDefault();
      return false;
    });
  }

  /*********************
   * Run Snapped To Road
   *********************/
  function runSnapToRoad(path) {
    var pathValues = [];
    for(var i = 0; i < path.getLength(); i++) {
      pathValues.push(path.getAt(i).toUrlValue());
    }
    $.get('https://roads.googleapis.com/v1/snapToRoads', {
      interpolate: true,
      key: apiKey,
      path: pathValues.join('|')
    }, function(data) {
      processSnapToRoadResponse(data);
      drawSnappedPolyline();
      getAndDrawSpeedLimits();
    });
  }

  /**********************************
   * Process Snapped To Road Response
   **********************************/
  function processSnapToRoadResponse(data) {
    snappedCoordinates = [];
    placeIdArray = [];
    for(var i = 0; i < data.snappedPoints.length; i++) {
      var latlng = new google.maps.LatLng(
        data.snappedPoints[i].location.latitude,
        data.snappedPoints[i].location.longitude);
      snappedCoordinates.push(latlng);
      placeIdArray.push(data.snappedPoints[i].placeId);
    }
  }

  /*************************
   * Draw Snapped Poly Line
   *************************/
  function drawSnappedPolyline() {
    var snappedPolyline = new google.maps.Polyline({
      path: snappedCoordinates,
      strokeColor: 'black',
      strokeWeight: 3
    });
    snappedPolyline.setMap(map);
    polylines.push(snappedPolyline);
  }

  /******************
   * Get Speed Limits
   ******************/
  function getAndDrawSpeedLimits() {
    for(var i = 0; i <= placeIdArray.length / 100; i++) {
      var start = i * 100,
      end = Math.min((i + 1) * 100 - 1, placeIdArray.length);
      drawSpeedLimits(start, end);
    }
  }

  /*******************
   * Draw Speed Limits
   *******************/
  function drawSpeedLimits(start, end) {
    var placeIdQuery = '';
    for(var i = start; i < end; i++) {
      placeIdQuery += '&placeId=' + placeIdArray[i];
    }
    $.get('https://roads.googleapis.com/v1/speedLimits',
      'key=' + apiKey + placeIdQuery,
      function(speedData) {
        processSpeedLimitResponse(speedData, start);
      }
    );
  }

  /**********************
   * Process Speed Limits
   **********************/
  function processSpeedLimitResponse(speedData, start) {
    var end = start + speedData.speedLimits.length;
    for(var i = 0; i < speedData.speedLimits.length - 1; i++) {
      var speedLimit = speedData.speedLimits[i].speedLimit,
        color = getColorForSpeed(speedLimit),
        coords = snappedCoordinates.slice(start + i, start + i + 2),
        snappedPolyline = new google.maps.Polyline({
          path: coords,
          strokeColor: color,
          strokeWeight: 6
        });
      snappedPolyline.setMap(map);
      polylines.push(snappedPolyline);
    }
  }

  /**********************
   * Get Color For Speed
   **********************/
  function getColorForSpeed(speed_kph) {
    if(speed_kph <= 40) {
      return 'purple';
    }
    if(speed_kph <= 50) {
      return 'blue';
    }
    if(speed_kph <= 60) {
      return 'green';
    }
    if(speed_kph <= 80) {
      return 'yellow';
    }
    if(speed_kph <= 100) {
      return 'orange';
    }
    return 'red';
  }

  setTimeout(function(){ initialize(); initMap(); }, 2000);
});