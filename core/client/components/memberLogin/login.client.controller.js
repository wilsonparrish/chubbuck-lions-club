(function () {
    "use strict";

    angular.module('app')
        .controller('loginController', function ($scope) {
            $scope.newUser = {};
            $scope.registerUser = function(){
                // loginService.createUser($scope.newUser);
                $scope.newUser = {};
            };
            // console.log($scope.divisions);
        });

} ());