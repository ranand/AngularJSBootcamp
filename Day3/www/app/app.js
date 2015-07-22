//create a module and start adding dependencies.
angular.module('day3', ['ngRoute', 'menu', 'serviceExamples'])
  .controller('mainController', function($scope) {
    $scope.greeting = "Hello";
  })
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/menu/menu.html',
        controller: 'MenuController'
      })
      .when('/services', {
        templateUrl: 'app/serviceExamples/serviceExamples.html'
      })
      .otherwise ({
        redirectTo: '/'
      })
    //end routeProvider
    ;
  })
;
