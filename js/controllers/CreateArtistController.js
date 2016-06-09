/**
 * Created by borga on 08/06/16.
 */

starbeats.controller('CreateArtistController',
    function CreateArtistController($scope, $http, $rootScope, CreateArtistService){
        $scope.createArtist = function(artist) {
            console.log(artist);
            CreateArtistService.createArtist(artist).then(function (response) {
                console.log(response);
            }, function (response) {
                console.log(response);
            });
        };

        $scope.uploadFlyer = function() {
            
        };
    }
);