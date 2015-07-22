//IIFE
;(function() {
  'use strict';
  //accept an array of ids, fetch all people, companies, return a promise with data together.
  // angular.module('promiseExamples', [])
  //   //begin controller
  //   .controller('PromiseExamplesController', function($http, $log, $q, $timeout, $interval) {
  //     var vm = this;
  //
  //     //$timeout(function() { $log.log('time is up!') }, 5000);
  //     var t = $timeout(angular.noop, 5000);
  //     t.then(
  //       function() { $log.log('all timeouts'); }
  //     );
  //
  //     var i = $interval(angular.noop, 1500, 5);
  //     i.then(
  //       //success handler
  //       function() { $log.log('all intervals complete') },
  //       //error handler
  //       function() {},
  //       //notices
  //       function() { $log.log('single interval complete') }
  //
  //     );
  //
  //     // first example of promise.
  //     // $http.get('http://localhost:3000/people/1')
  //     //   .then(function(response) {
  //     //     //note the difference between promises and regular calls.
  //     //     $log.log('response is : ', response.data);
  //     //     vm.person = response.data
  //     //   })
  //     // ;
  //
  //     // second example of promise.
  //     // var p = $http.get('http://localhost:3000/people/1');
  //     //
  //     // p.then(function(response) {
  //     //   vm.person = response.data;
  //     // });
  //     //
  //     // p.then(function() {
  //     //   $log.log("within the second then()")
  //     // });
  //
  //     var p1 = $http.get('http://localhost:3000/people/1');
  //
  //     p1.then(function(response) {
  //       vm.person1 = response.data;
  //     });
  //
  //     var p2 = $http.get('http://localhost:3000/people/2');
  //
  //     p2.then(
  //       function(response) {vm.person2 = response.data;},
  //       // error handling.
  //       // look at bad request in p2.
  //       function(err) { $log.error('p2 error : ', err); }
  //     );
  //
  //     // if any of the promises does not resolve, then it will be rejected.
  //     // The following won't execute in that case.
  //     var pAll = $q.all([p1, p2, t, i]);
  //
  //     //combined promise.
  //     pAll.then(
  //       function(results) {
  //         $log.log("all promises resolved", results);
  //       },
  //       function(err) {
  //         $log.error('pAll error : ', err);
  //       }
  //     );
  //
  //   })
  //   //end controller
  // //close the module
  // ;

  angular.module('promiseExamples', [])
    .controller('PromiseExamplesController', function($q, $http, $timeout, $interval, $log) {
      var vm = this;
      vm.people_ids = [1,2,3];

      vm.addToList = function() {
        vm.people_ids.push(vm.person_id);
        $log.log('Person ids from addToList : ', vm.people_ids);
      }

      var promises = [];

      angular.forEach(vm.people_ids, function(id) {
        $log.log(id);
        var p = $http({
          url: 'http://localhost:3000/people/' + id,
          method: 'GET'
        });
        //build an array of promises.
        promises.push(p);
      })

      var pAll = $q.all(promises);
      pAll.then(
        function(results) {
          vm.persons = [];
          //$log.log('results : ', results);
          angular.forEach(results, function(data) {
            //$log.log('data : ', data.data);
            vm.persons.push(data.data);
          })
        },
        function(err) {
          $log.error('pAll error', err);
        }
      );

    })
  //close the module
  ;

})();
