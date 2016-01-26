(function () {
    "use strict";

    angular.module('app')
        .controller('tournamentCreatorController', function ($scope, teamDataService) {
			$scope.newDiv = {};
			$scope.createDivision = function(){
				teamDataService.createDivision($scope.newDiv);
			};
        });

} ());