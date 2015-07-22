//IIFE trick
;(function() {

    angular.module('serviceExamples', [])
      .controller('AlphaController', function(APP_NAME, employeeList) {
          var vm = this;
          vm.stuff = "Here it is";
          vm.appName = APP_NAME;
          vm.employeeList = employeeList;
      })
      // create a constant that can be injected.
      // this can't be changed. When injected, creates a copy.
      .constant('APP_NAME', 'Angular Examples')

      // don't use this method. properties can be changed.
      // when injected, creates a reference for the properties that can be modified.
      // the object itself cannot be modified.
      .constant('APP_CONFIG', {
        appName: 'Angular Examples',
        color: 'Blue'
      })

      // This is defined and can be changed at any point.
      .value('employeeList', [
        {name: 'Jill'},
        {name: 'Jake'},
        {name: 'John'}
      ])

      // Both controllers share the employeeList value service.
      .controller('BetaController', function(employeeList) {
        var vm = this;
        vm.addNewEmployee = function() {
          employeeList.push({name: 'Jess'});
        };
      })
      // .service('myService', function($http) {
      //
      // })

})();
