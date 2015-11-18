(function () {
    "use strict";

    angular.module('app')
        .service("loginService", function ($http, $q, $firebaseAuth, $firebaseObject) {
            
            var ref = new Firebase("https://chubbuck-lions-forum.firebaseio.com");
            var Auth = $firebaseAuth(ref)
            
            this.login = function (user) {
                console.log('why am i here?')
                Auth.$authWithPassword({
                    email: user.email,
                    password: user.password
                }, function (error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                    }
                })
            };
            
            this.createUser = function (newUser) {

                Auth.$createUser({
                    email: newUser.email,
                    password: newUser.password
                }).then(function (userData) {
                    console.log("User created with uid: " + userData.uid);
                }).catch(function (error) {
                    console.log("error");
                });
            };
            
            //this.removeUser = function () {
            //     $scope.error = null;

            //     Auth.$removeUser({
            //         email: $scope.email,
            //         password: $scope.password
            //     }).then(function () {
            //         console.log("User removed");
            //     }).catch(function (error) {
            //         $scope.error = error;
            //         console.log("error");
            //     });
            // };
            
        })

} ());