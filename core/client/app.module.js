/// <reference path="../../typings/angularjs/angular.d.ts"/>
(function () {
    "use strict";

    angular.module('app', [
        'ui.grid',
        'ui.grid.edit',
        'ui.router',
        'ngSanitize',
        'ngCookies',
        'firebase'
    ]).constant('fb', {
        url: "https://chubbuck-lions-forum.firebaseio.com/"
    });

} ());