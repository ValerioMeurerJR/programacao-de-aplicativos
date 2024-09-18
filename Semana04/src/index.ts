import leia from "readline-sync"
import Revendedora from "./Revendedora";
var revendedora = new Revendedora();
do {
    
    console.log("---------------MENU-------------------")
    var Menu = leia.keyInSelect(["ADD VEICULO", "BUSCAR VEICULO", "REALIZAR VENDA"], 'ESCOLHA UMA CONTA: ') + 1
    switch (Menu) {
        case 1:
            revendedora.addVeiculo();
            break;
        case 2:
            revendedora.buscarVeiculo();
            break;
        case 3:
            revendedora.realizarVenda();
            break;
        default:
            console.log("VOCE ESCOLHEU SAIR");
            break;
    }
} while (Menu !== 0);



