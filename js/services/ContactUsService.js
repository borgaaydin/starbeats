/**
 * Created by borga on 14/06/16.
 */

starbeats.factory('ContactUsService', function ($http, $rootScope) {
    var ContactUsService = {};

    ContactUsService.sendMessage = function (message) {
        return $http({
            method: 'POST',
            url: $rootScope.API + "contactUs/",
            data: message,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: 'json'
        });
    };

    return ContactUsService;
});