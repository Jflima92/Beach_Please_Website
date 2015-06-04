'use strict'
angular.module('loginApp', ['ngRoute', 'ngCookies', 'auth'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  $routeProvider.
  when('/', {
    templateUrl: 'index.html',
    controller: 'mainController',
  }).
  when('/login', {
    templateUrl: 'views/secret.html',
    controller: 'loginController',
  }).
  when('/controlPanel', {
    templateUrl: 'views/panel.html',
    controller: 'panelController',
  }).
  otherwise({
    redirectTo: '/index'
  });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

}])

.controller('loginController', ['$scope', '$document','$http', '$templateCache', '$location', '$timeout', '$window', '$cookieStore', 'autentication',
    function($scope, $document, $http, $templateCache, $location, $timeout, $window, $cookieStore, autentication){
        var method = 'POST';
        var url = 'services/php/login.php';

        $scope.validate = function(user) {

            var FormData = {
                'user' : user.name,
                'password' : user.pass
            };
            $http({
                method: method,
                url: url,
                data: FormData,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                cache: $templateCache
            }).
                success(function(response) {

                  console.log(response);
                    if(response == true)
                    {
                        autentication.setUserAuthenticated(true);
                        $cookieStore.put('auth', autentication.getUserAuthenticated());
                        var url = "http://" + $window.location.host + "/controlPanel";
                        $window.location.href = url;
                    }
                }).
                error(function(response) {
                    console.log("error");
                });
            return false;
        };
    }]);
