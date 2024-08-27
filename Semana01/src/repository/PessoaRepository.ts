import { cadastraCelular, Celular } from "./CelularRepository";


export type Pessoa = {
    nome: string,
    cpf: string,
    dataNascimento: string,
    contatos: {
        telefones: string[],
        emails: string[]
    },
    celular: Celular 
}

export function cadastraPessoa(parametros: Pessoa){
    console.log("PESSOA CADASTRADO NO BANCO DE DADOS...");
    cadastraCelular(parametros.celular)
    console.table(parametros);
}