(function () {
    "use strict";

    angular.module('app')
        .controller('signup3on3Controller', function ($scope, teamDataService, getDivisions) {
            $scope.newTeam = {};
            $scope.registerTeam = function(){
                $scope.newTeam.division = $scope.newTeam.division._id; 
                teamDataService.registerTeam($scope.newTeam);
            };
            $scope.divisions = getDivisions.data;
            console.log($scope.divisions);
        });

} ());