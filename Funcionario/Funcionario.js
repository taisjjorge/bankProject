// essa é uma classe abstrata 

export class Funcionario {
    //propriedades necessárias, usar dentro do constructor
    //de forma privada, para que só esta classe possa modificar
    constructor(nome, salario, cpf){
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;
        
        this._bonificacao = 1;
        this._senha;
    }

    autenticar(senha){
        return senha == this._senha;
    }
    cadastrarSenha(senha){
        this._senha = senha;

    }
}