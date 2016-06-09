/**
 * Created by borga on 08/06/16.
 */

starbeats.controller('CreateArtistController',
    function CreateArtistController($scope, $http, $rootScope, CreateArtistService, Upload){
        $scope.reveal = false;

        $scope.createArtist = function(artist, createArtistForm) {
            console.log(artist);
            if(createArtistForm.$valid) {
                CreateArtistService.createArtist(artist).then(function (response) {
                    console.log(response);
                }, function (response) {
                    console.log(response);
                });
            }
        };
        $scope.upload = function (file) {
            Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file, 'username': $scope.username}
            }).then(function (resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });
        };
    }
);

