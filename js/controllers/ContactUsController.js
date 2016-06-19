/**
 * Created by borga on 14/06/16.
 */

starbeats.controller('ContactUsController',
    function ContactUsController($scope){
        $scope.createArtist = function(message, contactUsForm) {
            console.log(message);
            if(contactUsForm.$valid) {
                ContactUsService.sendMessage(message).then(function (response) {
                    console.log(response);
                }, function (response) {
                    console.log(response);
                });
            }
        };
    }
);