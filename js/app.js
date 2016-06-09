/**
 * Created by borga on 05/06/16.
 */
'use strict';

var starbeats = angular.module('starbeats', ['ngFileUpload', 'ngImgCrop'])
    .run(function ($rootScope) {
        $rootScope.API = "http://localhost/";
    });
