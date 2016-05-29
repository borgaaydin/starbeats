/**
 * Created by borga on 29/05/16.
 */
function initMap() {
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

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {lat: 41.3835, lng: 2.1736},  // Barcelona.
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        },
        disableDefaultUI: true,
        scrollwheel: false,
        zoomControl:true
    });

    map.mapTypes.set(customMapTypeId, customMapType);
    map.setMapTypeId(customMapTypeId);
}