//IIFE trick
;(function() {

    'use strict';

    angular.module('serviceExamples', [])
      .controller('AlphaController', function(APP_NAME, employeeList, stringUtils, $log, stringUtilsFactory) {
          var vm = this;
          vm.stuff = "Here it is";
          vm.appName = APP_NAME;
          vm.employeeList = employeeList;

          var original = 'this is a string';

          $log.log(stringUtils.makeUpperCase(original));

          $log.log('factory : ' + stringUtilsFactory.makeUpperCase(original));
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
      .controller('BetaController', function(employeeList, stringUtils, $log, stringUtilsFactory, reverseString) {
        var vm = this;
        vm.addNewEmployee = function() {
          employeeList.push({name: 'Jess'});
        };

        var myString = 'THIS IS UPPERCASE STRING';
        $log.log(stringUtils.makeLowerCase(myString));

        $log.log('factory : ' + stringUtilsFactory.makeLowerCase(myString));

        $log.log('factory 2 : ' + reverseString(myString));
      })

      .service('stringUtils', function() {
        // angular treats this as a constructor (call with new)
        this.makeUpperCase = function(s) {
          return s.toUpperCase();
        };

        this.makeLowerCase = function(s) {
          return s.toLowerCase();
        };
      })

      .factory('stringUtilsFactory', function() {
        // new is not called here. whatever is returned is the factory.
        return {
          makeUpperCase : function(s) {
            return s.toUpperCase();
          },
          makeLowerCase : function(s) {
            return s.toLowerCase();
          }
        }
      })

      // factory can return by itself.
      .factory('reverseString', function() {
        return function(s) {
          return "this is some reversed string";
        }
      })

    // close the module
    ;

})();
