;(function(){
    'use strict';

    angular.module('directiveExamples',['serviceExamples'])
      .directive('abcLogo', function() {
        // returns DDO - directive definition object.
        return {
          //template: '<h1>Awesome Blah Blah</h1>'
          templateUrl: 'app/directiveExamples/abcLogo.html',
          //to include text that we possible do not want Angular to throw away. Also add ng-transclude in html.
          transclude: true,
          //isolating the directive from outside world.
          scope: {
            //@ means static string.
            dept: '@'
          }
        };
      })
      .directive('abcPerson', function() {
        return {
          templateUrl: 'app/directiveExamples/abcPerson.html',
          //this is not the scope, this is the rules we specify to create the scope.
          scope: {
            // = means two way binding or an object. attribute values can be changed.
            person: '=',
            editing: '='
          }
        }
      })
      .controller('DirectiveExamplesController', function(people, $log) {
        var vm = this;

        vm.departmentName = 'Engineering';

        people.getPerson(13)
          .then(function(data){
            $log.debug(data);
            vm.person = data;
          })
        ;
      })
    //close the module
    ;
})();
