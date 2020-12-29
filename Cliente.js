export class Cliente {
    nome;   
    _cpf;


// #### acessores(set, get)
    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf){
        this.nome = nome;
        this._cpf = cpf;
    }
}

    
