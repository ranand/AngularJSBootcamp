angular.module('watchExamples', [])
  .controller('WatchExamplesController', function($scope, $log) {
    var vm = this;
    // $scope.$watch('vm.person.firstname', function(newValue, oldValue) {
    //   $log.log("First name has changed from: " + oldValue + " to: " + newValue);
    //   $log.log("First name is: " + vm.person.firstname);
    // });
    //
    // $scope.$watch('vm.person.zipcode', function(newValue, oldValue) {
    //   $log.log("Zipcode has changed from: " + oldValue + " to: " + newValue);
    //   $log.log("Zipcode is: " + vm.person.zipcode);
    // });

    // watch both name. throw an expression in there.
    // $scope.$watch('vm.person.firstname + vm.person.lastname', function(newValue, oldValue) {
    //   $log.log("First name has changed from: " + oldValue + " to: " + newValue);
    // });

    //watch a group of properties.
    // $scope.$watchGroup(['vm.person.firstname', 'vm.person.lastname'], function(newValue, oldValue) {
    //   $log.log("Name name has changed from: ", oldValue, newValue);
    // });

    //watch anything
    // deep watch by using true.
    // $scope.$watch('vm.person', function(newValue, oldValue) {
    //   $log.log("Object has changed from: ", vm.person);
    // }, true);

    //watchCollection
    // $scope.$watchCollection('vm.person', function(newValue, oldValue) {
    //   $log.log("Object has changed from: ", vm.person);
    // });

    //create a watch on zipcode
    $scope.$watch(function() {return vm.person.zipcode;}, function(newValue, oldValue) {
      $log.log("Zipcode has changed from: " + oldValue + " to: " + newValue);
      if(!angular.isDefined(newValue)) {
        return;
      }
      if (angular.isDefined(newValue)) {
        if (newValue.length === 5) {
          if (newValue == "90210") {
            vm.person.city = "Beverly Hills, CA";
          } else if(newValue == "94041") {
            vm.person.city = "Mountain View, CA";
          } else {
            $log.warn("Did not find that zipcode.")
          }
        }
      }
    });
  })
;
