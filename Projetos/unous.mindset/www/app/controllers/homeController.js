app.controller("homeController", function ($scope) {
   
})

app.controller("indexController", function ($scope) {
    $scope.login = true;

    $scope.acessar = function () {
        $scope.login = false;
    }
})


