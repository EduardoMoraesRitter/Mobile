aplicacao.controller("homeController",
    function ($rootScope, $mdSidenav, $mdUtil) {

        $rootScope.menuEsquerdo = $mdUtil.debounce(function () {
            $mdSidenav("left").toggle();
        }, 300);

    });