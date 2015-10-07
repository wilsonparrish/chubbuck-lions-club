(function () {
    "use strict";

    angular.module('app')
        .controller('forumController', function ($scope) {
            $scope.newTeam = {};
            $scope.registerTeam = function(){
                $scope.newTeam.division = $scope.newTeam.division._id;
                $scope.newTeam.wins = 0;
                $scope.newTeam.losses = 0;
                $scope.newTeam.ptsScored = 0;
                $scope.newTeam.ptsAgainst = 0; 
                teamDataService.registerTeam($scope.newTeam);
                $scope.newTeam = {};
            };
            $scope.divisions = getDivisions.data;
            // console.log($scope.divisions);
        });

} ());