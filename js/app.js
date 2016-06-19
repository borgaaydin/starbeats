/**
 * Created by borga on 05/06/16.
 */
'use strict';

var starbeats = angular.module('starbeats', [])
    .run(function ($rootScope) {
        $rootScope.API = "http://localhost/";
    });

var starbeats_artist = angular.module('starbeats_artist', ['starbeats', 'ngFileUpload', 'ngImgCrop']);

var starbeats_event = angular.module('starbeats_event', ['starbeats', 'ngFileUpload', 'ngImgCrop', 'datetimepicker'])
    .config(['datetimepickerProvider',
    function (datetimepickerProvider) {
        datetimepickerProvider.setOptions({
            format: 'DD/MM/YYYY',
            minDate: moment().add(1,'days')
        });
    }
]);