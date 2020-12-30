import {Cliente} from "./Cliente.js";
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor.js';
import{ SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor("Tais", 25000, 11122233345);
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Gabriela", 12500, 88822233345);
gerente.cadastrarSenha("123")

// sistema de autenticacao com método login estático
const cliente = new Cliente("Debora", 11133355578, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");


const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteEstaLogado,diretorEstaLogado, clienteEstaLogado);
