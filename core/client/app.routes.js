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
                .state('3on3-Tournament', {
                    url: '/3on3',
                    templateUrl: 'components/3on3-Tournament/3on3.client.template.html',
                    controller: 'signup3on3Controller',
                    resolve: {
                        getDivisions: function(teamDataService){
                            return teamDataService.getDivisions();
                        }
                    }
                })
                .state('teamManagement', {
                    url: '/teamManagement',
                    templateUrl: 'components/teamManagement/teamManagement.client.template.html',
                    controller: 'teamManagementController'
                })
                .state('tournamentCreator', {
                    url: 'tournamentCreator',
                    templateUrl: 'components/tournamentCreator/tournamentCreator.client.template.html',
                    controller: 'tournamentCreatorController'
                })   
                .state('gamesPage', {
                    url: '/gamesPage',
                    templateUrl: 'components/gamesPage/gamesPage.client.template.html',
                    controller: 'gamesPageController'
                });
        });


} ());