var app = angular.module("APP", ["ionic", "restangular"]);//

app.config(function ($stateProvider, $urlRouterProvider, RestangularProvider, $httpProvider) {
    $stateProvider
    //.state('home', { url: '/home', templateUrl: "app/views/home.html", controller: "homeController" })    
    //.state('cadastrar', { url: '/cadastrar', templateUrl: "app/views/cadastrar.html", controller: "clienteController" })
    .state('app', { url: "/app", abstract: true, templateUrl: "app/views/menu.html", controller: "menuController" })
    .state('app.home', { url: "/home", views: { 'menuContent': { templateUrl: "app/views/home.html" } } })
    //.state('app.listar', { url: '/app/listar', templateUrl: "app/views/listar.html", controller: "listarController" })
    .state('app.lpessoas', { url: "/lpessoas", views: { 'menuContent': { templateUrl: "app/views/lpessoas.html", controller: "lpController" } } })
    .state('app.mlista', { url: "/mlista", views: { 'menuContent': { templateUrl: "app/views/mlista.html", controller: "homeController" } } })
    //.state('app.lpessoas', { url: "/lpessoas", views: { 'menuContent': { templateUrl: "app/views/lpessoas.html", controller: "lpController" } } })
    $urlRouterProvider.otherwise('/app/home');

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    //RestangularProvider.setBaseUrl('mongodb://localhost/STAGE');//27017
    RestangularProvider.setBaseUrl('https://api.mongolab.com/api/1/databases/angmon/collections');
    RestangularProvider.setDefaultRequestParams({apiKey: 'gebsuYE6jEd5Pmfb2Ph3ridAL0hQWprB'})
    RestangularProvider.setRestangularFields({
        id: '_id'
    });
    RestangularProvider.setRequestInterceptor(function (elem, operation, what) {
        if (operation === 'put') {
            elem._id = undefined;
            return elem;
        }
        return elem;
    });
});