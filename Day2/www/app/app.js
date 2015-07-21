// Create a module first.
angular.module('day2', [])
  // followed by a controller.
  // inject $scope
  // don't add $scope to html file. The file should know it is coming from $scope.
  .controller('mainController', function($scope) {
    $scope.greeting = "Hello";
  });
