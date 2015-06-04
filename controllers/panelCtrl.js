

angular.module('ctrlApp', [
// other dependencies
'ngCookies',
'ngRoute',
'ui.bootstrap'
])

.config(['$routeProvider', function($routeProvider){

  $routeProvider.
  when('/controlPanel', {
    templateUrl: 'index.html',
    controller: 'mainController',
  }).
  when('/login', {
    templateUrl: 'views/secret.html',
    controller: 'loginController',
  }).
  otherwise({
    redirectTo: '/index'
  });

}])

.controller('panelController', ['$scope','$cookieStore', '$window',
function($scope, $cookieStore, $window){

  var authValue = $cookieStore.get('auth');
  if(!authValue)
  {
    var url = "http://" + $window.location.host + "/login";
    $window.location.href = url;
    console.log("não estás autenticado amigo");
  }

    $scope.tabs = [
{ title:'Dynamic Title 1', content:'Dynamic content 1' },
{ title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
];

  $scope.logOut = function()
{
  $cookieStore.remove('auth');
  var url = "http://" + $window.location.host + "/login";
  $window.location.href = url;
}

}]);
