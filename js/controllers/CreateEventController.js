/**
 * Created by borga on 13/06/16.
 */

starbeats.controller('CreateEventController',
    function CreateEventController($scope, $http, $rootScope, CreateEventService, Upload){
        $scope.createEvent = function(artist, createEventForm) {
            console.log($scope.event);

            if(createEventForm.$valid) {
                CreateEventService.createEvent(event).then(function (response) {
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

