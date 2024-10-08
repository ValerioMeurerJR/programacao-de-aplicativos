export default class Titular {
    constructor(nome: string, cpf: string, telefone: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
    }
    private nome: string;
    private telefone: string;
    private cpf: string

    public getNome(): string{
        return this.nome;
    }
    public setNome(valor: string): void{
        this.nome = valor;
    }
    public getTelefone(): string{
        return this.telefone;
    }    
    public setTelefone(valor: string): void{
        this.telefone = valor;
    }
    public getCpf(): string{
        return this.cpf;
    }
    public setCpf(valor: string): void{
        this.cpf = valor;
    }
}