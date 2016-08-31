/**
 * Created by borga on 31/08/16.
 */

starbeats.factory('AuthService', function ($http, $rootScope) {
    var AuthService = {};

    AuthService.sendMessage = function (message) {
        return $http({
            method: 'POST',
            url: $rootScope.API + "auth/",
            data: message,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: 'json'
        });
    };

    return AuthService;
});