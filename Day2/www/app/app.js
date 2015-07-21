// Create a module first.
// add ngRoute dependency if using $routeProvider
angular.module('day2', [
  'ngRoute'
])
  // followed by a controller.
  // inject $scope
  // don't add $scope to html file. The file should know it is coming from $scope.
  .controller('mainController', function($scope) {
    $scope.greeting = "Hello";
  })
  // define config phase.
  .config(function($routeProvider){
    // make sure to create an object inside the when call.
    $routeProvider
      .when('/', {
        //template: 'This is where my menu will live.'
        templateUrl: 'app/menu/menu.html'
      })
      //good habit to provide otherwise.
      .otherwise({
        redirectTo: '/'
      })
    // end $routeProvider
    ;
  })

// leave it at the end to not forget it.
;
