/**
 * Created by borga on 13/06/16.
 */
starbeats.factory('CreateEventService', function ($http, $rootScope) {
    var CreateEventService = {};

    CreateEventService.createEvent = function (event) {
        return $http({
            method: 'POST',
            url: $rootScope.API + "event/",
            data: event,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            dataType: 'json'
        });
    };
    return CreateEventService;
});