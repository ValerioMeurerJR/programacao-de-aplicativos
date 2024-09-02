import Titular from "./Titular";

export default class ContaBancaria {
    constructor(titular: Titular) {
        this.saldo = 0;
        this.titular = titular;
        this.chavePix = titular.email;
        this.numero = Math.floor(Math.random() * 89999) + 10000;
        this.dataCriacao = new Date();
    }

    numero: number;
    private saldo: number;
    titular: Titular;
    chavePix: string;
    dataCriacao: Date;
    mostrarDadosConta() {
        console.log("------------------------DADOS CONTA-------------------------");
        console.log(`Nome titular: ${this.titular.nome}`);
        console.log(`telefone titular: ${this.titular.telefone}`);
        console.log(`Email titular: ${this.titular.email}`);
        console.log(`CPF titular: ${this.titular.cpf}`);
        console.log(`Número da conta: ${this.numero}`);
        console.log(`Data criação: ${this.dataCriacao}`);
        console.log(`Chave Pix: ${this.chavePix}`);
        console.log(`Saldo da conta: ${this.saldo.toFixed(2)}`);
        console.log("------------------------------------------------------------");
    }
    depositar(valor: number) {
        if (valor <= 0) {
            console.log("Valor do depósito é inválido!!!");
            return;
        }
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. O saldo atual é R$ ${this.saldo.toFixed(2)}`);
    }
    sacar(valor: number) {
        if (valor > this.saldo || valor <= 0) {
            console.log("Saldo insuficiente para saque.");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso. O saldo atual é R$ ${this.saldo.toFixed(2)}`);
    }
    consultarSaldo() {
        console.log(`Cliente ${this.titular.nome} seu saldo é de R$ ${this.saldo.toFixed(2)}`);
    }
    exibirChavePix() {
        console.log(`Cliente ${this.titular.nome} sua chave pix e ${this.chavePix} e sua conta e ${this.numero}`);
    }
}