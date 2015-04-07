app.controller("RegisterCtrl", function ($scope, $http, $location, $rootScope) {
    $scope.register = function (user) {
        console.log(user);
        if (user.password != user.password2 || !user.password || !user.password2) {
            $rootScope.message = "The passwords entered do not match.";
        } else {
            $http.post("/register", user)
                .success(function (response) {
                    console.log(response);
                    if (response != null) {
                        $rootScope.currentUser = response;
                        $location.url("/profile");
                    }
                });
        }
    }
});