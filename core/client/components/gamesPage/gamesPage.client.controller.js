(function () {
    "use strict";

    angular.module('app')
        .controller('gamesPageController', function ($scope, $timeout, teamDataService, getDivisions, $state) {
            
            teamDataService.games().then(function(res){
                console.log(res);
                $scope.games = res.data;
            });
            
            $scope.divisions = getDivisions.data;
            
            $scope.gamesGridOptions = { 
                onRegisterApi: function(gridApi){
                    $scope.gridApi = gridApi;
                    gridApi.edit.on.afterCellEdit($scope, function(row, field, val){
                        console.log("cell edited!");
                        console.log(row);
                        console.log(field);
                        console.log(val);
                    });
                },
                data: 'games',
                height: '20px',
                columnDefs: [
                    { field: 'division.name', displayName: 'Division', width: '15%'},
                    { field: 'team1.name', displayName: 'Team 1', width: '15%' },
                    { field: 'team1score', displayName: 'Team 1 Score', width: '6%'},
                    { field: 'team2.name', displayName: 'Team 2', width: '15%' },
                    { field: 'team2score', displayName: 'Team 2 Score', width: '6%'},
                    { field: 'court', displayName: 'Court', width: '12%' },
                    { field: 'official', displayName: 'Official', width: '12%' }
                ]
            };
            $timeout(function(){
                console.log($scope.gridApi)}, 1000);
                
            $scope.newGame = {};
            $scope.addGame = function(){
                if ($scope.newGame.team1 === $scope.newGame.team2){
                    alert("A team cannot play against itself, duh. Fix that.");
                }
                $scope.newGame.division = $scope.newGame.division._id;
                $scope.newGame.team1.id = $scope.newGame.team1._id;
                $scope.newGame.team1.name = $scope.newGame.team1.teamname;
                $scope.newGame.team1.wins = $scope.newGame.team1.wins;
                $scope.newGame.team1.losses = $scope.newGame.team1.losses;
                $scope.newGame.team1.ptsScored = $scope.newGame.team1.ptsScored;
                $scope.newGame.team1.ptsAgainst = $scope.newGame.team1.ptsAgainst;
                $scope.newGame.team2.id = $scope.newGame.team2._id;
                $scope.newGame.team2.name = $scope.newGame.team2.teamname;
                $scope.newGame.team2.wins = $scope.newGame.team2.wins;
                $scope.newGame.team2.losses = $scope.newGame.team2.losses;
                $scope.newGame.team2.ptsScored = $scope.newGame.team2.ptsScored;
                $scope.newGame.team2.ptsAgainst = $scope.newGame.team2.ptsAgainst;
                teamDataService.addGame($scope.newGame).then(function(){
                    $scope.newGame = {};
                });
            };
        });
        

} ());