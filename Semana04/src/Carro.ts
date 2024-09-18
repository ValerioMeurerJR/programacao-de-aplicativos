import Veiculo from "./Veiculo";

export default class Carro extends Veiculo {
    numeroPortas: number
    constructor(marca: string, modelo: string, ano: number, valor: number, disponivel: boolean, placa: string, numeroPortas: number){
        super(marca, modelo, ano, valor, disponivel, placa);
        this.numeroPortas = numeroPortas;
    }
    public override detalhesVeiculo(): void {
        console.log(`MARCA ${this.marca}`);
        console.log(`MODELO ${this.modelo}`);
        console.log(`ANO ${this.ano}`);
        console.log(`VALOR ${this.valor}`);
        console.log(`NUMERO DE PORTAS ${this.numeroPortas}`);
        if(this.disponivel){
            console.log(`DISPONIBILIDADE: SIM`);
        }   else {
            console.log(`DISPONIBILIDADE: NAO`);
        }        
    }    

}