(function () {
    "use strict";

    angular.module('app')
        .service('teamDataService', function ($http, $q) {

            var deferred = $q.defer();

            this.registerTeam = function (newTeam) {
                console.log(newTeam);
                $http.post("/api/registerTeam", newTeam)
                .success(function () { alert("Registration Successful") })
                .error(function () { alert("Registration Failed, Please contact us") });
            };

            this.teamData = function () {
                return $http.get("/api/teams").error(function (err) {
                    return err;
                });
            };
            
            this.getDivisions = function () {
                return $http.get("/api/divisions").error(function (err){
                    return err;
                })  
            };
            
            this.createDivision = function (newDiv) {
                console.log(newDiv);
                $http.post("/api/createDivision", newDiv)
                .success(function(){ console.log("successfully created div")})
                .error(function(){ console.log("error while attempting to create div")});  
            };
            
            this.addGame = function (newGame) {
                console.log(newGame);
                $http.post("/api/addGame", newGame)
                .success(function(){ 
                    console.log("successfully added game")
                    deferred.resolve();
                    })
                .error(function(){
                    console.log("error while attempting to add game")
                    deferred.reject();
                    });
                return deferred.promise;  
            };
            
            this.games = function () {
                return $http.get("/api/games").error(function (err){
                    return err;
                })
            }
            
        })

} ());