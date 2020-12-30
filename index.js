import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Tais", 11122233345);

const contaCorrenteTais = new ContaCorrente( cliente1, 1001);
contaCorrenteTais.depositar(500);
contaCorrenteTais.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
contaPoupanca.sacar(10);


console.log(contaPoupanca);
console.log(contaCorrenteTais)

