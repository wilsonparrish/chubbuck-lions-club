(function () {
    "use strict";

    angular.module('app')
        .controller('loginController', function ($scope, Auth, $cookies) {

            $scope.auth = Auth;
            // $scope.match = false;
            $scope.newUser = {};
            $scope.user = {};

            $scope.login = function () {
                $scope.authData = null;
                $scope.error = null;

                Auth.$authWithPassword({
                    email: $scope.user.email,
                    password: $scope.user.password
                }, function (error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                    }
                })
            };
            ////
            
            $scope.createUser = function () {
                $scope.message = null;
                $scope.error = null;

                Auth.$createUser({
                    email: $scope.newUser.email,
                    password: $scope.newUser.password
                }).then(function (userData) {
                    console.log("User created with uid: " + userData.uid);
                    $scope.newUser = {};
                }).catch(function (error) {
                    $scope.error = error;
                    console.log("error");
                });
            };
            ////
                
            // any time auth status updates, add the user data to scope
            $scope.auth.$onAuth(function (authData) {
                $scope.authData = authData;
            });
            ////
            
            $scope.removeUser = function () {
                $scope.error = null;

                Auth.$removeUser({
                    email: $scope.email,
                    password: $scope.password
                }).then(function () {
                    console.log("User removed");
                }).catch(function (error) {
                    $scope.error = error;
                    console.log("error");
                });
            };
        });
        ////

} ());