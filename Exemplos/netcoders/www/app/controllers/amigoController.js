//É dentro do controller que fica todo o código
//Em JAVASCRIPT da TELA
//TODA a programação da tela fica aqui
//Dentro, tudo que vc digitava la no JQUERY
//É aqui que vc vai colocar
aplicacao.controller("amigoController", function ($scope) {

    //O objeto SCOPE equivale a uma VIEW MODEL
    //Ele transfere dados da VIEW pro CONTROLLER e VICE VERSA
    //View BINDING
    $scope.listaAmigos = [{ nome: "Zina da Silva" },
                          { nome: "Bozo de Souza" },
                          { nome: "Bozina dos Santos" }];

});