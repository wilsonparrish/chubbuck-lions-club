(function () {
    "use strict";

    angular.module('app')
        .factory("Auth", ["$firebaseAuth",
            function ($firebaseAuth) {
                var ref = new Firebase("https://chubbuck-lions-forum.firebaseio.com");
                return $firebaseAuth(ref);
            }
        ]);

} ());