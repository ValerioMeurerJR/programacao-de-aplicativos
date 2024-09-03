import ContaBancaria from "./ContaBancaria";
import ContaCorrente from "./ContaCorrente";
import Titular from "./Titular";
import leia from "readline-sync"

const atividades = [
    "Sacar",
    "Depositar",
    "Ver saldo",
    "Mostrar Dados da conta",
    "Exibir chave PIX"

]
var Conta = new ContaBancaria(new Titular("", "", "", ""));
var sair = true;
var Opcao2 = leia.keyInSelect(["Conta Bancaria", "Conta Corrente"], 'ESCOLHA UMA CONTA: ')
switch (Opcao2) {
    case 0:
        Conta = new ContaBancaria(new Titular("Valerio", "000.000.000-00", "47998558854", "valerio@gmail.com"));
        break;
    case 1:
        Conta = new ContaCorrente(new Titular("Valerio", "000.000.000-00", "47998558854", "valerio@gmail.com"));
        break;
    default:        
        var sair = false;
}

while (sair) {

    var Opcao = leia.keyInSelect(atividades, 'ESCOLHA UMA OPÇÃO: ')
    switch (Opcao) {
        case 0:
            var valor = leia.questionFloat("Informe o valor para sacar: ");
            Conta.sacar(valor);
            break;
        case 1:
            var valor = leia.questionFloat("Informe o valor para depositar: ");
            Conta.depositar(valor);
            break;
        case 2:
            Conta.consultarSaldo();
            break;
        case 3:
            Conta.mostrarDadosConta();
            break;
        case 4:
            Conta.exibirChavePix();
            break;
        default:
            console.log("VOCE ESCOLHEU SAIR");
            sair = false;
            break;
    }
}


