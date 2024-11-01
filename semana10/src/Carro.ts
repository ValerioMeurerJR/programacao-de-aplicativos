export default class Carro {

    constructor(modelo: string, cor: string, ano: string, preco: string, imagem: string, placa: string){
        this.id= Math.floor(Math.random() * 10000000),
        this.modelo= modelo
        this.cor= cor
        this.ano= ano
        this.preco= preco
        this.imagem= imagem
        this.placa= placa
    }
    private id: number;
    private modelo: string;
    private cor: string;
    private ano: string;
    private preco: string;
    private imagem: string;
    private placa: string;


    public getId(): number {
        return this.id;
    }
    public getModelo(): string {
        return this.modelo
    }
    public getCor(): string {
        return this.cor
    }
    public getAno(): string {
        return this.ano
    }
    public getPreco(): string {
        return this.preco
    }
    public getImagem(): string {
        return this.imagem
    }

    public getPlaca(): string {
        return this.placa
    }



}