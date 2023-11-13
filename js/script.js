//---------------- FUNÇÕES GERAIS ------------------/
function togglePopup(input, label) {
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", () => {
    label.classList.add("required-popup");
    });

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
    });
}

function estilizarInputCorreto(input, helper) {
    helper.classList.remove("visible");
    input.classList.remove("error");
    input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
    helper.classList.add("visible");
    input.classList.add("error");
    input.classList.remove("correct");
}

  // ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

togglePopup(usernameInput, usernameLabel)

// Validar valor do input
usernameInput.addEventListener("change", (e) => {
let valor = e.target.value

if(valor.length < 10){
// Adicionar estilos dinâmicos se o valor tiver menos de 10 caracteres
    usernameHelper.innerText = "Seu username precisa ter 10 ou mais caracteres"
    estilizarInputIncorreto(usernameInput, usernameHelper)
    inputsCorretos.username = false
    } else {
// Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(usernameInput, usernameHelper);
    inputsCorretos.username =  true
}
})

// --------- VALIDAÇÃO EMAIL -------------------//
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

// VALIDAR VALOR DO INPUT
emailInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor.includes("@") && valor.includes(".com")){
        // Adicionar estilos dinâmicos se o valor estiver correto
        estilizarInputCorreto(emailInput, emailHelper);
        inputsCorretos.email = true
    } else {
        // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
        emailHelper.innerText = "Precisa inserir um email válido";
        estilizarInputIncorreto(emailInput, emailHelper);
        inputsCorretos.email = false
    }
})

// ---------- VALIDAÇÃO COMENTÁRIOS ---------- //
let comentarioInput = document.getElementById("comentario");
let comentarioLabel = document.querySelector('label[for="comentario"]');
let comentarioHelper = document.getElementById("comentario-helper");

togglePopup(comentarioInput, comentarioLabel)

// Validar valor do input
comentarioInput.addEventListener("change", (e) => {
let valor = e.target.value

    if(valor.length < 15){
     // Adicionar estilos dinâmicos se o valor tiver menos de 10 caracteres
    comentarioHelper.innerText = "Seu comentário precisa ter 15 ou mais caracteres"
    estilizarInputIncorreto(comentarioInput, comentarioHelper)
    inputsCorretos.comentario = false
    } else {
      // Adicionar estilos dinâmicos se o valor estiver correto
    estilizarInputCorreto(comentarioInput, comentarioHelper);
    inputsCorretos.comentario =  true
    }
})

// ----------- EVITAR ENVIO DO FORMULÁRIO -------------//
let btnSubmit = document.querySelector('button[type="submit"]')
let inputsCorretos = {
    username: true,
    email: false,
    comentario: false,
    
}

btnSubmit.addEventListener("click", (e) => {
    if(inputsCorretos.username == false ||
        inputsCorretos.email == false ||
        inputsCorretos.comentario == false
        ){
        e.preventDefault()
        alert("Os campos obrigatórios precisam ser preenchidos corretamente")
    }else{
        alert("Formulário enviado com sucesso")
    }
})