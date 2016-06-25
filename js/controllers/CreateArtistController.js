/**
 * Created by borga on 08/06/16.
 */

starbeats_artist.controller('CreateArtistController',
    function CreateArtistController($scope, $http, $rootScope, CreateArtistService, Upload){

        Object.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };
        $scope.reveal = false;

        $scope.number = 10;
        $scope.getNumber = function(num) {
            return new Array(num);
        }

        $scope.createArtist = function(artist, createArtistForm) {
            console.log(artist);
            console.log(croppedDataUrl);

            if(createArtistForm.$valid) {
                CreateArtistService.createArtist(artist).then(function (response) {
                    console.log(response);
                }, function (response) {
                    console.log(response);
                });
            }
        };
        
        $scope.upload = function (file) {
            console.log(croppedDataUrl);
            Upload.upload({
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file, 'username': $scope.username}
            }).then(function (resp) {
                console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
            }, function (resp) {
                console.log('Error status: ' + resp.status);
            });
        };

        $scope.uploadFiles = function (files) {
            $scope.number = $scope.number - Object.size(files);
            $scope.files = files;
            console.log(files);
            if (files && files.length) {
                Upload.upload({
                    url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                    data: {
                        files: files
                    }
                }).then(function (response) {
                    $timeout(function () {
                        $scope.result = response.data;
                    });
                }, function (response) {
                    if (response.status > 0) {
                        $scope.errorMsg = response.status + ': ' + response.data;
                    }
                });
            }
        };
    }
);

