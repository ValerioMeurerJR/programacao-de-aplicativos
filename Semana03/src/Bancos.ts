import leia from "readline-sync"
import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";

export default class Banco {
    private contas: ContaBancaria[] = []

    private save(conta: ContaBancaria) {
        this.contas.push(conta);
        console.log(`Conta ${conta.getNumero()} foi criada com sucesso`);

    }

    public addAccount() {
        console.log("---------------CRIANDO CONTA-------------------")
        var nome = leia.question("DIGITE SEU NOME: ");
        var cpf = leia.question("DIGITE SEU CPF: ");
        var telefone = leia.question("DIGITE SEU TELEFONE: ");
        var tipoConta = leia.keyInSelect(["Conta Corrente", "Conta Poupança"], 'ESCOLHA UMA CONTA: ') + 1;

        var titular = new Titular(nome, cpf, telefone);
        var conta: ContaBancaria;

        if (tipoConta === 1) {
            conta = new ContaCorrente(titular);
        } else {
            conta = new ContaPoupanca(titular);
        }
        this.save(conta);
    }
    public removerConta() {
        console.log("---------------DELETAR CONTA-------------------")
        var numeroConta = leia.question("DIGITE O NUMERO DA CONTA PARA DELETAR: ")
        for (var i = 0; i < this.contas.length; i++) {
            if (numeroConta === this.contas[i].getNumero()) {
                // LOGICA DE DELETAR
                this.contas.splice(i, 1);
                return;
            }
        }

        // var contaExiste = this.contas.find(conta => conta.getNumero() === numeroConta);
        // if(!contaExiste){
        //     console.log(`NÃO FOI ENCONTRADO NENHUMA CONTA COM O NÚMERO ${numeroConta}`);
        //     return;
        // }

        console.log(`NÃO FOI ENCONTRADO NENHUMA CONTA COM O NÚMERO ${numeroConta}`);
    }
    public mostrarContas() {
        console.table(this.contas);

    }
    private transferir(NumeroConta: number) {
        var NumeroContaDestino = leia.question("INFOME O NUMERO DA CONTA PARA TRANSFERIR: ");
        var indexDestino = this.contas.findIndex(conta => conta.getNumero() === NumeroContaDestino);
        if (indexDestino === -1) {
            console.log("CONTA DE DESTINO NAO ENCONTRADO.");
            return;
        }
        var valor = leia.questionFloat("INFOME O VALOR: ");
        if (this.contas[NumeroConta].sacarTrans(valor)) {
            this.contas[indexDestino].depositarTrans(valor);
        }
    }

    public AcessarConta() {
        var numeroConta = leia.question("DIGITE O NUMERO DA CONTA: ")
        var indexConta = this.contas.findIndex(conta => conta.getNumero() === numeroConta);
        if (indexConta === -1) {
            console.log("CONTA DE NAO ENCONTRADO.");
            return;
        }
        console.log("---------------MENU DA CONTA-------------------")
        const atividades = [
            "Sacar",
            "Depositar",
            "Ver saldo",
            "Mostrar Dados da conta",
            "Exibir chave PIX",
            "Transferencia"
        ]

        for (var indexConta = 0; indexConta < this.contas.length; indexConta++) {
            if (numeroConta === this.contas[indexConta].getNumero()) {
                do {
                    var Opcao = leia.keyInSelect(atividades, 'ESCOLHA UMA OPÇÃO: ') + 1
                    switch (Opcao) {
                        case 1:
                            var valor = leia.questionFloat("Informe o valor para sacar: ");
                            this.contas[indexConta].sacar(valor);
                            break;
                        case 2:
                            var valor = leia.questionFloat("Informe o valor para depositar: ");
                            this.contas[indexConta].depositar(valor);
                            break;
                        case 3:
                            this.contas[indexConta].consultarSaldo();
                            break;
                        case 4:
                            this.contas[indexConta].mostrarDadosConta();
                            break;
                        case 5:
                            this.contas[indexConta].exibirChavePix();
                            break;
                        case 6:
                            this.transferir(indexConta);
                            break;
                        default:
                            console.log("VOCE ESCOLHEU SAIR");
                            break;
                    }

                } while (Opcao !== 0);
            }
        }
    }
}