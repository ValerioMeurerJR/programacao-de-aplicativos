function SetInformacoes(){        
    document.getElementById('name').value = "Valério Meurer Junior"
    document.getElementById('email').value = "valerio.meurer@gmail.com"
    document.getElementById('message').value = "Unidade curricular intermediária para os cursos de desenvolvimento."
}

function CapturarInformacoes(evento){
    evento.preventDefault();
    var Nome = document.getElementById('name')
    var Email = document.getElementById('email')
    var Message = document.getElementById('message')
    if(Nome.value === ""){
        Nome.style.borderColor = 'red';
    }
    if(Email.value === ""){
        Email.style.borderColor = 'red';
    }
    if(Message.value === ""){
        Message.style.borderColor = 'red';
    } 

    if(Nome.value === ""){
        Nome.focus()
        return false;
    }else if(Email.value === ""){
        Email.focus()
        return false;
    }else if(Message.value === ""){
        Message.focus()
        return false;
    } 

    var comentario = 
    `<div class="comentario-item">
    <span>${Nome.value} - <strong>${Email.value}</strong></span>
    <p>${Message.value}</p>
    </div>`;
    document.getElementById("comentarios").innerHTML += comentario;


    Nome.value = '';
    Email.value = '';
    Message.value = '';
    document.getElementById('Enviar').disabled = true;
    //alert(`Nome: ${Nome.value},\nE-mail: ${Email.value},\nMensagem: ${Message.value}`)    
    

}

function capturarTecla(evento){
    var Nome = document.getElementById('name').value
    var Email = document.getElementById('email').value
    var Message = document.getElementById('message').value
    if(evento.key === "Enter"){        
        console.log(Email);
        CapturarInformacoes(evento)
    } 
}

function verificarDisabled() {
    var Nome = document.getElementById('name')
    var Email = document.getElementById('email')
    var Message = document.getElementById('message')
    if(Nome.value !== "" && Email.value !== "" && Message.value !== ""){
        document.getElementById('Enviar').disabled = false;
    } else {
        document.getElementById('Enviar').disabled = true;
    }
}
