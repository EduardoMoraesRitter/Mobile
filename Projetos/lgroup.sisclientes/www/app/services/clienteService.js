//os services é um tipo de arquivo onde deixamos as regras de negocio, validações e chamadas ajax

//VIEW > CONTROLLER > SERVICE > AJAX > WEB SERVICES
aplicativo.service("clienteService", function () {

    this.Listar = function () {
        return [
            { CODIGO: 1, NOME: "Zina", EMAIL: "zinamen" },
            { CODIGO: 2, NOME: "Beltrano", EMAIL: "belt" },
            { CODIGO: 3, NOME: "Ciclano", EMAIL: "cicl" },
            { CODIGO: 4, NOME: "Fulano", EMAIL: "fulan" }
        ];
    };

    this.Cadastrar = function (novoCliente) {
        alert("Cliente cadastrado com sucesso!");
    };

});