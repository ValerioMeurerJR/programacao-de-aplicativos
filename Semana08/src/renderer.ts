import './reset.css';
import Swal from 'sweetalert2'
import './index.css';
import Tarefa from './Tarefa';

let tarefas: Tarefa[] = [];

function addTarefa(): void {
    const input = document.getElementById("tarefa-text") as HTMLInputElement;
    if (!input) {
        console.error('Elemento de input não encontrado');
        return;
    }
    const tarefaTexto = input.value.trim();

    if (tarefaTexto === "") {
        Swal.fire({
            title: "Oops...",
            text: "VOCÊ TENTOU ADICIONAR UMA TAREFA SEM TEXTO!",
            icon: "error"
        });
        return;
    }
    const novaTarefa = new Tarefa(tarefaTexto)
    tarefas.push(novaTarefa);
    input.value = "";
    input.focus();
    render();
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}


function addToEnter(evento: KeyboardEvent): void {
    if (evento.key === 'Enter') {
        addTarefa();
    }
}


function render(): void {
    //console.log(tarefas);
    const listaTarefas = document.getElementById("lista-tarefa");
    if (!listaTarefas) {
        console.error('Elemento da lista de tarefas não encontrado');
        return;
    }

    listaTarefas.innerHTML = "";
    
    tarefas.forEach((tarefa: Tarefa) => {
        //console.log(tarefa);
        const li = document.createElement("li");
        if (tarefa.getCompleted()) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tarefa.getText();

        const concluir = document.createElement("span");
        concluir.textContent = "check_box";
        concluir.classList.add("check", "material-symbols-outlined");
        concluir.onclick = () => toggle(tarefa.getId());

        const editar = document.createElement("button");
        editar.textContent = "edit_note";
        editar.classList.add("material-symbols-outlined", "edit");
        editar.onclick = () => Edit(tarefa.getId());

        const deletar = document.createElement("button");
        deletar.textContent = "delete";
        deletar.classList.add("material-symbols-outlined", "delete");
        deletar.onclick = () => Delete(tarefa.getId());

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
    const index: number = tarefas.findIndex(tarefa => tarefa.getId() === id);
    if (index === -1) {
        console.error(`Tarefa com id ${id} não encontrada`);
        return;
    }
     
    tarefas[index].setCompleted(!tarefas[index].getCompleted());
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    render();
}

function Edit(id: number): void {
    const index: number = tarefas.findIndex(tarefa => tarefa.getId() === id);
    if (index === -1) {
        console.error(`Tarefa com id ${id} não encontrada`);
        return;
    }

    Swal.fire({
        title: "Editar tarefa",
        inputLabel: 'Edite o texto da tarefa',
        input: "text",
        icon: 'question',
        showCancelButton: true,
        inputValue: tarefas[index].getText(),
        confirmButtonText: "Salvar",
        preConfirm: async (text: string) => {
            if (text.trim() === "") {
                Swal.fire({
                    title: "ERRO",
                    text: "Informe um valor para atualizar!",
                    icon: "error"
                });
                return false;
            } else {
                tarefas[index].setText(text.trim());
            }
        },
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
    // const { value } = await Swal.fire({
    //     title: "Editar tarefa",
    //     inputLabel: 'Edite o texto da tarefa',
    //     input: "text",
    //     showCancelButton: true,
    //     inputValue: tarefas[index].getText(),
    //     confirmButtonText: "Salvar"  
    // })
}

function Delete(id: number): void {
    tarefas = tarefas.filter(tarefa => tarefa.getId() !== id);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    render();
}

function Onload(): void {    
    const tarefaStorage = localStorage.getItem("tarefas");
    if (tarefaStorage) {
        const tarefa = JSON.parse(tarefaStorage) as any[];
        tarefa.forEach(valor => {
            //console.log(valor.completed)
            tarefas.push(new Tarefa(valor.id, valor.text, valor.completed))
        })
        console.log("Tarefas recuperadas: ", tarefas);
        render();
    }
}

window.onload = Onload;
window.addTarefa = addTarefa;
window.addToEnter = addToEnter;


