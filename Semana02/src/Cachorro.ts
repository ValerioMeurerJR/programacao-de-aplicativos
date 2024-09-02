import Dono from "./Dono";

export default class Cachorro {
    constructor(nome: string, raca: string, cor: string, genero: boolean, tamanho: string, dono:Dono) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.genero = genero;
        this.tamanho = tamanho;
        this.dono = dono;
        this.data = Date();
    }
    data: string;
    nome: string;
    raca: string;
    cor: string;
    genero: boolean;
    tamanho: string;
    dono: Dono;

    exibirCachorro() {
        if (this.genero) {
            var Inicio = "O cachorro";
        } else {
            var Inicio = "A cachorra";
        }
        console.log(`${Inicio} ${this.nome} é da raça ${this.raca} e da cor ${this.cor}`);
        console.log(this.data)
    }
    exbirDono(){
        console.log(`O Dono do ${this.nome} e ${this.dono.nome} e telefone ${this.dono.telefone}`);
    }

}