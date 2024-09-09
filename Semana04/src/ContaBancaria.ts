import Titular from "./Titular";

export default class ContaBancaria {
    constructor(titular: Titular) {
        this.saldo = 0;
        this.titular = titular;
        this.chavePix = titular.getTelefone();
        this.numero = String(Math.floor(Math.random() * 89999) + 10000);
        this.dataCriacao = new Date();
    }

    private numero: string;
    private saldo: number;
    private titular: Titular;
    private chavePix: string;
    private dataCriacao: Date;

    public getTitular(): Titular {
        return this.titular;
    }
    public setTitular(valor: Titular): void {
        this.titular = valor;
    }
    public getDataCriacao(): Date {
        return this.dataCriacao;
    }
    public getNumero(): string {
        return this.numero;
    }
    public setNumero(valor: string): void {
        this.numero = valor;
    }
    public getSaldo(): number {
        return this.saldo;
    }
    public setSaldo(valor: number): void {
        this.saldo = valor;
    }
    public getChavePix(): string {
        return this.chavePix;
    }
    public setChavePix(valor: string): void {
        this.chavePix = valor;
    }

    mostrarDadosConta() {
        console.log("------------------------DADOS CONTA-------------------------");
        console.log(`Nome titular: ${this.titular.getNome()}`);
        console.log(`telefone titular: ${this.titular.getTelefone()}`);
        console.log(`CPF titular: ${this.titular.getCpf()}`);
        console.log(`Número da conta: ${this.numero}`);
        console.log(`Data criação: ${this.dataCriacao}`);
        console.log(`Chave Pix: ${this.chavePix}`);
        console.log(`Saldo da conta: ${this.saldo.toFixed(2)}`);
        console.log("------------------------------------------------------------");
    }
    depositar(valor: number) {
        console.log("------------------------------------------------------------");
        if (valor <= 0) {
            console.log("Valor do depósito é inválido!!!");
            console.log("------------------------------------------------------------");
            return;
        }
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso. O saldo atual é R$ ${this.saldo.toFixed(2)}`);
        console.log("------------------------------------------------------------");
    }
    sacar(valor: number) {
        console.log("------------------------------------------------------------");
        if (valor > this.saldo || valor <= 0) {
            console.log("Saldo insuficiente para saque.");
            console.log("------------------------------------------------------------");
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso. O saldo atual é R$ ${this.saldo.toFixed(2)}`);
        console.log("------------------------------------------------------------");
    }
    consultarSaldo() {
        console.log("------------------------------------------------------------");
        console.log(`Cliente ${this.titular.getNome()} seu saldo é de R$ ${this.saldo.toFixed(2)}`);
        console.log("------------------------------------------------------------");
    }
    exibirChavePix() {
        console.log("------------------------------------------------------------");
        console.log(`Cliente ${this.titular.getNome()} sua chave pix e ${this.chavePix} e sua conta e ${this.numero}`);
        console.log("------------------------------------------------------------");
    }

    
    sacarTrans(valor: number): boolean {
        console.log("------------------------------------------------------------");
        if (valor > this.saldo || valor <= 0) {
            console.log("Saldo insuficiente para trasferir.");
            console.log("------------------------------------------------------------");
            return false;
        }
        this.saldo -= valor;
        console.log(`Transferencia de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        console.log("------------------------------------------------------------");
        return true;
    }
    
    depositarTrans(valor: number) {
        if (valor <= 0) {
            console.log("Valor do depósito é inválido!!!");
            console.log("------------------------------------------------------------");
            return;
        }
        this.saldo += valor;
        console.log("------------------------------------------------------------");
    }
}