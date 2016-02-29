app.controller("lpController", function ($scope, Services) {

    //assim q abrir atela de listar vai abrir o controler
    $scope.listaClientes = Services.Listar();

    $scope.clickCadastrarAla = function () {
        //Services.CadastrarAla($scope.ala, $scope.ala);
    };

    $scope.clickVisitar = function () {
        alert("clickVisitar");
    };

});