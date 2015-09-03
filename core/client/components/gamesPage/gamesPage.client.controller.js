(function () {
    "use strict";

    angular.module('app')
        .controller('gamesPageController', function ($scope, $timeout, teamDataService) {
            $scope.teamData = teamDataService.teamData;
            $scope.scoresGridOptions = { 
                onRegisterApi: function(gridApi){
                    $scope.gridApi = gridApi;
                    gridApi.edit.on.afterCellEdit($scope, function(row, field, val){
                        console.log("cell edited!");
                        console.log(row);
                        console.log(field);
                        console.log(val);
                    });
                },
                data: 'teamData',
                height: '20px',
                columnDefs: [
                    { field: 'division', displayName: 'Division', width: '15%'},
                    { field: 'team1', displayName: 'Team 1', width: '15%' },
                    { field: 'team1Score', displayName: 'Team 1 Score', width: '6%'},
                    { field: 'team2', displayName: 'Team 2', width: '15%' },
                    { field: 'team2Score', displayName: 'Team 2 Score', width: '6%'},
                    { field: 'court', displayName: 'Court', width: '12%' },
                    { field: 'official', displayName: 'Official', width: '12%' }
                ]
            };
            $timeout(function(){
                console.log($scope.gridApi)}, 1000);
        });
        

} ());