//create a module and start adding dependencies.
angular.module('day3', ['ngRoute', 'menu', 'serviceExamples', 'promiseExamples', 'directiveExamples'])
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
      .when('/promises', {
        templateUrl: 'app/promiseExamples/promiseExamples.html',
        contoller: 'PromiseExamplesController',
        controllerAs: 'vm'
      })
      .when('/directives', {
        templateUrl: 'app/directiveExamples/directiveExamples.html',
        controller: 'DirectiveExamplesController',
        controllerAs: 'vm'
      })
      .otherwise ({
        redirectTo: '/'
      })
    //end routeProvider
    ;
  })
;
