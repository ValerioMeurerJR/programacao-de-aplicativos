import Banco from "./Bancos";
import ContaBancaria from "./ContaBancaria";
import ContaCorrente from "./ContaCorrente";
import ContaPoupanca from "./ContaPoupanca";
import Titular from "./Titular";
import leia from "readline-sync"

var Conta = new ContaBancaria(new Titular("", "", ""));
var sairBanco = true;
var nuBank = new Banco();
do {
    console.log("---------------MENU-------------------")
    var Menu = leia.keyInSelect(["CRIAR CONTA", "ACESSAR CONTA", "REMOVER CONTA", "LISTAR CONTAS"], 'ESCOLHA UMA CONTA: ') + 1
    switch (Menu) {
        case 1:
            nuBank.addAccount();
            break;
        case 2:
            nuBank.AcessarConta();
            break;
        case 3:
            nuBank.removerConta();
            break;
        case 4:
            nuBank.mostrarContas();
            break;
        default:
            var sairBanco = false;
    }
} while (sairBanco);



