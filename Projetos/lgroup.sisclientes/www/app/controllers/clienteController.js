//o objeto scope é um objeto interno no NG
//ele é como se fosse o model 
//serve pra transferir dados da view pro controller e vice versa
//injetamos o objeto de transferencia

//pros controllers visualizarem os services temos q injeta-los no controller
aplicativo.controller("clienteController", function ($scope, clienteService) {

    //assim q abrir a tela de listar vai abrir o controller, temos q pegar os dados do service e desce pra tela
    $scope.listaClientes = clienteService.Listar();


    $scope.cliente = {};

    //o nome de pegar da view e trazer pro controller e pegar do controller e sincronizar na view = two way data binding

    $scope.clickLimpar = function () {
        $scope.cliente.nome = "";
        $scope.cliente.email = "";
        $scope.cliente.telefone = "";
        $scope.cliente.data = "";
    };

    $scope.clickCadastrar = function () {
        clienteService.Cadastrar($scope.cliente);
        $scope.clickLimpar();
    };

});