//IIFE trick
;(function() {

    'use strict';

    angular.module('serviceExamples', [])
      // .controller('AlphaController', function(mathFactory, $log, mathService) {
      //     var vm = this;
      //     vm.getResult = function() {
      //       vm.sum = mathService.sum(vm.num1, vm.num2);
      //       vm.diff = mathService.diff(vm.num1, vm.num2);
      //     };
      // })
      //
      // .factory('mathFactory', function() {
      //   // new is not called here. whatever is returned is the factory.
      //   return {
      //     sum : function(num1, num2) {
      //       return parseInt(num1) + parseInt(num2);
      //     },
      //     diff : function(num1, num2) {
      //       return num1 - num2
      //     }
      //   }
      // })
      //
      // .service('mathService', function() {
      //   this.sum = function(num1, num2) {
      //     return parseInt(num1) + parseInt(num2);
      //   };
      //
      //   this.diff = function(num1, num2) {
      //     return num1 - num2;
      //   }
      // })

      .factory('people', function($http, $log) {
        function getAllPeople() {
          return $http.get('http://localhost:3000/people/');
        }

        function getPerson(id) {
          return $http.get('http://localhost:3000/people/' + id);
        }

        function updatePerson(id, newData) {
          return $http.put('http://localhost:3000/people/' + id, newData);
        }

        return {
          getAllPeople: getAllPeople,
          getPerson: getPerson,
          updatePerson: updatePerson
        };
      })

      .controller('PeopleController', function(people, $log) {
        var vm = this;

        people.getAllPeople()
          .success(function(data){
            $log.debug(data);
            vm.people = data;
          });

        people.getPerson(127)
          .success(function(data){
            $log.debug(data);
            vm.person = data;
          });

        vm.changeSomeDetails = function() {
          vm.singlePerson.firstname = "abcd";
          people.updatePerson(vm.singlePerson.id, {
            firstname: vm.singlePerson.firstname
          });
        };

      })

      //Begin Company controller
      .factory('companyFac', function($http, $log) {
        function getSingleCompany(id) {
          return $http.get('http://localhost:3000/companies/' + id);
        }

        function updateCompany(id, newData) {
          return $http.put('http://localhost:3000/companies/' + id, newData);
        }

        return {
          getSingleCompany: getSingleCompany,
          updateCompany: updateCompany
        };
      })

      .controller('CompanyController', function(companyFac, $log) {
        var vm = this;

        vm.getCompany = function() {
          $log.log(vm.company_id);
          companyFac.getSingleCompany(vm.company_id)
            .success(function(data) {
              $log.debug(data);
              vm.company = data;
            });
        };

        vm.changeCompanyDetails = function() {
          companyFac.updateCompany(vm.company_id, {
            name: vm.company_name
          });
        };

      })

      //End Company controller

    // close the module
    ;

})();
