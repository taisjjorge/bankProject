import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroContas = 0;
    agencia;
    _cliente;
    //#saldo = 0;  https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0;

    // acessores (set, get) sempre são publicos, não iniciar com _(caracter privado).
    // ######### PROTEÇÃO PARA ATRIBUIR VALOR CORRETO COM set
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }
    // APÓS ACESSORES, DESCREVER CONSTRUCTOR
    constructor(agencia, cliente){
        this.agencia = agencia; 
        this.cliente = cliente;
        ContaCorrente.numeroContas +=1; 
    }


    sacar(valor){
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor){
       if (valor <= 0) {
           return;
       }   
        this._saldo += valor;    
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}
