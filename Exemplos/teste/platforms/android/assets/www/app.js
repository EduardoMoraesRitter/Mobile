var app = angular.module("MyAppp", ["ngMaterial"]);//, "restangular"]);

app.controller('MainCtrl', function($scope){//, Restangular) {
  
  $scope.name = 'Teste';

});


app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
 
    $scope.toggleRight = buildToggler('right');
   
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
            $mdSidenav(navID)
              .toggle()
              .then(function () {
                $log.debug("toggle " + navID + " is done");
              });
          },300);

      return debounceFn;
    }

  })
 app.controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });

