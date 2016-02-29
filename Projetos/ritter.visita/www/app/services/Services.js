app.service("Services", function ($http, Restangular) {

    this.CadastrarAla = function (ala, dados) {
        //return $http({
        //    url: "http://localhost:6969/api/cliente",
        //    method: "POST",
        //    data: novoCliente
        //});
        Restangular.all(ala).customPOST(dados);
    };

    this.List = function () {
        return [
            { TELEFONE: 1, FAMILIA: "Zina", RUA: "zinamen" },
            { TELEFONE: 2, FAMILIA: "Beltrano", RUA: "belt" },
            { TELEFONE: 3, FAMILIA: "Ciclano", RUA: "cicl" },
            { TELEFONE: 4, FAMILIA: "Fulano", RUA: "fulan" }
        ];
    };

    this.Listar = function () {
        return Restangular.all("hhh").getList("").$object;
    };

});