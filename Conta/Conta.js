//essa classe não foi pensada para ser instanciada diretamente === Classe abstrata

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta) {
           throw new Error("Você não deveria instanciar um obj do tipo conta diretamente. Essa é uma classa abstrata")
       }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor) {
        /* esse método será sobrescrito nos tipos de conta; método abstrato
        let taxa = 1
        return this._sacar(valor, taxa);*/
        throw new Error("O método sacar() de Conta.js é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }

        return 0;
    }

    depositar(valor) {
        this._saldo += valor;
    }

    tranferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}