/**
 * Created by borga on 29/05/16.
 */
function initMap() {
    var underclub = {lat: 41.3782295, lng: 2.144849};
    var mojito = {lat: 41.379706, lng: 2.1730703};
    var razzmatazz = {lat: 41.397631, lng: 2.1897349};

    var customMapType = new google.maps.StyledMapType([
        {
            stylers: [
                {hue: '#241c37'},
                {gamma: 0.1},
                {lightness: -10},
                {saturation: 4},
            ]
        },
        {
            elementType: 'labels',
            stylers: [
                {visibility: 'on'},
                {hue: '#241c37'},
                {lightness: 10}
            ]
        },
        {
            featureType: 'water',
            stylers: [{color: '#0b0912'}]
        }
    ], {
        name: 'Custom Style'
    });
    var customMapTypeId = 'custom_style';

    var iconBase = '../img/mapsIcons/';
    var icons = {
        default: {
            icon: iconBase + 'Location_default.png'
        },
        active: {
            icon: iconBase + 'Location_active.png'
        },
        list: {
            icon: iconBase + 'Location_Starbeats-list.png'
        }
    };

    var contentString =
        '<div class="mapsInfoWindow">'+
            '<h3 style="color: #000;">UNDERCLUB<br>SAM PAGANINI</h3>'+
            '<div id="bodyContent">'+
                '<p style="color: #000;">Saturday, March 12th</p>'+
                '<p style="color: #000;">23:59 - 06:00</p>'+
                '<p style="color: #000;">at <a href="#">UNDERCLUB</a> </p>'+
            '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker1 = new google.maps.Marker({
        position: underclub,
        title:"Underclub",
        icon: icons.default.icon
    });

    var marker2 = new google.maps.Marker({
        position: mojito,
        title:"Mojito",
        icon: icons.active.icon
    });

    var marker3 = new google.maps.Marker({
        position: razzmatazz,
        title:"Razzmatazz",
        icon: icons.list.icon
    });

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: underclub,  // Barcelona.
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        },
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl:true
    });

    // To add the marker to the map, call setMap();
    marker1.setMap(map);
    marker1.addListener('click', function() {
        infowindow.open(map, marker1);
    });
    
    marker2.setMap(map);
    marker3.setMap(map);

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}