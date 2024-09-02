import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import leia from "readline-sync"

const atividades = [
    "Sacar",
    "Depositar",
    "Ver saldo"

]
var cb1 = new ContaBancaria(new Titular("Valerio", "000.000.000-00", "47998558854", "valerio@gmail.com"));
var sair = true;
while (sair) {
   
    var Opcao = leia.keyInSelect(atividades, 'ESCOLHA UMA OPÇÃO: ')
    switch (Opcao) {
        case 0:
            var valor = leia.questionFloat("Informe o valor para sacar: ");
            cb1.sacar(valor);
            break;
        case 1:
            var valor = leia.questionFloat("Informe o valor para depositar: ");
            cb1.depositar(valor);
            break;
        case 2:
            cb1.consultarSaldo();
            break;
        default:
            console.log("VOCE ESCOLHEU SAIR");
            sair = false;
            break;
    }
}