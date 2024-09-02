export default class Titular {
    constructor(nome: string, cpf: string, telefone: string, email: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
    }
    nome: string;
    telefone: string;
    email: string;
    cpf: string
}