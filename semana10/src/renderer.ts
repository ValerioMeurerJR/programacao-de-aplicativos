import Carro from './Carro';
import Veiculo from './entity/Veiculo';
import './index.css';

var listaVeiculos: Veiculo[] = []

document.getElementById("botao-cadastrar")?.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault();
  const modelo = document.getElementById("modelo") as HTMLInputElement;
  const cor = document.getElementById("cor") as HTMLInputElement;
  const ano = document.getElementById("ano") as HTMLInputElement;
  const preco = document.getElementById("preco") as HTMLInputElement;
  const placa = document.getElementById("placa") as HTMLInputElement;
  const imagem = document.getElementById("imagem") as HTMLInputElement;

  const novoVeiculo = new Veiculo(modelo.value, cor.value, Number(ano.value), Number(preco.value), placa.value, imagem.value)
  listaVeiculos.push(novoVeiculo);
  (window as any).bancoAPI.createVeiculo(novoVeiculo)

  const lista_campos = ["modelo", "cor", "ano", "preco", "imagem", "placa"]
  lista_campos.forEach(carro => (document.getElementById(carro) as HTMLInputElement).value = "")
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

function Deletar(id: number) {
  // Carros = Carros.filter(carro => carro.id !== id)
  render();

}

document.getElementById("botao")?.addEventListener("click", async (event: MouseEvent) => {
  event.preventDefault();
  const findById = await (window as any).bancoAPI.findByIdVeiculo('9eed13d9-affa-4818-8dba-5c4148da0fa7')

  //(window as any).bancoAPI.selectVeiculo()

})

window.onload = async () => {
  const findAlls = await (window as any).bancoAPI.findAllVeiculo() as any[]
  
  findAlls.forEach(car => {
    let veiculo = new Veiculo(car.modelo,car.cor, car.ano, car.valor, car.placa, car.imagem, car.id)
    listaVeiculos.push(veiculo)
  })
  render()
}