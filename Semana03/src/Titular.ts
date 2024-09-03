export default class Titular {
    constructor(nome: string, cpf: string, telefone: string, email: string) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.cpf = cpf;
    }
    private nome: string;
    private telefone: string;
    private email: string;
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
    public getEmail(): string{
        return this.email;
    }  
    public setEmail(valor: string): void{
        this.email = valor;
    }  
    public getCpf(): string{
        return this.cpf;
    }
    public setCpf(valor: string): void{
        this.cpf = valor;
    }
}