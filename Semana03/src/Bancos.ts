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
        var numeroContaTras = leia.question("INFOME O NUMERO DA CONTA PARA TRANSFERIR: ");
        var valor = leia.questionFloat("INFOME O VALOR: ");
        if (this.contas[NumeroConta].sacarTrans(valor)) {
            for (var a = 0; a < this.contas.length; a++) {
                if (numeroContaTras === this.contas[a].getNumero()) {
                    this.contas[a].depositarTrans(valor);
                }
            }
        }
    }

    public AcessarConta() {
        console.log("---------------DELETAR CONTA-------------------")
        var numeroConta = leia.question("DIGITE O NUMERO DA CONTA: ")
        const atividades = [
            "Sacar",
            "Depositar",
            "Ver saldo",
            "Mostrar Dados da conta",
            "Exibir chave PIX",
            "Trasferencia"
        ]

        for (var i = 0; i < this.contas.length; i++) {
            if (numeroConta === this.contas[i].getNumero()) {
                var sair = true;
                while (sair) {
                    var Opcao = leia.keyInSelect(atividades, 'ESCOLHA UMA OPÇÃO: ') + 1
                    switch (Opcao) {
                        case 1:
                            var valor = leia.questionFloat("Informe o valor para sacar: ");
                            this.contas[i].sacar(valor);
                            break;
                        case 2:
                            var valor = leia.questionFloat("Informe o valor para depositar: ");
                            this.contas[i].depositar(valor);
                            break;
                        case 3:
                            this.contas[i].consultarSaldo();
                            break;
                        case 4:
                            this.contas[i].mostrarDadosConta();
                            break;
                        case 5:
                            this.contas[i].exibirChavePix();
                            break;
                        case 6:
                            this.transferir(i);
                            break;
                        default:
                            console.log("VOCE ESCOLHEU SAIR");
                            sair = false;
                            break;
                    }
                }
            }
        }
    }
}