angular.module('controllerExamples', [])
  .controller('FirstController', function($scope) {
    $scope.firstname = "Anand";
  })
  .controller('SecondController', function($scope) {
    $scope.lastname = "Ramakrishnan";
  })
;
