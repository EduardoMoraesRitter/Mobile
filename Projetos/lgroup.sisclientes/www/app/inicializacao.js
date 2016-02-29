//pra começar a brincar com o angular a primeira coisa q temos q fazer é criar um modulo de inicialização
//é aqui dentro q subiremos o angular pra memoria
//e inicializaremos tds os modulos e configurações deles
//aqui em cima fazemos as injeções de dependencia, é aqui q colocamos os modulos pra rodar junto "ngRoute",

var aplicativo = angular.module('SISCLIENTES', ['ionic']);


aplicativo.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Stuff in here
    });
})

//apos inicializa o aplicativo SISCLIENTES configuramos as urls amigaveis (rotas de navegacao) pra cada 1 pag = 1 rota
//dentro do config deixamos tds as configurações de inicialização do nosso aplicativo
//url amigaveis, modulos e variaveis, configurações componentes
//a grosso modo é tipo um routeconfig.cs $routeProvider
aplicativo.config(function ($stateProvider, $urlRouterProvider) {
    //como temos 3 pag criamos 3 urls
    //$routeProvider.when
    $stateProvider.state('home', {url: '/home', templateUrl: "app/views/home.html", controller: "homeController" })
    .state('listar', { url: '/listar', templateUrl: "app/views/listar.html", controller: "clienteController" })
    .state('cadastrar', { url: '/cadastrar', templateUrl: "app/views/cadastrar.html", controller: "clienteController" });

    //caso nao informe nenhuma url, mandamos para a home
    $urlRouterProvider.otherwise('/home');
});