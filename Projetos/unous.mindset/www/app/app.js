var app = angular.module("APP", ["ionic"]);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    //.state('home', { url: '/home', templateUrl: "app/views/home.html", controller: "homeController" })    
    //.state('cadastrar', { url: '/cadastrar', templateUrl: "app/views/cadastrar.html", controller: "clienteController" })
    .state('app', { url: "/app", abstract: true, templateUrl: "app/views/menu.html" })
    .state('app.home', { url: "/home", views: { 'menuCont': { templateUrl: "app/views/home.html", controller: "homeController" } } })
    //.state('app.listar', { url: '/app/listar', templateUrl: "app/views/listar.html", controller: "listarController" })
    //.state('app.listar', { url: "/listar", views: { 'menuCont': { templateUrl: "app/views/listar.html", controller: "listarController" } } })
    $urlRouterProvider.otherwise('/app/home');
});

