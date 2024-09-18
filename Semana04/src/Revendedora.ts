import leia from "readline-sync";
import Veiculo from "./Veiculo";

// marca: string;
// modelo: string;
// ano: number;
// valor: number;
// disponivel: boolean;

export default class Revendedora {
    listaVeiculos: Veiculo[] = []

    private save(veiculo: Veiculo) {
        this.listaVeiculos.push(veiculo)
        console.log(`Novo veiculo ${veiculo.marca} foi criada com sucesso`);
    }

    public addVeiculo(): void {
        var marca = leia.question("INFORME A MARCA: ");
        var modelo = leia.question("INFORME A MODELO: ");
        var ano = leia.questionInt("INFORME O ANO: ");
        var valor = leia.questionFloat("INFORME A VALOR: ");
        var placa = leia.question("INFORME A PLACA: ");
        var dispo = leia.keyInSelect(["DISPONIVEL", "NAO DISPONIVEL"], 'ESCOLHA UMA OPÇÃO: ') + 1;
        switch (dispo) {
            case 1:
                var disponibilidade = true
                break;
            default:
                var disponibilidade = false
                break;
        }
        var veiculo = new Veiculo(marca, modelo, ano, valor, disponibilidade, placa);
        this.save(veiculo);
        console.table(this.listaVeiculos)
    }
    public buscarVeiculo(): void {
        do {

            console.log("---------------MENU-------------------")
            var Menu = leia.keyInSelect(["BUSCA POR ", "BUSCA POR MARCA", "BUSCA POR MODELO", "BUSCA POR ANO", "BUSCA POR PLACA", "LISTAR DISPONIVEL"], 'ESCOLHA UMA CONTA: ') + 1
            switch (Menu) {
                case 1:
                    break;
                case 2:
                    break;
                case 3:
                    break;
                case 4:
                    break;
                default:
                    console.log("VOCE ESCOLHEU VOLTAR");
                    break;
            }
        } while (Menu !== 0);

    }
 
    public realizarVenda() {

    }
    private listaVeiculoDisponivel(): void {
        for(var i= 0; i < this.listaVeiculos.length; i++ ){
            if(this.listaVeiculos[i].getdisponivel()){
                console.log(``)
            }
        }
    }

}