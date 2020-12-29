import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// Cliente() -> chama o constructor da classe Cliente em Cliente.js
const cliente1 = new Cliente("Tais", 11122233345); 
const cliente2 = new Cliente("Alice", 88822233345);

const contaCorrenteTais = new ContaCorrente(1001, cliente1);

contaCorrenteTais.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);


let valor = 200;
contaCorrenteTais.transferir(valor, conta2);

console.log(ContaCorrente.numeroContas);


