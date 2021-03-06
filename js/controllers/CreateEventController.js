/**
 * Created by borga on 13/06/16.
 */

starbeats_event.controller('CreateEventController',
    function CreateEventController($scope, $http, $rootScope, CreateEventService, Upload){

        $scope.event = [];
        $scope.event.artists = [''];

        $scope.logConsole = function(event, createEventForm) {
            console.log(event);
            console.log(createEventForm);
        };

        $scope.addArtist = function() {
            if($scope.event.artists.length<10) $scope.event.artists.push({name: ''});
        };
        
        $scope.removeArtist = function(ind) {
            if($scope.event.artists.length>1) $scope.event.artists.splice(ind, 1);
        };
        
        $scope.createEvent = function(event, artits, createEventForm) {
            console.log($scope.event);

            if(createEventForm.$valid) {
                CreateEventService.createEvent(event).then(function (response) {
                    console.log(response);
                }, function (response) {
                    console.log(response);
                });
            }
        };

        $scope.cropImage = function(file) {
            $scope.cropped = !$scope.cropped;
            $scope.upload(file);
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

