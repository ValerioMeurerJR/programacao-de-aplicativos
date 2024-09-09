import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";

export default class ContaCorrente extends ContaBancaria {
    private limite: number;
    constructor(titular: Titular) {
        super(titular);
        this.limite = 1000;
    }

    public getLimite(): number {
        return this.limite;
    }
    public setLimite(valor: number): void {
        this.limite = valor;
    }
    public override sacar(valor: number): void {
        var valorDisponivel = this.getSaldo() + this.limite;
        console.log(`------------------------------------------------------------`);
        if (valor > valorDisponivel || valor <= 0) {
            console.log(`Saldo/Limite insuficiente para saque.`);
            console.log("------------------------------------------------------------");
            return;
        }
        if (valor > this.getSaldo()) {
            var aux = valor - this.getSaldo();
            this.limite = this.limite - aux;
            this.setSaldo(0);
            console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
            console.log(`O saldo atual é R$ ${this.getSaldo().toFixed(2)}`);
            console.log(`Limite atual é R$ ${this.limite.toFixed(2)}`);
            console.log("------------------------------------------------------------");
            return;
        }

        this.setSaldo(this.getSaldo() - valor);
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        console.log(`O saldo atual é R$ ${this.getSaldo().toFixed(2)}`);
        console.log(`Limite atual é R$ ${this.limite.toFixed(2)}`);
        console.log("------------------------------------------------------------");
        return;
    }
    public override sacarTrans(valor: number): boolean  {
        var valorDisponivel = this.getSaldo() + this.limite;
        console.log(`------------------------------------------------------------`);
        if (valor > valorDisponivel || valor <= 0) {
            console.log(`Saldo/Limite insuficiente para transferencia.`);
            return false;
        }
        if (valor > this.getSaldo()) {
            var aux = valor - this.getSaldo();
            this.limite = this.limite - aux;
            this.setSaldo(0);
            console.log(`Transferencia de R$ ${valor.toFixed(2)} realizado com sucesso.`);
            console.log(`O saldo atual é R$ ${this.getSaldo().toFixed(2)}`);
            console.log(`Limite atual é R$ ${this.limite.toFixed(2)}`);
            return true;
        }

        this.setSaldo(this.getSaldo() - valor);
        console.log(`Transferencia de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        console.log(`O saldo atual é R$ ${this.getSaldo().toFixed(2)}`);
        console.log(`Limite atual é R$ ${this.limite.toFixed(2)}`);
        return true;
    }
    public override depositar(valor: number) {
        console.log("------------------------------------------------------------");
        if (valor <= 0) {
            console.log("Valor do depósito é inválido!!!");
            console.log("------------------------------------------------------------");
            return;
        }
        if (this.limite < 1000) {
            var Lim = 1000 - this.limite
            this.limite += Lim;
            this.setSaldo(this.getSaldo() + (valor - Lim));
            console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
            console.log(`O saldo atual é R$ ${this.getSaldo().toFixed(2)}`);
            console.log(`Seu Limite atual é R$ ${this.limite.toFixed(2)}`);
            console.log("------------------------------------------------------------");
            return;
        }
        this.setSaldo(this.getSaldo() + valor);
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso.`);
        console.log(`O saldo atual é R$ ${this.getSaldo().toFixed(2)}`);
        console.log(`Seu Limite atual é R$ ${this.limite.toFixed(2)}`);
        console.log("------------------------------------------------------------");

    }
    
    public override depositarTrans(valor: number) {
        if (valor <= 0) {
            console.log("Valor do depósito é inválido!!!");
            console.log("------------------------------------------------------------");
            return;
        }
        if (this.limite < 1000) {
            var Lim = 1000 - this.limite
            this.limite += Lim;
            this.setSaldo(this.getSaldo() + (valor - Lim));
            console.log("------------------------------------------------------------");
            return;
        }
        this.setSaldo(this.getSaldo() + valor);
        console.log("------------------------------------------------------------");
    }

}