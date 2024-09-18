import Veiculo from "./Veiculo";

export default class Moto extends Veiculo {
    cilindradas: number
    constructor(marca: string, modelo: string, ano: number, valor: number, disponivel: boolean, placa: string, cilindradas: number){
        super(marca, modelo, ano, valor, disponivel, placa);
        this.cilindradas = cilindradas;
    }
    public override detalhesVeiculo(): void {
        console.log(`MARCA ${this.marca}`);
        console.log(`MODELO ${this.modelo}`);
        console.log(`ANO ${this.ano}`);
        console.log(`VALOR ${this.valor}`);
        console.log(`CILINDRADAS ${this.cilindradas}`);
        if(this.disponivel){
            console.log(`DISPONIBILIDADE: SIM`);
        }   else {
            console.log(`DISPONIBILIDADE: NAO`);
        }            
    }    

}