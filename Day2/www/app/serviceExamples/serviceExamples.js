//IIFE trick
;(function() {

    angular.module('serviceExamples', [])
      .controller('AlphaController', function() {
          var vm = this;
          vm.stuff = "Here it is";
      })

}) ();
