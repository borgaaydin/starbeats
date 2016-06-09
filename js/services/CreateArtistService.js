/**
 * Created by borga on 08/06/16.
 */
starbeats.factory('CreateArtistService', function ($http, $rootScope) {
    var CreateArtistService = {};

    CreateArtistService.createArtist = function (artist) {
        return $http({
            method: 'POST',
            url: $rootScope.API + "artist/",
            data: artist,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: 'json'
        });
    };
    
    return CreateArtistService;
});