/**
 * Created by matthewclamp on 3/31/15.
 */
var app = angular.module("HypeApp", ["ngRoute"]);

app.config(function ($routeProvider, $httpProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'views/home/home.html'
        })
        .when('/homepage', {
            templateUrl: 'views/home/homepage.html'
        })
        .when('/login', {
            templateUrl: 'views/login/login.html',
            controller: 'LoginCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register/register.html',
            controller: 'RegisterCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about/about.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
});