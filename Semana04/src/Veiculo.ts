export default class Veiculo {
    marca: string;
    modelo: string;
    ano: number;
    valor: number;
    disponivel: boolean;
    historicoTransferencia: string [] = []
    placa: string;

    constructor(marca: string, modelo: string, ano: number, valor: number, disponivel: boolean, placa: string){
        this.marca= marca;
        this.modelo= modelo;
        this.ano= ano;
        this.valor= valor;
        this.placa = placa;
        this.disponivel= disponivel;
    }

    sethistoricoTransferencia(valor: string){
        this.historicoTransferencia.push(valor);
    }

    setdisponivel(valor:boolean): void{
        this.disponivel = valor;
    }
    getdisponivel(): boolean{
        return this.disponivel;
    }

    public detalhesVeiculo():void {
        console.log(`MARCA ${this.marca}`);
        console.log(`MODELO ${this.modelo}`);
        console.log(`ANO ${this.ano}`);
        console.log(`VALOR ${this.valor}`);
        console.log(`PLACA ${this.placa}`);
        if(this.disponivel){
            console.log(`DISPONIBILIDADE: SIM`);
        }   else {
            console.log(`DISPONIBILIDADE: NAO`);
        }
    }
    public registrarTransacao(tipo: string, comprador: string): void{
    }
}