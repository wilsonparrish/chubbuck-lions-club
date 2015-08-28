(function () {
    "use strict";

    angular.module('app')
        .controller('scoresPageController', function ($scope, $timeout, teamDataService) {
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
                    { field: 'teamname', displayName: 'Team Name', width: '15%'},
                    { field: 'company', displayName: 'Company/Captain', width: '15%' },
                    { field: 'division', displayName: 'Division', width: '6%'},
                    { field: 'companynum', displayName: 'Contact #', width: '10%' },
                    { field: 'email', displayName: 'Email', width: '15%' },
                    { field: 'member1', displayName: 'Player 1', width: '12%' },
                    { field: 'member2', displayName: 'Player 2', width: '12%' },
                    { field: 'member3', displayName: 'Player 3', width: '12%' },
                    { field: 'member4', displayName: 'Player 4', width: '12%' },
                    { field: 'shirtsize1', displayName: 'Shirt Size 1', width: '4%' },
                    { field: 'shirtsize2', displayName: 'Shirt Size 2', width: '4%' },
                    { field: 'shirtsize3', displayName: 'Shirt Size 3', width: '4%' },
                    { field: 'shirtsize4', displayName: 'Shirt Size 4', width: '4%' },
                    { field: 'playerlemail', displayName: 'P1 Email', width: '15%' },
                    { field: 'player2email', displayName: 'P2 Email', width: '15%' },
                    { field: 'player3email', displayName: 'P3 Email', width: '15%' },
                    { field: 'player4email', displayName: 'P4 Email', width: '15%' },
                    { field: 'creationdate', displayName: 'Creation Date', width: '15%' }
                ]
            };
            $timeout(function(){
                console.log($scope.gridApi)}, 1000);
        });
        

} ());