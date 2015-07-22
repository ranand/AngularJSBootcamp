angular.module('menu', [])
  .controller('MenuController', function(APP_CONFIG) {
    var vm = this;
    vm.appName = APP_CONFIG.appName;
  });
