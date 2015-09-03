(function () {
    "use strict";

    angular.module('app')
        .service('teamDataService', function ($http) {

            this.registerTeam = function (newTeam) {
                console.log(newTeam);
                $http.post("/api/registerTeam", newTeam).success(function () { alert("Registration Successful") }).error(function () { alert("Registration Failed, Please contact us") });
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
            
        })

} ());