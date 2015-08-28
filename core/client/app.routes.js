(function () {
    "use strict";

    angular.module('app')
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'components/home/home.client.template.html',
                    controller: 'homeController'
                })
                .state('teamManagement', {
                    url: '/teamManagement',
                    templateUrl: 'components/teamManagement/teamManagement.client.template.html',
                    controller: 'teamManagementController'
                })
                .state('3on3-Tournament', {
                    url: '/3on3',
                    templateUrl: 'components/3on3-Tournament/3on3.client.template.html',
                    controller: 'signup3on3Controller'
                })
                .state('scoresPage', {
                    url: '/scoresPage',
                    templateUrl: 'components/scoresPage/scoresPage.client.template.html',
                    controller: 'scoresPageController'
                });
        });


} ());