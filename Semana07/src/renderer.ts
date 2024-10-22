/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */
import './reset.css';
import Swal from 'sweetalert2'
import './index.css';


interface Tarefa {
    id: number;
    text: string;
    completed: boolean;
}

let tarefas: Tarefa[] = [];

function addTarefa(): void {
    const input = document.getElementById("tarefa-text") as HTMLInputElement | null;
    if (!input) {
        console.error('Elemento de input não encontrado');
        return;
    }

    const tarefaTexto: string = input.value.trim();

    if (tarefaTexto === "") {
        Swal.fire({
            title: "ERRO",
            text: "VOCÊ TENTOU ADICIONAR UMA TAREFA SEM TEXTO!",
            icon: "error"
        });
        return;
    }

    const novaTarefa: Tarefa = {
        id: Math.floor(Math.random() * 10000000),
        text: tarefaTexto,
        completed: false
    };

    tarefas.push(novaTarefa);
    input.value = "";
    input.focus();
    render();
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function render(): void {
    console.log(tarefas);
    const listaTarefas = document.getElementById("lista-tarefa");
    if (!listaTarefas) {
        console.error('Elemento da lista de tarefas não encontrado');
        return;
    }

    listaTarefas.innerHTML = "";

    tarefas.forEach((tarefa: Tarefa) => {
        const li = document.createElement("li");
        if (tarefa.completed) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tarefa.text;

        const concluir = document.createElement("span");
        concluir.textContent = "check_box";
        concluir.classList.add("check", "material-symbols-outlined");
        concluir.onclick = () => toggle(tarefa.id);

        const editar = document.createElement("button");
        editar.textContent = "edit_note";
        editar.classList.add("material-symbols-outlined", "edit");
        editar.onclick = () => Edit(tarefa.id);

        const deletar = document.createElement("button");
        deletar.textContent = "delete";
        deletar.classList.add("material-symbols-outlined", "delete");
        deletar.onclick = () => Delete(tarefa.id);

        const div = document.createElement("div");
        div.appendChild(concluir);
        div.appendChild(editar);
        div.appendChild(deletar);

        li.appendChild(span);
        li.appendChild(div);

        listaTarefas.appendChild(li);
    });
}

function toggle(id: number): void {
    const index: number = tarefas.findIndex(tarefa => tarefa.id === id);
    if (index === -1) {
        console.error(`Tarefa com id ${id} não encontrada`);
        return;
    }

    tarefas[index].completed = !tarefas[index].completed;
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    render();
}

function Edit(id: number): void {
    const index: number = tarefas.findIndex(tarefa => tarefa.id === id);
    if (index === -1) {
        console.error(`Tarefa com id ${id} não encontrada`);
        return;
    }

    Swal.fire({
        title: "Informe a nova tarefa",
        input: "text",
        showCancelButton: true,
        inputValue: tarefas[index].text,
        confirmButtonText: "Salvar",
        showLoaderOnConfirm: true,
        preConfirm: async (text: string) => {
            if (text.trim() === "") {
                Swal.fire({
                    title: "ERRO",
                    text: "Informe um valor para atualizar!",
                    icon: "error"
                });
                return false;
            } else {
                tarefas[index].text = text.trim();
            }
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Sucesso",
                text: "Salvo!",
                icon: "success"
            });
            localStorage.setItem("tarefas", JSON.stringify(tarefas));
            render();
        }
    });
}

function Delete(id: number): void {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    render();
}

function addToEnter(evento: KeyboardEvent): void {
    if (evento.key === 'Enter') {
        addTarefa();
    }
}

function Onload(): void {    
    const tarefaStorage = localStorage.getItem("tarefas");
    if (tarefaStorage) {
        tarefas = JSON.parse(tarefaStorage) as Tarefa[];
        console.log("Tarefas recuperadas: ", tarefas);
        render();
    }
}

window.onload = Onload;

const inputTarefa = document.getElementById("tarefa-text") as HTMLInputElement | null;
if (inputTarefa) {
    inputTarefa.addEventListener("keypress", addToEnter);
}
