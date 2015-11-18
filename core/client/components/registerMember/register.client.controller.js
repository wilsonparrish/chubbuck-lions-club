(function () {
    "use strict";

    angular.module('app')
        .controller('registerController', function ($scope, loginService, $firebaseAuth) {
            
            var ref = new Firebase("https://chubbuck-lions-forum.firebaseio.com");
            var Auth = $firebaseAuth(ref);
            
            $scope.auth = Auth;                      
            // $scope.match = false;
            $scope.newUser = {};
            $scope.user = {};

            $scope.login = function(){
                loginService.login($scope.user);
                $scope.user= {};
            };
            
            $scope.createUser = function(){
                loginService.createUser($scope.newUser);
                $scope.newUser = {};
            };
                
            // any time auth status updates, add the user data to scope
            $scope.auth.$onAuth(function (authData) {
                $scope.authData = authData;
                console.log($scope.authData);
            });
            
            // $scope.removeUser = function(){
                
            // }
        });

} ());