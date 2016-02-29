/// <reference path="../node_modules/angular/angular.min.js" />
//Baixamos o ANGULAR via NPM
//Angular é um FRAMEWORK MVC e MVVM (Nome Carinhoso MVW (Whatever))
//Da pra trabalhar tanto com CONTROLLERS quanto BINDING
//É o ANGULAR que utilizamos para trabalhar com o ESTILO SPA
//JQUERY é um LIXO (Biblioteca)
//ANGULAR é um FRAMEWORK (Controllers, Views, Página Pai e Filha
//Scope, RootScope, Services, Dependency Injection)

//Inicializamos a nossa aplicação em ANGULAR
//Criamos um módulo, uma aplicação utilizando ANGULAR
//O Angular por padrão trabalha com INJEÇÃO DE DEPENDENCIA
//Ele é todo DESACOPLADO, sempre que baixamos algum modulo
//Temos que injetar dentro da aplicação
//Pra trabalhar com o módulo de rotas injetamos o serviço, objeto
//ngROUTE é ele quem habilita os comandos de definição e interpretação
//De rotas (url amigáveis)
//GOOGLE, NPM ou olha o arquivo e pega o NAME

//Injetamos o módulo do MATERIAL DESIGN dentro da APP
//É ele que internamente le e da ação aos WEB COMPONENTS
var aplicacao = angular.module("MADRUGADA", ["ngRoute", "ngMaterial", "ngMdIcons"]);

//Quando trabalhamos com SPA, nós não navegamos diretamente nas
//Páginas, pra cada página que quisermos abrir, navegar temos que
//Dar 1 apelido
//É o conceito de URLS AMIGAVEIS o usuário navega no apelido
//E o apelido redireciona pra página (Tela Fisica)
//Pra trabalhar com as URLS AMIGAVEIS (ROTAS, REDIRECIONAMENTOS)
//Baixamos o módulo (pacote) angular-route
//NPM INSTALL ANGULAR-ROUTE
//Essa parte lembra muito o arquivo ROUTECONFIG.cs lá no MVC
aplicacao.config(function ($routeProvider) {

    //O Objeto $routeProvider desceu do modulo NGROUTE
    //Definimos 1 URL AMIGAVEL pra CADA PÁGINA
    //Ao capturar, definir uma ROTA temos que passar 2 parametros
    //NOME DO CONTROLLER

    //NOME DA VIEW
    $routeProvider
    .when("/home", {
        controller: "homeController",
        templateUrl: "app/views/home.html"
    })
    .when("/amigo/listar", {
        controller: "amigoController",
        templateUrl: "app/views/amigos/listar.html"
    })
    .when("/amigo/cadastrar", {
        controller: "amigoController",
        templateUrl: "app/views/amigos/cadastrar.html"
    });

    //Definimos a rota padrão, se o usuário não especificar
    //Nenhuma URL amigável vai pra HOME, vai pra tela de entrada
    //É como se fosse o HOME/INDEX
    $routeProvider.otherwise({ redirectTo: "/home" });
});