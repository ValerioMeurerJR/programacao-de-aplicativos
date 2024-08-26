import leia from "readline-sync";
import { Celular } from "./repository/CelularRepository";
import { cadastraPessoa, Pessoa } from "./repository/PessoaRepository";

var cor = leia.question("INFORME A COR DO CELULAR: ");
var marca = leia.question("INFORME A MARCA DO CELULAR: ");

var tamanho = leia.questionFloat("INFORME A TAMANHO DO CELULAR: ");
var modelo = leia.question("INFORME A MODELO DO CELULAR: ");

var celular: Celular = {
    cor,
    marca,
    tamanhotTela: tamanho,
    modelo
}

var nome = leia.question("INFORME A NOME: ");
var cpf = leia.question("INFORME A CPF: ");
var dataNascimento = leia.question("INFORME A DATA DE NASCIMENTO: ");
var telefone = leia.question("INFORME O TELEFONE: ");
var email = leia.question("INFORME O EMAILS: ");

const pessoa: Pessoa = {
    nome,
    cpf,
    dataNascimento,
    contatos: {
        telefones: [telefone],
        emails: [email]
    },
    celular,
}

cadastraPessoa(pessoa);

