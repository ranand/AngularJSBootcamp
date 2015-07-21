angular.module('controllerExamples', [])
  .controller('FirstController', function($scope, $log) {
    // $scope.firstname = "Anand";
    var vm = this;
    vm.firstname = "anand"
  })
  .controller('SecondController', function($scope) {
    // $scope.firstname = "Anand";
  })
;
