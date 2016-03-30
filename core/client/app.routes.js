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
                    .state('sightAndHearing', {
                    url: '/SandH',
                    templateUrl: 'components/sightAndHearing/sightAndHearingTemplate.html',
                    controller: 'sightAndHearingController'
                })
                
                //Tournament management application 
                .state('3on3-Tournament', {
                    url: '/3on3',
                    templateUrl: 'parrish3-on-3/components/3on3-Tournament/3on3.client.template.html',
                    controller: 'signup3on3Controller',
                    resolve: {
                        getDivisions: function(teamDataService){
                            return teamDataService.getDivisions();
                        }
                    }
                })
                .state('3on3-ThankYou', {
                    url: '/3on3ty',
                    templateUrl: 'parrish3-on-3/components/3on3-Tournament/3on3thankYou.client.template.html',
                    controller: 'signup3on3Controller'
                })
                .state('teamManagement', {
                    url: '/teamManagement',
                    templateUrl: 'parrish3-on-3/components/teamManagement/teamManagement.client.template.html',
                    controller: 'teamManagementController'
                })
                .state('tournamentCreator', {
                    url: '/tournamentCreator',
                    templateUrl: 'parrish3-on-3/components/tournamentCreator/tournamentCreator.client.template.html',
                    controller: 'tournamentCreatorController'
                })   
                .state('gamesPage', {
                    url: '/gamesPage',
                    templateUrl: 'parrish3-on-3/components/gamesPage/gamesPage.client.template.html',
                    controller: 'gamesPageController',
                    resolve: {
                        getDivisions: function(teamDataService){
                            return teamDataService.getDivisions();
                        }
                    }
                })
                .state('standings', {
                    url: '/standings',
                    templateUrl: 'parrish3-on-3/components/standings/standings.client.template.html',
                    controller: 'standingsController',
                    resolve: {
                        getDivisions: function(teamDataService){
                            return teamDataService.getDivisions();
                        }
                    }
                })
                
                //Member login/register routes
                .state('login', {
                    url: '/login',
                    templateUrl: 'components/memberLogin/login.client.template.html',
                    controller: 'loginController'                
                })
                .state('register', {
                    url: '/register',
                    templateUrl: 'components/registerMember/register.client.template.html',
                    controller: 'registerController'                
                })
                
                //Member forum routes
                .state('forum', {
                    url: '/forum',
                    templateUrl: 'components/forum/forum.client.template.html',
                    controller: 'forumController'                
                })
                .state('forum.thread', {
                    url: '/forum/:id',
                    templateUrl:'',
                    controller:''                   
                });
        });


} ());