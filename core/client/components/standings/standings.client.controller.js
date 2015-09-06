(function () {
    "use strict";

    angular.module('app')
        .controller('standingsController', function ($scope, teamDataService, getDivisions) {
			$scope.divisions = getDivisions.data;
			console.log($scope.divisions);
                        
            $scope.generateStandings = function(){
                $scope.sortedTeams = $scope.selectedDivision.teamsIdArray; //maybe use _.sortBy somehow?
                console.log($scope.sortedTeams);
                for (var i = 0; i < $scope.sortedTeams.length; i++){ //this sorts by wins, losses, then ptsAgainst
                    var team = $scope.sortedTeams[i];
                    team.standingHack = (team.wins * 1000) - (team.losses * 1000) - team.ptsAgainst;
                    console.log("team " + team.teamname, team.standingHack);
                }
            };
        });

} ());