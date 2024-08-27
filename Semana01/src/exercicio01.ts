import leia from 'readline-sync'

var nomes: string[] = [];
var idades: number[] = [];
var nomeNova: string;
var idadeNova: number;
var nomeVelha: string;
var idadeVelha: number;

function pedirInfoUsuario(qtd: number) {
    for (var i = 0; i < qtd; i++) {
        var nome = leia.question("INFORME O NOME: ");
        var idade = leia.questionInt("INFORME A IDADE: ");
        nomes.push(nome);
        idades.push(idade);
    }
}
function pessoaMaisNova(){
    for(var i = 0; i < idades.length; i++){
        if(idadeNova == undefined || idades[i] < idadeNova){
            idadeNova = idades[i];
            nomeNova = nomes[i];
        }
    }
    console.log(`A PESSOA MAIS NOVA E ${nomeNova} COM ${idadeNova} ANOS`)
}
function pessoaMaisVelha(){
     idades.forEach((idade, index) => {
        if(idadeVelha == undefined || idade > idadeVelha){
            idadeVelha = idade;
            nomeVelha = nomes[index];
        }
    })
    console.log(`A PESSOA MAIS VELHA E ${nomeVelha} COM ${idadeVelha} ANOS`)
}

pedirInfoUsuario(5);
pessoaMaisNova();
pessoaMaisVelha();
