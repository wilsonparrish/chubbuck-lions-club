(function () {
    "use strict";

    angular.module('app')
        .controller('signup3on3Controller', function ($scope, teamDataService) {
            $scope.newTeam = {};
            $scope.registerTeam = function(){
                teamDataService.registerTeam($scope.newTeam);
            };
        });


} ());