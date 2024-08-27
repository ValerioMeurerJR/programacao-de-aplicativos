export type Celular = {
    tamanhotTela:  number,
    marca: string,
    cor: string,
    modelo: string
}

export function cadastraCelular(parametros: Celular){
    console.log("CELULAR CADASTRADO NO BANCO DE DADOS...");
    console.table(parametros);
}
