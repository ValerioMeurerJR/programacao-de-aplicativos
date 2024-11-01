import Carro from './Carro';
import './index.css';

var listaVeiculos: Carro[] = []

document.getElementById("botao-cadastrar")?.addEventListener("click", (event: MouseEvent) => {
    event.preventDefault();
    const modelo = document.getElementById("modelo") as HTMLInputElement;
    const cor = document.getElementById("cor") as HTMLInputElement;
    const ano = document.getElementById("ano") as HTMLInputElement;
    const preco = document.getElementById("preco") as HTMLInputElement;
    const placa = document.getElementById("placa") as HTMLInputElement;
    const imagem = document.getElementById("imagem") as HTMLInputElement;

    const novoCarro = new Carro(
        modelo.value,
        cor.value,
        ano.value,
        preco.value,
        imagem.value,
        placa.value
    )
    listaVeiculos.push(novoCarro);

    const lista_campos = ["modelo", "cor", "ano", "preco", "imagem", "placa"]

    lista_campos.forEach(carro => (document.getElementById(carro) as HTMLInputElement).value = "")
    // modelo.value = "";
    // cor.value = "";
    // ano.value = "";
    // preco.value = "";
    // imagem.value = "";
    // placa.value = "";
    modelo.focus();
    render();
})

function render() {
    console.log(listaVeiculos)
    localStorage.setItem("Carros", JSON.stringify(listaVeiculos));
    const aside = document.getElementById("lista-veiculus")
    aside.innerHTML = ""

    listaVeiculos.forEach(carro => {
        aside.innerHTML += `
              <div class="card">
        <img
          src="${carro.getImagem()}"
          alt="Carro" srcset="">
        <div class="dados">
          <strong>${carro.getModelo()}</strong>
          <span>Cor: ${carro.getCor()}</span>
          <span>Ano: ${carro.getAno()}</span>
          <span>Preço: R$ ${carro.getPreco()}</span>
          <span>Placa: ${carro.getPlaca()}</span>
        </div>
        <div class="botao-card"> 
          <button id="button-ver">VER</button>
          <button id="button-deletar" onclic="Deletar(${carro.getId()})" >DELETAR</button>
        </div>
      </div>        
        `
    })

}

function Onload() {
    const carroStorage = localStorage.getItem("Carros");
    if (carroStorage) {
        listaVeiculos = JSON.parse(carroStorage);
        console.log("Tarefas recuperadas: ");
        render();
    }
}

function Deletar(id: number) {
    // Carros = Carros.filter(carro => carro.id !== id)
    render();
}